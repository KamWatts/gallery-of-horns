/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HornedBeast.css'

class HornedBeast extends React.Component {

  render() {
    return (
    <main>
    <article>
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
      <img src="{this.props.imgUrl}" alt="Photo of horned animal"></img>
    </article>
    </main>
    )  
  };  
}
export default HornedBeast;