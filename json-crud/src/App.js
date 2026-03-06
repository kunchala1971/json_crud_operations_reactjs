import React, { useState, useEffect } from "react";
import data from "./data.json";
function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  useEffect(() => {
    setItems(data);
  }, []);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const addItem = () => {
    const newItem = { id: items.length + 1, name: newItemName };
    setItems([...items, newItem]);
    setNewItemName("");
	
  };

  const handleNewItemChange = (event) => {
    setNewItemName(event.target.value);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
      <div>
        <input type="text" value={newItemName} onChange={handleNewItemChange} />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;