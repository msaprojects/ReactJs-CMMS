import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chat from "./components/pages/chat/chat";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Login from "./components/pages/Login/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import PublicRoute from "./components/utils/PublicRoute";
function App() {
  return (
    // <div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <PublicRoute path='/login' component={ Login }/>
          <PrivateRoute path='/dashboard' component={ Dashboard }/>
          <PrivateRoute path='/chat' component={ Chat }/>
        </Switch>
    </BrowserRouter>
    // </div>
  );
}

export default App;