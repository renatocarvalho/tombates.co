import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Changelog from '../components/Changelog';
import * as LogActions from '../actions/logs';
import * as FilterActions from '../actions/filters';

const getActiveFilters = (filters) => filters.filter(item => item.get('active')).map(item => item.get('source'));

const filterChangelogs = (list, filters) => list.filter(log => {
  if (filters.includes(log.source)) {
    return log;
  }
});

function mapStateToProps (state) {
  const {
    fetchedAt,
    isFetching,
    list,
    counts
  } = state.logs.toJS();

  const currentFilters = getActiveFilters(state.filters);

  const generateList = () => {
    if (currentFilters.size) {
      return filterChangelogs(list, currentFilters)
    }
    return list;
  }

  return {
    fetchedAt,
    isFetching,
    counts,
    list: generateList(),
    filters: state.filters.toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Object.assign({}, LogActions, FilterActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Changelog);
