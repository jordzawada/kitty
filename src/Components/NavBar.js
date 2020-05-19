import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  selectTab =(e) =>{
      this.props.setActivetab(e.target.id)
  }

  render() {
    return (
      <div id="idNav">
        <div id="idNavButtonsDiv">
          <div>
            <button onClick={this.selectTab} className="classNavButtons" id="idHome">
              Home
            </button>
          </div>
          <div>
            <button onClick={this.selectTab} className="classNavButtons" id="idShop">
              Shop
            </button>
          </div>
          <div>
            <button onClick={this.selectTab} className="classNavButtons" id="idAbout">
              About
            </button>
          </div>
          <div>
            <button onClick={this.selectTab} className="classNavButtons" id="idContact">
              Contact
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
