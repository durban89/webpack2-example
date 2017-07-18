/* eslint import/no-extraneous-dependencies:[0] */
import { withRouter } from 'react-router-dom';
import {
  connect,
} from 'react-redux';
import TopicsComponent from '../components/TopicsComponent';

function mapStateToProps(state) {
  return {
    topics: state.topics,
  };
}

module.exports = withRouter(connect(mapStateToProps)(TopicsComponent));
