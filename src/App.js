import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './Products'; 
import Home from './Home';
import Contact from './Contact';
import Moments from './Moments';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Moments/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
