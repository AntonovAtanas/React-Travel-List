import { Item } from "../../interface/item";
import { OnDelete } from "../../interface/functions";
import CurrentItem from "../Item/Item";
import "./itemsList.css";

export default function ItemsList(props: {items: Item[], onDelete: OnDelete}) {
  return (
    <div className="list">
      <ul>
        {props.items.map((item: Item) => (
          <CurrentItem item={item} key={item.id} onDelete={props.onDelete}/>
        ))}
      </ul>
    </div>
  );
}
