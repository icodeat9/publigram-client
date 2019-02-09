import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import Image from '../../../../../../assets/landingpage/Branding.svg'
class Branding extends React.Component {
  render() {
    return (
      <div>
        {/* <Link to="/"> */}
          <img className="branding" src={Image} />
        {/* </Link> */}
      </div>
    )
  }
}

export default Branding;
