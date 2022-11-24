import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Accueil } from './Accueil';
import { APropos } from './APropos';
import { Menu } from './Menu';
import './style/Container.css';

export default
  <React.StrictMode>

    <BrowserRouter>
      <div className='Container'>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Accueil />}></Route>
          <Route exact path="/APropos"  element={<APropos />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>;