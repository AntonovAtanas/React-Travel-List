import { useState } from "react";
import "./item.css";
import { Item } from "../../interface/item";
import { OnDelete } from "../../interface/functions";

export default function CurrentItem({item, onDelete}: {item: Item, onDelete: OnDelete}) {
  const [checked, useChecked] = useState(item.packed);

  function onChecked(): void {
    useChecked((s: boolean) => !s);
  }

  return (
    <li>
      <input type="checkbox" onClick={onChecked}></input>
      <p style={{ textDecoration: checked ? "line-through" : "none" }}>
        {item.quantity} {item.name}
      </p>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
