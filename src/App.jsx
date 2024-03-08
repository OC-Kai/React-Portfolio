import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import {useEffect} from 'react'


function App() {
  useEffect(() => {
    document.title = "Arthur Stone Portfolio"
  }, [])
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
