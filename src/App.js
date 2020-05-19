import React from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar.js";
import Title from "./Components/Title.js";
import MainWindow from "./Components/MainWindow.js";
import Footer from "./Components/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'idHome',
    };
  }

  setActivetab =(id) =>{
    this.setState({activeTab: id})
    // console.log(this.state.activeTab);
  }


  render() {
    return (
      <div className="App">
        <Title />
        <NavBar setActivetab={this.setActivetab}/>
        <MainWindow activeTab={this.state.activeTab}/>
        <Footer />
      </div>
      
    );
  }
}

export default App;
