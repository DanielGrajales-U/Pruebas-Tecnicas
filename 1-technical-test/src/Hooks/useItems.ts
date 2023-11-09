import { useState } from 'react';
import { ItemId } from '../App';
import { ItemModel } from '../models/Item.model';

export default function useItems() {
  const [items, setItems] = useState<ItemModel[]>([]);

  const addItem = (text: string) => {
    const newItem: ItemModel = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now(),
    };

    setItems((prevValue) => {
      return [...prevValue, newItem];
    });
  };

  const removeItem = (id: ItemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return {
    items,
    addItem,
    removeItem,
  };
}
