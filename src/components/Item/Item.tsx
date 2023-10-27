import "./item.css";
import { Item } from "../../interface/item";
import { OnChecked, OnDelete } from "../../interface/functions";

export default function CurrentItem({item, onDelete, onChecked}: {item: Item, onDelete: OnDelete, onChecked: OnChecked}) {

  return (
    <li>
      <input type="checkbox" onClick={() => onChecked(item.id)}></input>
      <p style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.name}
      </p>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
