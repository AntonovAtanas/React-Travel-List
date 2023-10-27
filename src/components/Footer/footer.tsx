import { Item } from "../../interface/item";
import "./footer.css";

export default function Footer({ items }: { items: Item[] }) {
    if (items.length === 0)
        return (
            <footer className="stats">
                <em>Please add items to your list 🚀</em>
            </footer>
        );

    let packedCounter = items.filter((item) => item.packed).length;
    let percentage = (packedCounter / items.length) * 100;

    return (
        <footer className="stats">
            {packedCounter === items.length && items.length > 0 ? (
                <em>You got everything! Ready to go ✈</em>
            ) : (
                <em>
                    💼 You have {items.length} items on your list, and you
                    already packed {packedCounter} (
                    {percentage ? percentage.toFixed(2) : 0}%)
                </em>
            )}
        </footer>
    );
}
