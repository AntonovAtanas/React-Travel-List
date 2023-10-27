import { Item } from "../../interface/item";
import { OnChecked, OnDelete } from "../../interface/functions";
import CurrentItem from "../Item/Item";
import "./itemsList.css";

export default function ItemsList({
  items,
  onDelete,
  onChecked,
}: {
  items: Item[];
  onDelete: OnDelete;
  onChecked: OnChecked;
}) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item: Item) => (
            <CurrentItem
              item={item}
              key={item.id}
              onDelete={onDelete}
              onChecked={onChecked}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="alphabetical">Sort by name</option>
          <option value="packed">Sorted by packed status</option>
        </select>
        {/* <button></button> */}
      </div>
    </>
  );
}
