/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      favorited: false
    };
  }

  handleFavorites = () => {
    // When the user clicks on "Pet the beast!" update the value of this.state.likes

    // Must use setState to update a value in state
    // this.setState takes in object literals

    this.setState ({
      favorites: this.state.favorites + 1,
      favorited: true
    }); // this is a helper mthod to pass into objects with values that need to be updated

    // handleFavorites can now be passed into an onClick attribute '{this.hanleLikes}'
  }

  // the render() method gets invoked everytime a state
  render() {

    // Step 1: I want to render all names and images

    return (
    <main>
      <Card>

          <article
            className="animal">

              <h2>{this.props.title}</h2>
              <div>{this.state.favorited ? 'Yep' : 'Nope'}</div>

              <p onClick={this.handleFavorites}>Pet the beast!</p>
              <p>{this.props.description}</p>
              <img 

              src={this.props.image_url} 
              alt={this.props.title}
              />
          </article>

      </Card>
    </main>
    )  
  };  
}
export default HornedBeast;