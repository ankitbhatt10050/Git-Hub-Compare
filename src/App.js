import React from 'react';
import './App.css';
import Home from './Container/Home';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Info from './Container/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/:login" exact component={Info}/>
        </Switch>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
