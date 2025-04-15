import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Footer} from './components/index';
import { Home, Pizza, Cart, Register, Login, NotFound, Profile } from './pages/index';
import CartProvider from './Context/CartContext';
const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
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
      </CartProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App