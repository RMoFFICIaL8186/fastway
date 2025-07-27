import React from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Support from './Pages/Nav-section/Support-section/Support';
import Career from './Pages/Nav-section/Career-section/Career';
import Blog from './Pages/Nav-section/Blog-section/Blog';
import Footer from './Components/Footer/Footer';
import Aboutus from './Pages/Footer-section/About/Aboutus';
import QandA from './Pages/Footer-section/QandA/QandA'
import Login from './Pages/Footer-section/Authentication/Login';
import Register from './Pages/Footer-section/Authentication/Register';
import Admin from './Pages/Footer-section/Authentication/Admin';
import News from './Pages/Footer-section/News/News';

function App() {


  return (
    <>
    <Navbar />
      <div className="App">
        {/* Navbar page Route */}
        <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/Support' element={ <Support /> } />
          <Route path='/career' element={ <Career /> } />
          <Route path='/Blog' element={ <Blog /> } />

          {/* footer page Route */}
          <Route path='/FA&Q' element={ <QandA /> } />
          <Route path='/Login' element={ <Login /> } />
          <Route path='/Register' element={ <Register /> } />
          <Route path='/Admin' element={ <Admin /> } />
          <Route path='/News' element={ <News /> } />
          {/* Footer About us page Route */}
          <Route path='/About' element={ <Aboutus /> } />
        </Routes>        
        </div>
        <Footer />
    </>
  )
}

export default App
