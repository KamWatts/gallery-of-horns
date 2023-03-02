import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <h1>Horned Beasts {this.props.hearts}</h1>
    )
  }
}

export default Header;