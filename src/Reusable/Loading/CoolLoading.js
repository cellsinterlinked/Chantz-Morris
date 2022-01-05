import React from 'react';

import './CoolLoading.css';

const CoolLoading = props => {
  return (
    <div className='cool-loading__overlay'>
        <div className="loader">LOADING...</div>
      </div>
  )
}

export default CoolLoading;