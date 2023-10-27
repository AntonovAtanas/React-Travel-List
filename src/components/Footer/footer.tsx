import { Item } from "../../interface/item";
import "./footer.css";

export default function Footer({ items }: { items: Item[] }) {
  let packedCounter = items.filter((item) => item.packed).length;
  let percentage = (packedCounter / items.length) * 100;

  return (
    <footer className="stats">
      {packedCounter === items.length && items.length > 0 ? (
        <p>You got everything! Ready to go ✈</p>
      ) : (
        <p>
          💼 You have {items.length} items on your list, and you already packed{" "}
          {packedCounter} ({percentage ? percentage.toFixed(2) : 0}%)
        </p>
      )}
    </footer>
  );
}
