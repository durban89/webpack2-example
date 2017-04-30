import TopicsComponent from '../components/TopicsComponent';
import { withRouter } from 'react-router-dom'

import {
  connect
} from 'react-redux';

function mapStateToProps(state) {
  return {
    topics: state.topics,
  }
}

module.exports = withRouter(connect(mapStateToProps)(TopicsComponent));
