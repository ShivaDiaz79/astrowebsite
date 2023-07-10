import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ImputCript = ({ handleAddItem }) => {
  const handleClick = () => {
    const text = prompt("Escribe y pulsa enter");
    if (text) {
      handleAddItem(text);
    }
  };

  return (
    <button
      className="bg-gray-600 mx-8 mt-4 px-4 py-2 text-white rounded hover:bg-blue-600 focus:outline-none"
      onClick={handleClick}
    >
      Escribe aquí las criptomonedas que más te gustaría saber
    </button>
  );
};

const TodoList = () => {
  const itemsInitialState = [
    {
      id: uuidv4(),
      text: "Bitcoin",
    },
    {
      id: uuidv4(),
      text: "Ethereum",
    },
    {
      id: uuidv4(),
      text: "Tether",
    },
    {
      id: uuidv4(),
      text: "BNB",
    },
  ];

  const [items, setItems] = useState(itemsInitialState);

  const handleAddItem = (text) => {
    const newItem = {
      id: uuidv4(),
      text: text,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="mt-8">
      {items.map(({ id, text }) => (
        <div className="flex items-center mb-2" key={id}>
          <button
            className="flex items-center justify-center w-6 h-6 text-red-500 bg-white rounded-full focus:outline-none"
            onClick={() =>
              setItems((items) => items.filter((item) => item.id !== id))
            }
          >
            &times;
          </button>
          <span className="ml-2">{text}</span>
        </div>
      ))}
      <ImputCript handleAddItem={handleAddItem} />
    </div>
  );
};

export default TodoList;
