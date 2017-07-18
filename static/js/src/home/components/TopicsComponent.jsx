/* eslint import/no-extraneous-dependencies:[0] */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  fetchTopics,
} from '../actions/topics';

class TopicsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopics());
  }

  render() {
    return (
      <div>
        <p>TopicsComponent</p>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

TopicsComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default TopicsComponent;
