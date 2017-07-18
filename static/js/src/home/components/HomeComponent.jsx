/* eslint import/no-extraneous-dependencies:[0] */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  fetchInfo,
} from '../actions/home';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInfo());
  }

  render() {
    return (
      <div>
        <p>HomeComponent</p>
        <Link to="/topics">Topics</Link>
      </div>
    );
  }
}

HomeComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default HomeComponent;
