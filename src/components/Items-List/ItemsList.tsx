import { Item } from "../../interface/item";
import CurrentItem from "../Item/Item";
import "./itemsList.css";

export default function ItemsList(props: any) {
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
