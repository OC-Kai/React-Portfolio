import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>{count}</p>
    <button onClick={ ()=> setCount(count + 1)}></button>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
