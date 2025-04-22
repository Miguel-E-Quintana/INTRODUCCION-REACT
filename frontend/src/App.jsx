import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Footer } from './components/index';
import { Home, Pizza, Cart, Register, Login, NotFound, Profile } from './pages/index';
import CartProvider from './context/CartContext';
import UserProvider, { UserContext } from './context/UserContext';
import { useContext } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<AuthRedirect><Register /></AuthRedirect>} />
            <Route path='/login' element={<AuthRedirect><Login /></AuthRedirect>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to="/login" replace />;
};

const AuthRedirect = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? <Navigate to="/" replace /> : children;
};

export default App;