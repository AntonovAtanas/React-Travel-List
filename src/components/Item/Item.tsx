import { useState } from "react";
import "./item.css";

export default function CurrentItem(props: any) {
  const [checked, useChecked] = useState(props.item.packed);

  function onChecked() {
    useChecked((s: boolean) => !s);
  }

  return (
    <li>
      <input type="checkbox" onClick={onChecked}></input>
      <p style={{ textDecoration: checked ? "line-through" : "none" }}>
        {props.item.quantity} {props.item.name}
      </p>
      <button onClick={() => props.onDelete(props.item.id)}>❌</button>
    </li>
  );
}
