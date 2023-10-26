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

  return (
    <div className="app">
      <Header />
      <Form onNewItem={onNewItem}/>
      <ItemsList items={items}/>
      <Footer />
    </div>
  )
}

export default App
