import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from 'react';
/* import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; */
import Login from './Login';
import Booking from './Booking';
import Activity from './Activity';
import Selection from './Selection';
import { HeroUIProvider } from "@heroui/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {



  return (
    <HeroUIProvider>


      <Router>
        <ToastContainer></ToastContainer>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/booking" element={<Booking />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/activity" element={<Activity />} />

        </Routes>

      </Router>
    </HeroUIProvider>


  );
}

export default App;
