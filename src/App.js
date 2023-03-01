import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import data from './data.json'
import './App.css';


// Use classes more than IDs in React. React is meant to be reused.

class App extends React.Component {

  render() {
    // Step 1: I want to render all names and images
    
    return (
      <>
          <Header/>
          <Main data={data}/>
          <Footer/>
      </>
    );
  }
}

export default App;