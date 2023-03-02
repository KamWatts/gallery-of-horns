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
      favorites: '',
      favorited: false
    };
  }

  handleFavorites = () => {
    // When the user clicks on "Pet the beast!" update the value of this.state.likes

    // Must use setState to update a value in state
    // this.setState takes in object literals

    this.setState ({
      favorites: this.state.favorites + '❤️',
      favorited: true
    }); // this is a helper mthod to pass into objects with values that need to be updated

    // handleFavorites can now be passed into an onClick attribute '{this.hanleLikes}'
  }

  // handleHeaderClick = () => {
  //   this.handleFavorites();
  //   this.props.handleOpenModal(this.props.name);
  // }


  // the render() method gets invoked everytime a state
  render() {
  
    // Step 1: I want to render all names and images

    return (
    <main>
  
        <Card style={{ width: '18rem' }} className="animal">

          <Card.Img  
                variant="top"
                src={this.props.image} 
                alt={this.props.title}
                onClick={this.props.handleOpenModal}
                />
                <h3>{this.state.favorited ? this.state.favorites : ''}</h3>
          <Card.Body>

            <Card.Title>
                <h3>{this.props.name}</h3>
            </Card.Title>

              <Card.Text>
              <p>{this.props.description}</p>
              </Card.Text>   
              <Button variant="primary" onClick={this.handleFavorites}><span role="img" aria-label="'/like/' this horned animal">❤️</span></Button>
          </Card.Body>
        </Card>
  
    </main>
    )  
  };  
}
export default HornedBeast;
