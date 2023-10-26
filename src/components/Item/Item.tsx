import './item.css';

export default function Item ({item}: any) {

    return (
        <li>
            <input type="checkbox"></input>
            <p>{item.quantity} {item.name}</p>
            <button>❌</button>
        </li>
    )
}