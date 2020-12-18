import logo from './logo.svg';
import React from 'react'
import axios from 'axios';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';

import DataDiriPegawai from './pages/DataDiriPegawai';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DataDiriPegawai} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
