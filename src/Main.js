import React from 'react';
import data from './data.json'
import HornedBeast from './HornedBeast';
import './Main.css';

export default class Main extends React.Component {

  render() {

    console.log(data);

    let hornedAnimals = [];
    data.forEach((animal, idx) => {
      
      hornedAnimals.push(
      <HornedBeast
      name={animal.title}
      image={animal.image_url}
      description={animal.description}
      horns={animal.horns}
      key={idx}
      />
    )
  })

    return (
      <main>
        {hornedAnimals}
      </main>
    
    );
  }
}