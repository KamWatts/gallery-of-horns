import React from 'react';
import Main from './Main.js';
import './App.css';


// Use classes more than IDs in React. React is meant to be reused.

class App extends React.Component {

  render() {
    return (
      <>
          <header>
            <h1>Gallery of Horns</h1>
          </header>
            <main>
                  <Main/>
            </main>
            <br></br>
            <footer>Author: Kameron Watts</footer>
        </>
    );
  }
}

export default App;