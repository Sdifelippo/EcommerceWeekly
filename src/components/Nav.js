import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {

    let headerStyle = {
      fontFamily:"Times",
      fontSize:"1.5em",
      padding:0,
      color:"white"
    }

    return (
      <div>
        <nav className="navbar navbar-toggleable-md fixed-top navbar-light" style={{backgroundColor:"#C1C2C7"}}>
          <a className="navbar-brand" href="/"><span style={headerStyle}>Hurricane Start</span></a>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/consumptions">Consumption</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/supplies">Supplies</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/services">Services</NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/about">About Us</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/contact">Contact Us</NavLink>
            </div>
          </div>
        </nav>
          {this.props.children}
        <footer className="navbar fixed-bottom" style={{backgroundColor: "#C1C2C7"}}>
            <div className="navbar-nav">
              <p className="navbar-text" style={{margin:"auto"}}> © 2015 Hurricane Start. The first stop in Hurricane prep products.</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default NavBar;
