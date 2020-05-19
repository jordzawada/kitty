import React from "react";
import CatLogo from './CatLogo.svg';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="idTitle">
        <h1>Kitty</h1>
        <img src={CatLogo} id="idCatLogo" alt="" />
      </div>
    );
  }
}

export default Title;
