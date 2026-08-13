import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/profile' element={<User />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
