import {
  TOPICS_INFO
} from '../constants/Topics';

export default function topics(state = {
  data: null,
  isWaiting: false,
  status: 'finish'
}, action = {}) {
  switch (action.type) {
    case TOPICS_INFO:
      return Object.assign({}, state, {
        data: action.data,
        isWaiting: false,
        status: 'finish',
      });

    default:
      return state;
  }
}
