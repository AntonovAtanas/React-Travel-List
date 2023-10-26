import { useState } from 'react'
import './App.css'
import Form from './components/Add-form/add-form'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import ItemsList from './components/Items-List/ItemsList'
import { Item } from './interface/item'

function App() {

  const [items, setItems] = useState<Item[]>([]);

  function onNewItem(item: Item): void {
    setItems(items => [...items, item])
  }

  function onDelete(id: number): void {
    setItems(items => items.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <Form onNewItem={onNewItem}/>
      <ItemsList items={items} onDelete={onDelete}/>
      <Footer />
    </div>
  )
}

export default App
