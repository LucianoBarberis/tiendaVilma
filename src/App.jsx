import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='aboutus' element={"Prueba"} />
          <Route path='products' element={"Prueba 2"} />
          <Route path='contact' element={"Prueba 3"} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App
