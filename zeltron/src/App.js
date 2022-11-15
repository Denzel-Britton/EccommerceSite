import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import{ auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch]= useStateValue();
  
  useEffect(()=>{
    // only run once when the appp comppnet loads 

    auth.onAuthStateChanged(authUser => {
      console.log('THe user IS ... ', authUser);
     
      if (authUser) {
        // user just logged in or user was logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
  }, [])

return (
  
 
  <div className="app">
    <Router>
      <Switch>
      <Route exact path="/login">
         <Login />
        </Route>
       <Route exact path="/checkout">
          <Header /> 
          <Checkout/>
        </Route>
        <Route exact path="/payment">
          <Header /> 
          <h1>Paymeny page </h1>
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