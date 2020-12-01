import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import HeaderLink from "./HeaderLink.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarExists: false
    };
  }
  componentDidMount() {
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
  }

  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();

    document.getElementById("btnSidebar").onclick = function(){
      var parent = document.getElementById("sidebar");
      parent.classList.toggle("collapsed");
      parent.getElementsByClassName("sidebar-wrapper")[0].classList.toggle("collapsed");

      document.body.classList.toggle("collapsed");
    }
    /*
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
    */
   /*
    //member sidebar
    var sidebarId = document.getElementById("sidebar");
    sidebarId.click(function (event) {
      var toggle = window.getComputedStyle(sidebarId).visibility === "visible";//is(":visible");
       if (toggle) {
        sidebarId.addClass("collapse");
       }
     });
     */
  }
  render() {
    return (
      <Navbar id="menuMember" fluid bg="light" className="navbar-fixed-top" >
        <Navbar.Header>
            <a className="App-logo"></a>
            <a className="navbar-brand" href="/landing">Gurumeet</a>
          <Navbar.Toggle id="btnSidebar" onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        {
        <Navbar.Collapse>
          <HeaderLink />
        </Navbar.Collapse>
        }
      </Navbar>
    );
  }
}

export default Header;
