import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core'
import ModalRegister from "../../../modalRegister"
import { Container, Row, Col } from 'react-grid-system';
class SectionButton extends React.Component {
  state = {
    modal: false
  }

  closeDialog = () =>
  {
    this.setState({modal: false})
  }

  openModal = () =>
  {
    this.setState({modal: true})
  }

  render() {
    const {modal} = this.state;
    const {accessMain} = this.props;
    return (
      <div>
        <button className="button" onClick={this.openModal} >Registrarse</button>
        <button className="button" onClick={accessMain} >Iniciar sesión</button>
        {/* <Container>
          <Row>
          <Col>
          {/* <button className="button" onClick={this.openModal} >Registrarse</button> *
          <Button variant="contained" color="primary" >Lallaa</Button>
            </Col>
        <Col>
        <button id="primaryButton" className="button" onClick={this.openModal} >Iniciar</button>
        </Col>
        </Row>
        </Container> */}
        <ModalRegister open={modal} handleModal={this.closeDialog} />
      </div>
    )
  }
}

export default SectionButton;
