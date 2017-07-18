/* eslint import/no-extraneous-dependencies:[0] */
import { withRouter } from 'react-router-dom';
import {
  connect,
} from 'react-redux';
import HomeComponent from '../components/HomeComponent';

function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

module.exports = withRouter(connect(mapStateToProps)(HomeComponent));
