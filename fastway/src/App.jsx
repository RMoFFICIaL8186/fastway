import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavSection/Navbar';
import Landing from './components/Landing/Landing';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Career from './Pages/Career/Career';
import Notify from './Pages/Notify/Notify';
import User from './Pages/User/User';
import Cart from './Pages/Cart/Cart';
import Aboutus from './Pages/Aboutus/Aboutus';
import Orders from './Pages/Services/Orders/Orders';
import Payments from './Pages/Services/Payments/Payments'
import Company from './Pages/policy/company/Company';
import UserPolicy from './Pages/policy/UserPolicy/UserPolicy';
import Merchant from './Pages/policy/Merchant/Merchant'
import DelivaryPolicy from './Pages/policy/DelivaeryPolicy/DelivaryPolicy';
import DataPolicy from './Pages/policy/DataPolicy/DataPolicy';
import ProductPolicy from './Pages/policy/ProductPolicy/ProductPolicy';
import Complaint from './Pages/Grievance/Complaint/Complaint';


function App() {


  return (
    <>
      < Navbar />
<Routes>
  <Route path= '/' element={ < Landing />} />
  <Route path='/Contact' element ={ <Contact />} />
  <Route path='/Blog' element={ <Blog />} /> 
  <Route path='/Career' element={ <Career />} />

  {/* Icon Pages */}
  <Route path='/Cart' element={ <Cart />} />
  <Route path='/Notify' element={ <Notify />} />
  <Route path='/User' element={ <User />} />

  {/* About us */}
  <Route path='/Aboutus' element={ <Aboutus />} />

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
