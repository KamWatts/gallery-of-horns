import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

export default class Main extends React.Component {

  render() {

    console.log(this.props.data);

    

    let animal = this.props.data.map((animal) => {
      // console.log(animal);

      return (
      <HornedBeast
      name={animal.title}
      image={animal.image_url}
      description={animal.description}
      horns={animal.horns}
      keyword={animal.keyword}
      key={animal._id}
      addHearts={this.props.addHearts}
      handleOpenModal={this.props.handleOpenModal}
      />
    )
  })

    return (
      <>
      <main>
        {animal}
      </main>
      </>
    );
  }
}

