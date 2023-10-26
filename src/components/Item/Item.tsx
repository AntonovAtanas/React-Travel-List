import { useState } from "react";
import "./item.css";

export default function Item({ item }: any) {
  const [checked, useChecked] = useState(item.packed);

    function onChecked () {
        useChecked((s:boolean) => !s)
    }

  return (
    <li>
      <input type="checkbox" onClick={onChecked}></input>
      <p style={{ textDecoration: checked ? "line-through" : "none"}}>
        {item.quantity} {item.name}
      </p>
      <button>❌</button>
    </li>
  );
}
