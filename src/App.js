import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { MenShoes } from './components/MenShoes';
import { Notfound } from './components/Notfound';
import { MenShoesIndex } from './components/MenShoesIndex';
import { MenShoesDetails } from './components/MenShoesDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        
        <Route path="menshoes" element={<MenShoes />} >
          <Route path="/" element={<MenShoesIndex />} />
          <Route path=":slug" element={<MenShoesDetails />} />
          </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
