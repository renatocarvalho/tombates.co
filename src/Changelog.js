import 'whatwg-fetch';
import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import Filters from './Filters';
import Logs from './Logs';

const FILTERS = [
  { label: 'API', source: 'API', visible: false },
  { label: 'Dribbble', source: 'DRIBBBLE', visible: false, className: 'dribbble' },
  { label: 'Instagram', source: 'INSTAGRAM', visible: false, className: 'instagram' },
  { label: 'Github', source: 'GITHUB', visible: false, className: 'github' },
  { label: 'Swarm', source: 'SWARM', visible: false, className: 'swarm' },
  { label: 'Twitter', source: 'TWITTER', visible: false, className: 'twitter' }
];

const defaultState = {
  loading: false,
  filters: FILTERS,
  list: [],
  filteredList: [],
  total: 0
}

const generateUrl = (limit = 10, offset = 0) => `https://changelog.maisoumenos.xyz/?limit=${limit}&offset=${offset}`;

const getFilterBySource = (filters, source) => filters.filter(filter => filter.source === source)

const filterList = (list, filters) => list.filter((item, index) => {
  if (filters.filter(item => item.visible).length) {
    const filter = getFilterBySource(filters, item.source)[0];
    if (filter.visible) { return item; }
  } else {
    return item;
  }
})

export default class Changelog extends Component {
  constructor (props) {
    super(props);

    this.state = defaultState;
    this.onCheckChange = this.onCheckChange.bind(this);
    this.load = this.load.bind(this);
  }

  load () {
    const url = generateUrl(this.limit, this.state.list.length);

    this.setState({ loading: true });

    fetch(url)
      .then(result => result.json())
      .then(json => {
        const { filters, list, total } = this.state;
        const list_ = this.state.list.concat(json.data);
        const filtered = filterList(list_, filters);

        this.setState({
          loading: false,
          list: list_,
          filteredList: filtered,
          total: json.pagination.total
        })

        if (filtered.length < 10 && total > list.length) {
          setTimeout(() => this.load(), 100)
        }
      })
  }

  onCheckChange (filter) {
    const { filters, list, total, loading } = this.state;
    const { visible } = filter;
    const index = filters.indexOf(filter)

    if (loading) {
      return;
    }

    filters[index].visible = !visible;

    const filtered = filterList(list, filters);

    this.setState({
      filters: filters,
      filteredList: filtered
    });

    if (filtered.length < 10 && total > list.length) {
      setTimeout(() => this.load(), 100)
    }
  }

  componentWillMount () {
    this.load()
  }

  render () {
    const ChangelogHeader = createFragment({
      h1: <h2 className="measure">Changelog <span className="count">({this.state.filteredList.length}/{ this.state.total })</span></h2>,
      p: <p className="measure">{ "After leaving Palantir in August 2016, I decided to take some time off. Below is a changelog of how I'm using that time." }</p>
    })

    const canLoadMore = () => {
      if (this.state.list.length < this.state.total && this.state.loading) {
        return (<button disabled>Load more</button>)
      } else if (this.state.list.length < this.state.total) {
        return (<button onClick={this.load}>Load more</button>)
      }
    }

    return (
      <section className="section">
        { ChangelogHeader }
        <Filters
          filters={ FILTERS }
          onChange={this.onCheckChange}
        />
        <Logs
          loading={this.state.loading}
          items={this.state.filteredList}
        />
        { canLoadMore() }
      </section>
    )
  }
}
