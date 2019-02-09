import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Image from '../../../../../../assets/landingpage/Laptop.svg'
class Laptop extends React.Component {
  render() {
    return (
      <Col lg={6}>
        <img className="laptop" src={"https://www.goodfreephotos.com/albums/vector-images/people-connected-in-a-web-vector-clipart.png"} />
      </Col>
    )
  }
}

export default Laptop;
