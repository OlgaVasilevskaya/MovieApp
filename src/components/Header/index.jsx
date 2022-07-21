import React from 'react';

import SearchInput from '../SearchInput';

import logo from '../../assets/img/video-camera.png';

import './header.scss';

const Header = (props) => {
  const { setIsOpen } = props;

  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      <SearchInput />

      <button className="clickme" onClick={setIsOpen}>
        Sign in
      </button>
    </div>
  );
}

export default Header;
