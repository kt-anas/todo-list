import React, { useState } from 'react';
import "./TodoApp.css";
import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const deleteItem = (index) => {
    const allItems = items.filter((_, i) => i !== index);
    setItems(allItems);
  };

  const storeItem = (eve) => {
    eve.preventDefault();
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className='todo-container'>
      <form className='input-section' onSubmit={storeItem}>
        <h1>Todo App</h1>
        <input type="text" value={input} onChange={handleChange} placeholder='Enter...' required />
        <Button type="submit">ADD</Button>
      </form>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data} <i className='bi bi-x-lg' onClick={() => deleteItem(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
