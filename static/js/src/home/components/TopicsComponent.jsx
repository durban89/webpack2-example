import React from 'react';
import {
  fetchTopics
} from '../actions/topics';
import { Link } from 'react-router-dom';

class TopicsComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopics());
  }

  render() {
    return (
      <div>
        <p>TopicsComponent</p>
        <Link to='/home'>Home</Link>
      </div>
    )
  }
}

export default TopicsComponent;
