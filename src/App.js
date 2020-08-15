import React from 'react';
import './App.css';
import Header from './components/Header';
import Body  from './components/Body';
import  Footer  from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
    <Route exact path="/" element={<Body/>} />
    <Route path="/shoes" element={<div>Shoes screen</div>} />
    </Routes>
    <Footer/>
</Router>
  );
}

export default App;
