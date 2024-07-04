import React, { useState } from 'react';
import "./TodoApp.css";
import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const deleteItem = (index) => {
    const allItems = items.filter((data, ind) => ind !== index);
    setItems(allItems);
  };

  const storeItem = (eve) => {
    eve.preventDefault();
    if (input.trim() !== " ") {
      if (isEditing) {
        const updatedItems = items.map((item, index) => 
          index === currentIndex ? input.trim() : item
        );
        setItems(updatedItems);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setItems([...items, input.trim()]);
      }
      setInput("");
    }
  };

  const editItem = (index) => {
    setInput(items[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };
    
  return (
    <div className='todo-container'>
      <form className='input-section' onSubmit={storeItem}>
        <h1>Todo App</h1>
        <input type="text" value={input} onChange={handleChange} placeholder='Enter...' required/>
        <Button type="submit" className="btn btn-dark">{isEditing ? "Update" : "ADD"}</Button>
      </form>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data}
            <i className='bi bi-pencil-fill' onClick={() => editItem(index)}></i>
            <i className='bi bi-x-lg' onClick={() => deleteItem(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
