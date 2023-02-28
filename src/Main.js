import React from 'react';
import HornedBeast from './HornedBeast.js';
import './App.css';

class Main extends React.Component {

  render() {
    return (
      <>
        <title>Horned Beasts</title>
          <main>  
                <HornedBeast 
                title="Rhino" 
                description="This Rhinocerous roams the lands of Western Africa. Amongst the most feared and respected animals on land, this horned beast is an omnivore." 
                imgUrl = "../images/rhino.jpg"
                />
                
                  <HornedBeast 
                  title='Horned Bullfrog' 
                  description="Frog with horns" 
                  imgUrl = "../images/hornedfrog.jpg"
                  />
                       
           </main>
      </>
    )
  };
}

export default Main;