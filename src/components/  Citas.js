import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Citas.css';


const localizer = momentLocalizer(moment);

function Citas() {
  const [citas, setCitas] = useState([]);
  const [barberos, setBarberos] = useState([]); 
  const [nuevaCita, setNuevaCita] = useState({
    barbero_id: '',
    start: null,
    end: null,
    cliente_whatsapp: '',
  });
  const [mensaje, setMensaje] = useState(''); 

  
  useEffect(() => {
    axios.get('http://localhost:5000/barberos')
      .then(response => setBarberos(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:5000/citas')
      .then(response => {
        const citasFormateadas = response.data.map(cita => ({
          ...cita,
          start: new Date(cita.fecha + 'T' + cita.hora),
          end: moment(new Date(cita.fecha + 'T' + cita.hora)).add(1, 'hour').toDate(),
          title: `Cita con ${cita.barbero_nombre} (${cita.cliente_whatsapp})`,
        }));
        setCitas(citasFormateadas);
      })
      .catch(error => console.error(error));
  }, []);

  
  const handleSelectSlot = (slotInfo) => {
    setNuevaCita({
      ...nuevaCita,
      start: slotInfo.start,
      end: slotInfo.end,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nuevaCita.barbero_id || !nuevaCita.start || !nuevaCita.cliente_whatsapp) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    const cita = {
      barbero_id: nuevaCita.barbero_id,
      fecha: moment(nuevaCita.start).format('YYYY-MM-DD'),
      hora: moment(nuevaCita.start).format('HH:mm'),
      cliente_whatsapp: nuevaCita.cliente_whatsapp,
    };

    try {
      const response = await axios.post('http://localhost:5000/citas', cita);
      setMensaje('Cita reservada con éxito. Recibirás un mensaje de confirmación por WhatsApp.');
      console.log(response.data);

      // Actualizar el calendario con la nueva cita
      const nuevaCitaFormateada = {
        ...cita,
        start: new Date(cita.fecha + 'T' + cita.hora),
        end: moment(new Date(cita.fecha + 'T' + cita.hora)).add(1, 'hour').toDate(),
        title: `Cita con ${barberos.find(b => b.id === cita.barbero_id)?.nombre} (${cita.cliente_whatsapp})`,
      };
      setCitas([...citas, nuevaCitaFormateada]);

      
      setNuevaCita({
        barbero_id: '',
        start: null,
        end: null,
        cliente_whatsapp: '',
      });
    } catch (error) {
      setMensaje('Hubo un error al reservar la cita. Inténtalo de nuevo.');
      console.error(error);
    }
  };

  return (
    <div className="citas-container">
      <h2>Reservar Cita</h2>
      <div className="calendario-container">
        <Calendar
          localizer={localizer}
          events={citas}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          defaultView="week"
          views={['week', 'day']}
          style={{ height: 500 }}
        />
      </div>

      <form onSubmit={handleSubmit} className="formulario-reserva">
        <div className="form-group">
          <label>Selecciona un barbero:</label>
          <select
            value={nuevaCita.barbero_id}
            onChange={(e) => setNuevaCita({ ...nuevaCita, barbero_id: e.target.value })}
            required
          >
            <option value="">-- Selecciona un barbero --</option>
            {barberos.map(barbero => (
              <option key={barbero.id} value={barbero.id}>
                {barbero.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Número de WhatsApp:</label>
          <input
            type="text"
            placeholder="Ej: +521234567890"
            value={nuevaCita.cliente_whatsapp}
            onChange={(e) => setNuevaCita({ ...nuevaCita, cliente_whatsapp: e.target.value })}
            required
          />
        </div>

        <button type="submit">Reservar Cita</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Citas;