import React from 'react';
import { markdown } from 'markdown';
import createFragment from 'react-addons-create-fragment';

const Definition = ({ ...props }) => {
  return (
    <dl id={props.id} className={props.className}>
      { props.list.map(item => createFragment({
        dt: <dt>{item.term}</dt>,
        dd: React.createElement('dd', {dangerouslySetInnerHTML: { __html: markdown.toHTML(item.description) }})
      }))}
    </dl>
  )
}

export default Definition
