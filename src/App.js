import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/login';
import Shirts from './pages/shirts';
import Splashes from './pages/splashes';
import Sprays from './pages/sprays';
import Shorts from './pages/shorts';
import UpsDowns from './pages/ups_downs';
import Nightwears from './pages/nightwears';
import Cart from './pages/cart';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage/>} path='/'/>
        <Route element={<Cart/>} path='/cart'/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Shirts/>} path='/shirts'/>
        <Route element={<Splashes/>} path='/splashes'/>
        <Route element={<Sprays/>} path='/sprays'/>
        <Route element={<Shorts/>} path='/shorts'/>
        <Route element={<UpsDowns/>} path='/ups&downs'/>
        <Route element={<Nightwears/>} path='/nightwears'/>
        <Route element={<Profile/>} path='/profile'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
