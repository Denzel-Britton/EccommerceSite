import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
function App() {
return (
  
  <div className="app">
    <Router>
    {/* header will always render */}
      <Header /> 
      
      <Switch>
       <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
  
    </Router>
    </div>
  
);
}
export default App;