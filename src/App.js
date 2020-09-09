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
          <Route path="/:login" exact component={Info}/>
          <Route path="/" component={Home}/>
        </Switch>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
