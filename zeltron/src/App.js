import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
return (
  
  <div className="app">
    <Router>
    {/* header will always render */}
      
      
      <Switch>
      <Route exact path="/login">
         <Login />
        </Route>
       <Route exact path="/checkout">
          <Header /> 
          <Checkout/>
        </Route>
        <Route exact path="/">
          <Header /> 
          <Home/>
        </Route>
      </Switch>
  
    </Router>
    </div>
  
);
}
export default App;