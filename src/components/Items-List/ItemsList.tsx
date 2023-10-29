import { Item } from "../../interface/item";
import { OnChecked, OnClearList, OnDelete, OnSortResults } from "../../interface/functions";
import CurrentItem from "../Item/Item";
import "./itemsList.css";

export default function ItemsList({
  items,
  onDelete,
  onChecked,
  onSortResults,
  onClearList
}: {
  items: Item[];
  onDelete: OnDelete;
  onChecked: OnChecked;
  onSortResults: OnSortResults;
  onClearList: OnClearList
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
        <select defaultValue='' onChange={(e) => onSortResults(e.target.value)}>
          <option disabled value="" hidden> Sort items...</option>
          <option value="alphabetical">Sort by name</option>
          <option value="packed">Sorted by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </>
  );
}
