import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

//Pages
import UserPage from './User/User';

import './App.css'


function App() {
  return (
    <div className='backgroundApp'>
      <Router>
      <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            <Route
              exact
              path="/home"
            >
              <UserPage />
            </Route>


            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
             </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
