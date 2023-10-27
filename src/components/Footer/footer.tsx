import { Item } from '../../interface/item';
import './footer.css';

export default function Footer ({items} : {items: Item[]}) {
    let packedCounter = 0;

    function packedCalc(items: Item[]) {


        items.forEach((element: Item) => {
            if (element.packed === true) {
                packedCounter += 1;
            } 
        });
        return packedCounter;
    }

    return (
        <footer className="stats">
             <p>💼 You have {items.length} items on your list, and you already packed {packedCalc(items)} ({((packedCounter / items.length) * 100).toFixed(2)}%)</p>
        </footer>
    )
}