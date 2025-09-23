import Header from './components/Header'
import './App.css'

import About from './components/About'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import Something from './components/Something'
import { createTheme, ThemeProvider } from '@mui/material'
import { orange } from '@mui/material/colors'

function App() {

  const theme = createTheme({
    colorSchemes: orange,
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='home' element={<Home />} />

          <Route path='about' element={<About />} />

          <Route path="sumthin'" element={<><Something /><Header/></>} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
