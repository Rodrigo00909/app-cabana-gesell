import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Reservas from './components/Reservas/Reservas';
import Navbar from './components/Navbar/Navbar';

import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Reservas" element={<Reservas/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  </>
  )
}

/* function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );
} */

export default App;
