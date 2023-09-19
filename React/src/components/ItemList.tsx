import React from 'react';

interface ItemListProps {
  items: string[];
  onRemoveItem: (index: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onRemoveItem }) => {
  return (
    <ul className='list' >
      {items.map((item, index) => (
        <li key={index} onClick={() => onRemoveItem(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
