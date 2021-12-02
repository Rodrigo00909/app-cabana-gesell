import * as React from "react";
import { useRoutes } from "react-router-dom";

import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import './App.css';


function App() {
    let element = useRoutes([
        {path : '/', element : <Home/>},
        {path : '/login', element : <Login/>},
        {path : '/register', element : <Register/>},
    ])
    return element
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
