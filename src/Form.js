import React from 'react';
import {ListGroup, Form, Button} from 'react-bootstrap';


class ListGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name: '',
      howToSort:'',
      filteredData: data
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

  //   let name = e.target.name.value;
  //   let selected = e.target.selected.value;

  //   console.log(name, selected);

  //   this.setState ({
  //     name: name,
  //     howToSort: selected
  //   });
  // }

  let username = e.target.username.value;

  console.log('username', username);

  console.log('the value of name is: ', this.state.name);

  if (this.state.howToSort === 'even') {
      // display only the even number of horns
      let newData = data.filter(horn => horn % 2 === 0);
      this.setState({filteredData: newData});

  } else if (this.state.howToSort === 'odd') {
    // display only the odd number of horns
    let newData = data.filter(horn => horn % 2 !== 0);
    this.setState({filteredData: newData});

  } else {
    // display all the horns
    this.setState({filteredData: data})
  }

  handleNameOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSortOnChange = (e) => {
    this.setState ({
      howToSort: e.target.event
    });
  }

  render() {

  let horns = this.state.filteredData.map((horn, idx) => <ListGroup.Item key={idx}>{horn}</ListGroup.Item>)

    return (
      <>
      <header>
          <h1>Horned Beast Form</h1>
      </header>
        <main>
          <Form onSubmit={this.handleSubmit}>

            <Form.Label htmlFor="name" onChange={this.handleNameOnChange}>Name
              <Form.Control type="text" name="name" id="name"/>
            </Form.Label>

          <Form.Group controlId="username">
            <Form.Label htmlFor="username">Username</Form.Label> 
            <Form.Control type="text"/>
           </Form.Group>

              <Form.Label>Select Animal
                <Form.Select name="selected" onchange="this.handleHowToSortOnChange">
                  <option value="all">All</option>
                  <option value="odd">Odd</option>
                  <option value="even">Even</option>
                </Form.Select>

              </Form.Label>
              <Button type="submit">Submit</Button>
          </Form>
          <ListGroup>
                {horns}
            </ListGroup>
        </main>
        <footer>
        </footer>
        </>
    )
  }
}

export default ListGroup;