import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Navigation from './blocks/Navigation.js';
import CallToAction from './blocks/Call To Action.js';
import SlackChannel from './blocks/houses/Slack Channel.js';

class Header extends React.Component {
  render() {
    const {accessMain} = this.props;
    return (
      <section className="header">
        <Container>
          <Row>
            <Navigation/>
          </Row>
          <Row>
            <CallToAction accessMain={accessMain} title={this.props.title} subtitle={this.props.subtitle}/>
          </Row>
          <Row>
            <SlackChannel/>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Header;
