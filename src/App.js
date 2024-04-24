import logo from './logo.svg';
import './App.css';
import React from'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Body from './component/Body';

function App() {
  return (
    <div className="Container">
      <Header/>
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
