import {
  TOPICS_INFO,
} from '../constants/Topics';

function doTopics(data) {
  return {
    type: TOPICS_INFO,
    data,
  };
}

export default function fetchTopics() {
  return (dispatch, getState) => {
    dispatch(doTopics({
      item: [{
        title: 'one',
      }, {
        title: 'two',
      }, {
        title: 'three',
      }],
    }));
  };
}
