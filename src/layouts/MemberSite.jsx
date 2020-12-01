import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/member/Header';
import Sidebar from '../components/member/Sidebar';
import TableList from '../views/TableList';
import Dashboard from '../views/Dashboard';
import UserProfile from '../views/UserProfile';
import Typography from '../views/Typography';
import Icons from '../views/Icons';
import JsonData from '../data/data.json';
import routes from "../routes.js";
import '../assets/memberStyle.css';
import "../assets/css/demo.css";
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/fonts/font-awesome/css/font-awesome.css';
import "../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
//import '../assets/js/mainMember.js'; //not working because jquery syntax


export class MemberSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPageData: {},
    };
  }
  
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  componentDidUpdate(e){
  }

  
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/memberSite") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div id="member">
        <Header />
        <div id="main-panel" class="main-panel">
            <Sidebar {...this.props} routes={routes} />
            
            <Switch>
              {this.getRoutes(routes)}
              <Redirect from="/memberSite" to="/memberSite/dashboard" />{/* default rediect to dashboard */}
            </Switch>
            
            {/*
            <Switch>
                <Route path="/memberSite/landing" render={props => <TableList {...props} />} />
                <Route path="/memberSite/dashboard" render={props => <Dashboard {...props} />} />
                <Route path="/memberSite/user" render={props => <UserProfile {...props} />} />
                <Route path="/memberSite/table" render={props => <TableList {...props} />} />
                <Route path="/memberSite/typography" render={props => <Typography {...props} />} />
                <Route path="/memberSite/icons" render={props => <Icons {...props} />} />
                <Redirect from="/memberSite" to="/memberSite/landing" />
            </Switch>
            */}
        </div>
      </div>
    )
  }
}



export default MemberSite;
