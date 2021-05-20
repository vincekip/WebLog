import React, { Component } from "react";
import Header from '../Common/Header';
import image from "../assets/img/header-bg.jpg";

import Services from '../Common/Services';
import Portfolio from "../Common/Portfolio";
import Timeline from '../Common/Timeline';
import Team from "../Common/Team";
import Client from '../Common/Clients';
import Footer from '../Common/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header 
          title="Welcome to Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell Me More"
          link="/services"
          showButton={true}
          image={image}
        />

        <Services/>
        <Portfolio/>
        <Timeline/>
        <Team/>
        <Client/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
