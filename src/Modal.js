import { useState } from 'react';
import { Modal } from 'react-bootstrap';
// import HornedBeast from './HornedBeast';
import React from 'react'

function ImageModal({ src, alt, thumbnail }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={this.state.image} alt={this.state.description} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={this.props.image} alt={this.props.description} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageModal;
