import 'whatwg-fetch';

import {
  LOGS_FETCH,
  LOGS_RECEIVE
} from '../constants/logs';

const generateUrl = (offset = 0, limit = 50) => `https://changelog.maisoumenos.xyz/?limit=${limit}&offset=${offset}`;

export const fetchLogs = () => (dispatch, getState) => {
  const {loaded} = getState().logs.toJS().counts;

  dispatch({ type: LOGS_FETCH });

  const url = generateUrl(loaded);

  fetch(url)
    .then(result => result.json())
    .then(json => {
      dispatch({
        type: LOGS_RECEIVE,
        payload: {
          list: json.data,
          total: json.pagination.total
        }
      })
    })
}
