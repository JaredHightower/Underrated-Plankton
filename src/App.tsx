import Home from './components/Home'
import Mint from './components/Mint'
import Roadmap from './components/Raodmap/Roadmap'
import Faq from './components/Faq'
import Layout from './components/Layout'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function App() {
  // const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='home' element={<Home />} />
          <Route path='mint' element={<Mint />} />
          <Route path='roadmap' element={<Roadmap />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
