import {Hackaton2_backend} from 'declarations/Hackaton2_backend'
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 

const App = () => {
  const [sensorData, setSensorData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    fetchSensorData('enero'); 
  }, []);

  const fetchSensorData = async (month) => {
    try {
      Hackaton2_backend.getSensorData(month).then(response=>{
        setSensorData(response.data);
      })
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  const handleMonthChange = (event) => {
    const month = event.target.value.toLowerCase();
    setSelectedMonth(month);
    fetchSensorData(month);
  };

  useEffect(() => {
    if (Chart && typeof Chart.registerScale === 'function') {
      Chart.registerScale('linear', Chart.scaleService.getScaleConstructor('linear'));
    }
  }, []);

  return (
    
    <center><div className="App">
      <h1>Datos de los Sensores</h1>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Seleccionar Mes</option>
        <option value="enero">Enero</option>
        <option value="febrero">Febrero</option>
      </select>
      <div style={{ maxWidth: '800px', margin: '20px auto' }}>
        <Line
          data={{
            labels: ['Sensor de Turbidez', 'Sensor de Conductividad', 'Sensor de PH', 'Sensor de Gases'],
            datasets: sensorData.map((sensor, index) => ({
              label: `Sensor ${index + 1}`,
              data: sensor.data,
              borderColor: sensor.borderColor,
              borderWidth: sensor.borderWidth,
              fill: false,
            })),
          }}
          options={{
            scales: {
              y: {
                type: 'linear', 
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div></center>
  );
};

export default App;
