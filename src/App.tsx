import './App.css'
import Form from './components/Add-form/add-form'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import ItemsList from './components/Items-List/ItemsList'

function App() {

  return (
    <div className="app">
      <Header />
      <Form />
      <ItemsList />
      <Footer />
    </div>
  )
}

export default App
