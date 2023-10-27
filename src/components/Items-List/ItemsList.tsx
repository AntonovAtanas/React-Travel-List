import { Item } from "../../interface/item";
import { OnChecked, OnDelete } from "../../interface/functions";
import CurrentItem from "../Item/Item";
import "./itemsList.css";

export default function ItemsList({items, onDelete, onChecked}: {items: Item[], onDelete: OnDelete, onChecked: OnChecked}) {
  return (
    <div className="list">
      <ul>
        {items.map((item: Item) => (
          <CurrentItem item={item} key={item.id} onDelete={onDelete} onChecked={onChecked}/>
        ))}
      </ul>
    </div>
  );
}
