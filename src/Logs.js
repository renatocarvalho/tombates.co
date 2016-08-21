import React, { Component } from 'react';
import moment from 'moment'
import { markdown } from 'markdown';

export default class Logs extends Component {
  render () {
    if (this.props.loading && !this.props.items.length) {
      return (<h1>[!] loading…</h1>)
    }

    if (!this.props.loading && !this.props.items.length) {
      return (<h1>[?] Nothing to show. Maybe turn on some categories?</h1>)
    }

    const items = this.props.items.map((item, index) => {
      return (
        <li className={ item.source.toLowerCase() } key={index}>
          <div className="time">{moment(item.createdAt).fromNow()}</div>
          <div className="measure" dangerouslySetInnerHTML={{ __html: markdown.toHTML(item.body) }}></div>
        </li>
      )
    })
    return <ul>{items}</ul>
  }
}
