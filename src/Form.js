import React from 'react';
import {Button, Form} from 'react-bootstrap';


export default class BeastForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name: '',
      selectedValue: '',
      sortByHorn: 1
      }
    }

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.sortByHorn;

    let numberOfHorns = this.props.data.filter((beast) => {
      if (beast.horns === this.state.sortByHorn) {
        return beast;
      }
      return numberOfHorns;
    })
   
    this.props.update (
      numberOfHorns
      )


    this.setState ({
      selectedValue: value,
    })

    console.log(value);

//   if (this.state.sortByHorn === 'even') {
//       // display only the even number of horns
//       let newData = data.filter(horn => horn % 2 === 0);
//       this.setState({filteredData: newData});
// 
}

  handleNameOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState ({
      sortByHorn: parseInt(e.target.value)
    });
  }

  render() {

  // let horns = this.state.filteredData.map((horn, idx) => <ListGroup.Item key={idx}>{horn}</ListGroup.Item>)

    return (
      <>
          <Form onSubmit={this.handleSubmit}>
          <Form.Select onChange={this.handleOnChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">More than 10</option>
          </Form.Select>
            
          <Button type="submit">Submit</Button>
        </Form>
        </>
      )};
    } 




    // <Form.Label htmlFor="name">
    //           Pick a Number
    //         <Form.Control type="text" name="name" id="name" />
    //         </Form.Label>
    //       <Form.Group controlId="username">
    //         <Form.Label htmlFor="username">Username</Form.Label>
    //         <Form.Control type="text" />
    //       </Form.Group>

    //       <Form.Label>Select Animal
    //         <Form.Select name="selected" onchange="this.handleHowToSortOnChange">
    //           <option value="all">All</option>
    //           <option value="odd">Odd</option>
    //           <option value="even">Even</option>
    //         </Form.Select>

    //       </Form.Label>