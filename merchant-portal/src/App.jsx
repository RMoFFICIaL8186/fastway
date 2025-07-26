import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Landing from './Components/Landing/Landing';
import Contact from './Pages/Nav-section/Contact/Contact';
import Blog from './Pages/Nav-section/Blog/Blog';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Pages/Footer-section/Aboutus/Aboutus';
import Privacy from './Pages/Footer-section/privacy/Privacy';
import TermCondition from './Pages/Footer-section/TermCondition/TermCondition'
import Payments from './Pages/DashboardItem/Payments/Payments';
import Orders from './Pages/DashboardItem/Orders/orders';
import Dispatch from './Pages/DashboardItem/Dispatch/Dispatch'
import Menu from './Pages/DashboardItem/Uploadform/Menu';
import Earnings from './Pages/DashboardItem/Earninig/Earnings';
import Staff from './Pages/DashboardItem/Manege/Staff';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';

function App() {

  return (
    <>
    <div>
      < Navbar />
      <Routes>
        <Route path='/' element={< Landing />} />
        <Route path='/Contact' element={< Contact />} />
        <Route path='/Blog' element={< Blog />} />
        {/* Footer Pages */}
        <Route path='/Aboutus' element={< Aboutus />} />
        <Route path='/Privacy' element={< Privacy />} />
        <Route path='/Terms' element={< TermCondition />} />

        {/* Dashboard */}
        <Route path='/Orders' element={< Orders />} />      
        <Route path='/Payments' element={< Payments />} />
        <Route path='/Dispatch' element={< Dispatch />} />
        <Route path='/Menu' element={< Menu />} />
        <Route path='/Earnings' element={< Earnings />} />
        <Route path='/Staff' element={< Staff />} />

        {/* Authenticate */}
        <Route path='/Login' element={< Login />} />
        <Route path='/Register' element={< Register />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
