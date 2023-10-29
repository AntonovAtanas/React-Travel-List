import { useState } from "react";
import "./App.css";
import Form from "./components/Add-form/add-form";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import ItemsList from "./components/Items-List/ItemsList";
import { Item } from "./interface/item";

function App() {
    const [items, setItems] = useState<Item[]>([]);

    function onNewItem(item: Item): void {
        setItems((items) => [...items, item]);
    }

    function onDelete(id: number): void {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function onChecked(id: number): void {
        setItems((items) =>
            items.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          packed: !item.packed,
                      }
                    : { ...item }
            )
        );
    }

    function onSortResults(sortCriteria: string) {
        switch (sortCriteria) {
            case "alphabetical":
                setItems((allItems) =>
                    [...allItems].sort((a, b) => a.name.localeCompare(b.name))
                );
                break;
            case "packed":
                setItems((items) =>
                    [...items].sort(
                        (a, b) => Number(b.packed) - Number(a.packed)
                    )
                );
                break;
        }
    }

    function onClearList(): void {
        setItems(() => []);
    }

    return (
        <div className="app">
            <Header />
            <Form onNewItem={onNewItem} />
            <ItemsList
                items={items}
                onDelete={onDelete}
                onChecked={onChecked}
                onSortResults={onSortResults}
                onClearList={onClearList}
            />
            <Footer items={items} />
        </div>
    );
}

export default App;
