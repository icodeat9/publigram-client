import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import ArticleCoverImg from '../../../../../../assets/landingpage/Article Cover.svg'

class ArticleCover extends React.Component {
  render() {
    return (
      <Col lg={6}>
        <img className="article-cover" src={"https://images.vexels.com/media/users/3/132257/isolated/preview/b4cd00b96f86d2159a56850e6e63767b-social-network-cloud-concept-by-vexels.png"} />
      </Col>
    )
  }
}

export default ArticleCover;
