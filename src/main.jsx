import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import '../src/components/styles.css'
import Menu from './components/menu/menu.jsx'
import Header from './components/header/header.jsx'
import Product from './components/product/product.jsx'
import Footer from './components/footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Header />
    <Product />
    <Footer />
  </React.StrictMode>,
)
