import {
  INFO
} from '../constants/Home';

export default function info(state = {
  data: null,
  isWaiting: false,
  status: 'finish'
}, action = {}) {
  switch (action.type) {
    case INFO:
      return Object.assign({}, state, {
        data: action.data,
        isWaiting: false,
        status: 'finish',
      });

    default:
      return state;
  }
}