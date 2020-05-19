import React from "react";
import Shop from "./Shop.js";
import About from "./About.js";
import Home from "./Home.js";
import Contact from "./Contact";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: <Home />,
    };
  }

  updateTab = () => {
    if (this.props.activeTab === "idShop") {
      this.setState({ tab: <Shop /> });
    } else if (this.props.activeTab === "idHome") {
      this.setState({ tab: <Home /> });
    } else if (this.props.activeTab === "idAbout") {
      this.setState({ tab: <About /> });
    } else if (this.props.activeTab === "idContact") {
      this.setState({ tab: <Contact /> });
    }
  };

  componentDidUpdate(prevProps, prevState, SS) {
    if (prevState.tab === this.state.tab) {
      this.updateTab();
    }
  }

  render() {
    return (
    <div id="idMain">
        {this.state.tab}
        </div>
    )
  };
}

export default Main;
