import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
export default class SelectedBeast extends 
React.Component {

  render() {

    return (
    <Modal
    show={this.props.showModal}
    onHide={this.props.hideModal}
  >
    <Modal.Header>
      <Modal.Title>{this.props.beast.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image src={this.props.beast.image_url}></Image>
    </Modal.Body>
  </Modal>
  )}
};