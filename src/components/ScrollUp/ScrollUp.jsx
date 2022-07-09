import React, { useState, useEffect } from 'react';

import { FaAngleUp } from 'react-icons/fa';

import './scrollUp.scss';

const ScrollUp = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
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
            {showBtn && (
                <FaAngleUp className="icon" onClick={handleScrollUp}
                />
            )}
        </div>
    );
};

export default ScrollUp;
