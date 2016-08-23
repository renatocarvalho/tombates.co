import React from 'react';
import classnames from 'classnames';
import { markdown } from 'markdown';

const Section = ({ ...props }) => {
  const cx = classnames(props.className);

  if (props.tagName && props.markdown) {
    return React.createElement(props.tagName, { id: props.id, className: cx, style: props.style, dangerouslySetInnerHTML: { __html: markdown.toHTML(props.markdown) } });
  }

  if (props.tagName && !props.markdown) {
    return React.createElement(props.tagName, { id: props.id, className: cx, style: props.style }, props.children);
  }

  return (
    <section className={cx} {...props}>
      { props.children }
    </section>
  )
}

export default Section
