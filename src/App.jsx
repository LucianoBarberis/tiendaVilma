import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Contacto from './components/Contacto/Contacto'
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='body'>
      <Analytics />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App
