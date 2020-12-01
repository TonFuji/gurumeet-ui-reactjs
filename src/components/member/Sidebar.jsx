import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import HeaderLink from "./HeaderLink.jsx";

import logo from "../../assets/img/gurumeet-logo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    return (
      <div
        id="sidebar"
        className="sidebar collapsed"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" />
          ) : (
            null
          )}
        <div className="sidebar-wrapper collapsed">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLink /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
            {/*
              <li className="active active-pro" key={1}>
                <NavLink to="/memberSite/landing" className="nav-link" activeClassName="active">
                  <i className="pe-7s-graph" />
                  <p>Landing</p>
                </NavLink>
              </li>
              <li className="" key={2}>
                <NavLink to="/memberSite/user" className="nav-link" activeClassName="active">
                  <i className="pe-7s-user" />
                  <p>User Profile</p>
                </NavLink>
              </li>
              <li className="" key={3}>
                <NavLink to="/memberSite/icons" className="nav-link" activeClassName="active">
                  <i className="pe-7s-user" />
                  <p>Icons</p>
                </NavLink>
              </li>
            */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
