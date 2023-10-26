import { Item } from "../../interface/item";
import CurrentItem from "../Item/Item";
import "./itemsList.css";

export default function ItemsList({ items }: {items: Item[]}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <CurrentItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
