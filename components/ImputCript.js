import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ImputCript = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const text = prompt('Escribe y pulsa enter');
    if (text) {
      const newId = uuidv4();
      const newItem = {
        id: newId,
        text: text,
      };
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  return (
    <div>
      <button
        className="bg-gray-600 mx-8 mt-4 px-4 py-2 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleAddItem}
      >
        Escribe aquí las criptomonedas que más te gustaría saber
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImputCript;



