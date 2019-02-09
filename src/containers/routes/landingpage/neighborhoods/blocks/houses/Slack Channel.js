import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

// import Image from '../../../../../../assets/landingpage/Slack Channel.svg'
import Image from '../../../../../../assets/landingpage/social-media-marketing.png'
class SlackChannel extends React.Component {
  render() {
    return (
      <Col lg={12}>
        <img className="slack-channel" src={Image} />
      </Col>
    )
  }
}

export default SlackChannel;
