
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/history' element = {<History/>}/>
        <Route path='/' element = {<Home/>} />
        <Route path='/browse' element = {<Browse/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
