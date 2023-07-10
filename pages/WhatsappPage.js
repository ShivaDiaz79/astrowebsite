import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WhatsappPage = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/skkoka');
        const data = response.data.numbers;
        setNumbers(data);
      } catch (error) {
        console.error('Error en la extracción', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Números de WhatsApp</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhatsappPage;
