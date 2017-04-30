import {
  INFO
} from '../constants/Home';

function doInfo(data) {
  return {
    type: INFO,
    data: data
  }
}

export function fetchInfo() {
  return (dispatch, getState) => {
    dispatch(doInfo({
      item: [
        'one', 'two', 'three'
      ]
    }));
  }
}
