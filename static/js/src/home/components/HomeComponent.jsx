import React from 'react';
import {
  fetchInfo
} from '../actions/home';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInfo());
  }

  render() {
    return (
      <div>
        <p>HomeComponent</p>
        <Link to='/topics'>Topics</Link>
      </div>
    )
  }
}

export default HomeComponent;
