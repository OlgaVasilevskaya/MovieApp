import React, { useState, useEffect } from 'react';

import { FaAngleUp } from 'react-icons/fa';

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
                <FaAngleUp className="icon" onClick={handleScrollUp}
                />
            )}
        </div>
    );
};

export default ScrollUp;
