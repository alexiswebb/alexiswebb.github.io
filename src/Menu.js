import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Projects from "./Projects";
import Resume from "./Resume";
 
class Menu extends Component {
  render() {
    return (
      <HashRouter basename="/">
	<div>
	  <h1>Alexis Webb</h1>
	  <ul>
	    <li><NavLink exact to="/">Projects</NavLink></li>
	    <li><NavLink to="/resume">Resume</NavLink></li>
	    <li><a href='mailto:alexniwebb@gmail.com'>Email</a></li>
	    <li><a href='https://github.com/alexiswebb'>Github</a></li>
	    <li><a href='https://www.linkedin.com/in/alexis-webb-41039277/'>LinkedIn</a></li>
	  </ul>
          <div class="divider"></div>
          <div className="content">
            <Route exact path="/" component={Projects}/> 
            <Route path="/resume" component={Resume}/> 
          </div>
	</div>
      </HashRouter>
    );
  }
}
 
export default Menu;
