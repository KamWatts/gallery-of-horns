/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
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
    console.log(this.props);
    // Step 1: I want to render all names and images

    return (
    <main>
  
        <Card style={{ width: '18rem' }} className="animal">
          <Card.Img  
                variant="top"
                src={this.props.image} 
                alt={this.props.title}
                />
                <div>{this.state.favorited ? 'Yes' : ''}</div>
          <Card.Body>
            <Card.Title>
                <p onClick={this.handleFavorites}>Pet the beast!</p>
                <p>{this.props.description}</p>
            </Card.Title>
              <Card.Text>
               
              </Card.Text>   
              <Button variant="primary">Favorite</Button>
              <Button variant="primary">Hate It</Button>
          </Card.Body>
        </Card>
  
    </main>
    )  
  };  
}
export default HornedBeast;
