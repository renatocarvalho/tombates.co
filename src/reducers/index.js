import { combineReducers } from 'redux';

import logs from './logs';
import filters from './filters';

const rootReducer = combineReducers({
  logs,
  filters
});

export default rootReducer;
