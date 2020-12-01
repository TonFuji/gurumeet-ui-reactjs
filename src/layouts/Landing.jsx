import React, { Component } from 'react'
import Navigation from '../components/public/navigation';
import Header from '../components/public/header';
import Features from '../components/public/features';
import About from '../components/public/about';
import Services from '../components/services';
import Gallery from '../components/public/gallery';
import Testimonials from '../components/public/testimonials';
import Team from '../components/public/Team';
import Contact from '../components/public/contact';
import JsonData from '../data/data.json';

export class Landing extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div id="public">
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default Landing;
