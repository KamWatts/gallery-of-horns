/** @format */

import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"
import BeastForm from "./Form";
import "./App.css";

// Use classes more than IDs in React. React is meant to be reused.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      beastToDisplay: {},
      numberOfHorns: 0,
      data: data,
      filteredData: data
    };
  }

  updateData = (filteredData) => {
    this.setState({
      filteredData: filteredData
    })
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

        <BeastForm 
        update={this.updateData}
        hornCount={this.numberOfHorns}
        handleFilter={this.setHorn}
        data={this.state.data}/>

        <h3 onClick={this.handleOpenModal}>{this.state.image}</h3>

        <Main
          data={this.state.filteredData}
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