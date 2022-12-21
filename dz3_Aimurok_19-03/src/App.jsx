import React from 'react'
import './App.css'
import ProductList from './components/Product/ProductList'
import Menu from './components/Product/NavBar/Menu'
import SimpleForm from './components/simpleForm/simpleForm'
function App() {

  return (
    <div className="App">
      <Menu />
      <ProductList/>
      <SimpleForm/>
    </div>
  )
}

export default App
