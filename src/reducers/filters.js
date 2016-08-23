import Immutable from 'immutable';

import {
  FILTERS_TOGGLE,
  FILTERS_CLEAR
} from '../constants/filters';

const FILTERS = [
  { label: 'API', source: 'API', className: 'api', active: false },
  { label: 'Dribbble', source: 'DRIBBBLE', className: 'dribbble', active: false },
  { label: 'Instagram', source: 'INSTAGRAM', className: 'instagram', active: false },
  { label: 'Github', source: 'GITHUB', className: 'github', active: false },
  { label: 'Swarm', source: 'SWARM', className: 'swarm', active: false },
  { label: 'Twitter', source: 'TWITTER', className: 'twitter', active: false }
];

const initialState = new Immutable.fromJS(FILTERS);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_TOGGLE:
      const index = state.findIndex(item => item.get('source') === action.filter.source);
      return state.setIn([index, 'active'], !action.filter.active);;
    case FILTERS_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
