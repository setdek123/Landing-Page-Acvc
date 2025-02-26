import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home/Home'
import Organization from './Components/Pages/Organization/Organization'
import About from './Components/Pages/About/About'
import Turmas from './Components/Pages/Turmas/Turmas'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Organization/>} />
        <Route path='/turmas' element={<Turmas/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
