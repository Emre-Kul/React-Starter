import React, {Component} from "react";
import "./home-page.scss";

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  handleHelloButtonClick = () => {
      alert("Hello!");
  }

  render() {
    return (
      <div className="home-page">
        <h1 className="home-page-header-text">
            This is a sample text!        
        </h1>
        <button className="home-page-hello-button"
                onClick={this.handleHelloButtonClick}>Hello World!
        </button>
      </div>
    );
  }
}

export default HomePage;