import React from 'react';

const ArrowButtons = ({ onClick, direction }) => {
  return (
    <div className="arrow-buttons">
      <button className={`arrow-btn ${direction}`} onClick={onClick}>{direction === 'prev' ? '❮' : '❯'}</button>
    </div>
  );
};

export default ArrowButtons;
