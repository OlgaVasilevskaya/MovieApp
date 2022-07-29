import React, { useState, useEffect, useCallback } from 'react';

import './scrollUp.scss';
import '../../colors.scss';

const ScrollUp = () => {
  const [isBtnShown, setIsBtnShown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsBtnShown(window.scrollY > 200);
    });
  }, []);

  const handleScrollUp = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
