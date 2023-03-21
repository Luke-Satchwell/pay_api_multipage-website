import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Contact, Pricing, About } from './pages'
import { Navbar, ReadyToStart, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <main className='bg-[#EDF3F8] font-public text-[15px] leading-7 overflow-x-hidden scrollbar-hide'>
        <div className='container mx-auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <ReadyToStart />
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
