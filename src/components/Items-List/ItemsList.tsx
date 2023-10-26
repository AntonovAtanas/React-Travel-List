import "./itemsList.css";

import Item from "../Item/Item";

const mockList = [
  {
    quantity: 2,
    name: "Shirts",
    packed: false,
    id: 1,
  },
  {
    quantity: 4,
    name: "Socks",
    packed: false,
    id: 2,
  },
  {
    quantity: 5,
    name: "Boots",
    packed: false,
    id: 3,
  },
  {
    quantity: 1,
    name: "Hats",
    packed: false,
    id: 4,
  },
  {
    quantity: 7,
    name: "Laptop",
    packed: false,
    id: 5,
  },
];

export default function ItemsList() {
  return (
    <div className="list">
      <ul>
        {mockList.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
