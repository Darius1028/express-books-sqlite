import { useState } from 'react'
import './App.css'
import InputField from './components/InputField';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (text: string) => {
    setItems([...items, text]);
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <InputField onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  )
}

export default App
