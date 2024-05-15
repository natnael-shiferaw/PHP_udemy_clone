import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      {/* <Navbar/> */}
     <Routes>
            {/* <Route element={<Navbar/>} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        {/* </Route> */}
      
      
  {/* <Route path='*' element={<NotFound />} /> // Fallback route for unknown paths */}
</Routes>

          
        {/* <Navbar /> */}
        <Footer/>




      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}

    </>
  )
}

export default App
