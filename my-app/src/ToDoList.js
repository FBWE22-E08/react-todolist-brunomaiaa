
import React, { useState } from 'react';

function ToDoList() {
    const [listOfAllItems, setListOfAllItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setListOfAllItems([...listOfAllItems, { name: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleDelete = (index) => {
    const newList = [...listOfAllItems];
    newList.splice(index, 1);
    setListOfAllItems(newList);
  };

  const handleComplete = (index) => {
    const newList = [...listOfAllItems];
    newList[index].completed = !newList[index].completed;
    setListOfAllItems(newList);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a To Do Item"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    <ul>
      {listOfAllItems.map((item, index) => (
        <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          {item.name}
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleComplete(index)}>
            {item.completed ? 'Incomplete' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ToDoList