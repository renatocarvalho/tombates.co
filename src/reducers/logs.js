import Immutable from 'immutable';

import {
  LOGS_FETCH,
  LOGS_RECEIVE
} from '../constants/logs';

const initialState = new Immutable.Map({
  fetchedAt: null,
  isFetching: false,
  list: new Immutable.List(),
  counts: {
    total: 0,
    loaded: 0
  }
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { counts, list } = state.toJS();
  const { loaded } = counts;

  switch (type) {
    case LOGS_FETCH:
      return state.setIn(['isFetching'], true);
    case LOGS_RECEIVE:
      return state.mergeDeep({
        fetchedAt: new Date(),
        isFetching: false,
        list: list.concat(payload.list),
        counts: {
          total: payload.total,
          loaded: loaded + payload.list.length
        }
      });
    default:
      return state;
  }
}

export default reducer;
