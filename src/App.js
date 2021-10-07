import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;