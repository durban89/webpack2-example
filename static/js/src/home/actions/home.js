import {
  INFO,
} from '../constants/Home';

function doInfo(data) {
  return {
    type: INFO,
    data,
  };
}

export default function fetchInfo() {
  return (dispatch, getState) => {
    dispatch(doInfo({
      item: [
        'one', 'two', 'three',
      ],
    }));
  };
}
