import Header from './components/Header'
import './App.css'

import About from './components/About'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import Something from './components/Something'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='home' element={<Home />} />

        <Route path='about' element={<About />} />

        <Route path="sumthin'" element={<><Something /><Header/></>} />
      </Routes>
    </>
  )
}

export default App
