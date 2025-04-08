import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Footer} from './components/';
import { Home, Pizza, Cart, Register, Login, NotFound, Profile } from './Pages/index';
const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Pizza />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App