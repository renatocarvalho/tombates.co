import React from 'react';

const Loader = ({ ...props }) => {
  return (
    <div className="loader">
      <div className="loader-dot api">
        <span className="indicator"></span>
      </div>

      <div className="loader-dot swarm">
        <span className="indicator"></span>
      </div>

      <div className="loader-dot twitter">
        <span className="indicator"></span>
      </div>

      <div className="loader-dot github">
        <span className="indicator"></span>
      </div>

      <div className="loader-dot instagram">
        <span className="indicator"></span>
      </div>

      <div className="loader-dot dribbble">
        <span className="indicator"></span>
      </div>
    </div>
  )
}

export default Loader
