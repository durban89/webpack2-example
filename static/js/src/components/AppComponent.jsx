/* eslint import/no-extraneous-dependencies:[0] */
import React from 'react';
import { Link } from 'react-router-dom';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>Nav</nav>
        <Link to="/home" >Home</Link>
      </div>
    );
  }
}

export default AppComponent;
