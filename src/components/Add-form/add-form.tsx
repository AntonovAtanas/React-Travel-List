import { useState } from "react";
import "./form.css";
import { Item } from "../../interface/item";

export default function Form() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function onNewItem(item: Item) {
    setItems(items => [...items, item])
  }

  function onSubmit(e: any) {
    e.preventDefault();

    if (!itemName) {
      return;
    }

    const newItem = { quantity, name: itemName, packed: false, id: Date.now() };

    onNewItem(newItem);

    setItemName(() => "");
    setQuantity(() => 1);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
