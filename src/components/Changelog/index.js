import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import moment from 'moment'
import { markdown } from 'markdown';
import Section from '../Section';
import Loader from '../Loader';
import Filters from '../Filters';


export default class Changelog extends Component {
  constructor (props) {
    super(props);
    this.shouldRenderLoadMore = this.shouldRenderLoadMore.bind(this);
    this.renderLog = this.renderLog.bind(this);
  }

  componentWillMount () {
    this.props.fetchLogs();
  }

  shouldRenderLoadMore () {
    const { loaded, total } = this.props.counts;

    if (loaded < total && !this.props.isFetching) {
      return <button onClick={this.props.fetchLogs}>Load more</button>
    }
  }

  componentWillReceiveProps (nextProps) {
    const { list, isFetching, counts } = nextProps;
    if (list.length < 10 && counts.total > counts.loaded && !isFetching) {
      this.props.fetchLogs();
    }
  }

  renderLog () {
    const { isFetching, counts, list } = this.props;

    return list.map((item, index) => {
      return (
        <li className={ item.source.toLowerCase() } key={index}>
          <div>
            <span className="indicator"></span>
          </div>
          <div className="time">{moment(item.createdAt).fromNow()}</div>
          <div className="measure" dangerouslySetInnerHTML={{ __html: markdown.toHTML(item.body) }}></div>
        </li>
      )
    })
  }

  render () {
    const { loaded, total } = this.props.counts;

    return (
      <Section tagName='article' className='section'>
        <h2 className='measure'>- Changelog <em>({ loaded }/{ total })</em></h2>
        <p className='measure'>After leaving Palantir in August 2016, I decided to take some time off. Below is a changelog of how I'm using that time.</p>
        <Filters filters={this.props.filters} onChange={this.props.toggleFilter} />
        { this.renderLog() }
        { this.props.isFetching && <Loader />}
        { this.shouldRenderLoadMore() }
      </Section>
    );
  }
}
