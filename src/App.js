/** @format */

import React from "react";
// import ImageModal from "./Modal";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"
import "./App.css";

// Use classes more than IDs in React. React is meant to be reused.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      beastToDisplay: {}
    };
  }

  handleCloseModal = () =>
    this.setState({
      isModalDisplaying: false,
    });

  handleOpenModal = (beastObject) => {
    this.setState({
      isModalDisplaying: true,
      beastToDisplay: beastObject
    });

  };

  render() {
    console.log(this.state.beastToDisplay);
    return (
      <>
        <Header/>

        <h3 onClick={this.handleOpenModal}>{this.state.image}</h3>

        <Main
          data={data}
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
        />

        <Footer />

       <SelectedBeast
       showModal={this.state.isModalDisplaying}
       hideModal={this.handleCloseModal}
       beast={this.state.beastToDisplay}
       />
      </>
    );
  }
}

export default App;