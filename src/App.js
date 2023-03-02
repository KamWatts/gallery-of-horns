/** @format */

import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import Modal from "react-bootstrap/Modal";
import "./App.css";

// Use classes more than IDs in React. React is meant to be reused.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: "Liking",
      isModalDisplaying: false,
      animalName: "",
    };
  }

  handleCloseModal = () =>
    this.setState({
      isModalDisplaying: false,
    });

  handleOpenModal = (name) => {
    this.setState({
      isModalDisplaying: true,
      animalName: name,
    });
  };
  addHearts = () =>
    this.setState({
      // this is the only way to update the value in state
      hearts: this.state.hearts + "❤️",
    });

  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />

        <h3 onClick={this.handleOpenModal}>{this.state.image}</h3>

        <Main
          data={data}
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
        />

        <Footer />

        <Modal
          show={this.state.isModalDisplaying}
          onHide={this.handleCloseModal}
        >
          <Modal.Header>
            <Modal.Title>{this.state.animalName}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
