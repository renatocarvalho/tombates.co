import React from 'react';

const Container = ({ ...props }) => {
  return (
    <article {...props}>
      { props.children }
    </article>
  )
}

export default Container
