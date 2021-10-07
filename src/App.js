import React from "react";
// React-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// End React-router

// Components
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import View from "./pages/View";
import Header from "./components/Header";
// End Components

// React Tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// End React Tostify

const App = () => {
 
  return (
    <Router>
      <Header />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add" component={AddEdit}></Route>
        <Route path="/update/:id" component={AddEdit}></Route>
        <Route path="/view/:id" component={View}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
};

export default App;
