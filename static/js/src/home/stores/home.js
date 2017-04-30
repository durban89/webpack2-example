import HomeComponent from '../components/HomeComponent';
import { withRouter } from 'react-router-dom'

import {
  connect
} from 'react-redux';

function mapStateToProps(state) {
  return {
    home: state.home,
  }
}

module.exports = withRouter(connect(mapStateToProps)(HomeComponent));
