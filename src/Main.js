import React ,{ Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";

// this is the app frame , the parent Component
class Main extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      
      <ul className="header">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="content">
      <Route exact path="/" component={Home}/>
      <Route path="/services" component={Services}/>
      <Route path="/Contact" component={Contact}/>
      </div>
      </div>
      </HashRouter>
    );
  }
}
export default Main;
