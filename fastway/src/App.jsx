import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavSection/Navbar';
import Landing from './components/Landing/Landing';
import Contact from './Pages/Nav-link-pages/Contact/Contact';
import Blog from './Pages/Nav-link-pages/Blog/Blog';
import Career from './Pages/Nav-link-pages/Career/Career';
import Notify from './Pages/Nav-link-pages/Notify/Notify';
import User from './Pages/Nav-link-pages/User/User';
import Cart from './Pages/Nav-link-pages/Cart/Cart';
import Aboutus from './Pages/Nav-link-pages/Aboutus/Aboutus';
import Orders from './Pages/Footer-link-pages/Services/Orders/Orders';
import Payments from './Pages/Footer-link-pages/Services/Payments/Payments'
import Company from './Pages/Footer-link-pages/policy/company/Company';
import UserPolicy from './Pages/Footer-link-pages/policy/UserPolicy/UserPolicy';
import Merchant from './Pages/Footer-link-pages/policy/Merchant/Merchant'
import DelivaryPolicy from './Pages/Footer-link-pages/policy/DelivaeryPolicy/DelivaryPolicy';
import DataPolicy from './Pages/Footer-link-pages/policy/DataPolicy/DataPolicy';
import ProductPolicy from './Pages/Footer-link-pages/policy/ProductPolicy/ProductPolicy';
import Complaint from './Pages/Footer-link-pages/Grievance/Complaint/Complaint';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';


function App() {


  return (
    <>
      < Navbar />
<Routes>
  <Route path= '/' element={ < Landing />} />
  <Route path='/Contact' element ={ <Contact />} />
  <Route path='/Blog' element={ <Blog />} /> 
  <Route path='/Career' element={ <Career />} />
    {/* Icon Pages
  Pages -> Nav-link-Pages */}
  <Route path='/Cart' element={ <Cart />} />
  <Route path='/Notify' element={ <Notify />} />
  <Route path='/User' element={ <User />} />

  {/* About us */}
  <Route path='/Aboutus' element={ <Aboutus />} />

  {/* Pages -> Authentications // User Authentication*/}
  <Route path='/Login' element={ < Login />} />
  <Route path='/Register' element={ < Register />} />

  {/* service */}
  <Route path= '/Orders' element={ < Orders />} />
  <Route path= '/Payments' element={ < Payments/> } />
  {/* // <Route path= '/' element={ < /> } />
  // <Route path= '/FA&Q' element={ < FA&@/> } /> */}

  {/* Policy's */}
  <Route path= '/CompanyPolicy' element={ <Company /> } />
  <Route path= '/UserPolicy' element={ < UserPolicy/> } />
  <Route path= '/MerchantPolicy' element={ < Merchant/> } />
  <Route path= '/DelivaryAgentPolicy' element={ < DelivaryPolicy />} />
  <Route path= '/DataPolicy' element={ < DataPolicy/> } />
  <Route path= '/ProductPolicy' element={ < ProductPolicy /> } />

  {/* Grievance */}
  <Route path= '/Complaint' element={ < Complaint/> } />
</Routes>
    </>
  )
}

export default App;
