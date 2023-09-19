import React, { useState } from 'react';

interface InputFieldProps {
  onAddItem: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onAddItem }) => {
  const [inputText, setInputText] = useState<string>('');

  const addItem = () => {
    if (inputText.trim() !== '') {
      onAddItem(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un elemento"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className='button' onClick={addItem}>Añadir</button>
    </div>
  );
};

export default InputField;
