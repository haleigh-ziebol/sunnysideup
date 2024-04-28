import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

//Pages
import UserPage from './User/User'

import './App.css'


function App() {
  return (
    <div className='backgroundApp'>
      <Router>
      <div className='container'>
          <Routes>

            <Route
              path="/"
              element={<UserPage/>}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
