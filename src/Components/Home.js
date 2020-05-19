import React from "react";
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  require('./images/bracelet.jpg'),
  require('./images/necklace.jpg'),
  require('./images/hand.jpg'),
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div id="idAbout">
        <h1>Home</h1>
        <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="" />
          </div>
          {/* <h2>First Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt=""/>
          </div>
          {/* <h2>Second Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt=""/>
          </div>
          {/* <h2>Third Slide</h2> */}
        </div>
      </Fade>
        
      </div>
    );
  }
}

export default Home;
