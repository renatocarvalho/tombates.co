import {
  FILTERS_TOGGLE,
  FILTERS_CLEAR
} from '../constants/filters';

export const toggleFilter = (filter) => (dispatch, getState) => dispatch({
    type: FILTERS_TOGGLE,
    filter
  });

export const clearFilters = () => (dispatch) => dispatch({ type: FILTERS_CLEAR });
