import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

export default class Main extends React.Component {

  render() {

    console.log(this.props.data);

    let hornedAnimals = [];

    this.props.data.forEach((animal) => {
      // console.log(animal);

      hornedAnimals.push(
      <HornedBeast
      name={animal.title}
      image={animal.image_url}
      description={animal.description}
      horns={animal.horns}
      keyword={animal.keyword}
      key={animal._id}
      />
    )
  })

    return (
      <>
      <main>
        {hornedAnimals}
      </main>
      </>
    );
  }
}