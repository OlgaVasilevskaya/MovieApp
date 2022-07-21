import React, { useState, useEffect } from 'react';

import './scrollUp.scss';

const ScrollUp = () => {
  const [isBtnShown, setIsBtnShown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY > 200) ?  setIsBtnShown(true) : setIsBtnShown(false);
    });
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

    return (
        <div className="top-btm">
            {isBtnShown && (
                <div className="icon" onClick={handleScrollUp}>
                  Scroll Up
                </div>
            )}
        </div>
    );
};

export default ScrollUp;
