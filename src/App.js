import React from 'react';
import './App.css';
import Header from './components/Header';
import {Body} from './components/Body';
import { browserRouter } from 'react-router-dom'
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer/>
      </div>
  );
}

export default App;
