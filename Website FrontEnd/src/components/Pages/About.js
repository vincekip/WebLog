import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about-bg.jpg";

import Timeline from "../Common/Timeline";

class About extends Component {
  render() {
    return (
      <div>
       <Header 
          title="About Us"
          subtitle="Its really a Great Story"
          showButton={false}
          image={image}
        />
        <Timeline/>
      </div>
    );
  }
}

export default About;
