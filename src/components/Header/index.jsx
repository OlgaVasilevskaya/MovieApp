import React, { useEffect } from 'react';

import SearchInput from '../SearchInput';

import logo from '../../assets/img/video-camera.png';

import './header.scss';

const Header = (props) => {
  const { setIsOpen, isUserAuthrized } = props;

  const usersEmail = localStorage.getItem('isUserAuthrized');

  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      <SearchInput />

      <button className="clickme" onClick={setIsOpen}>
        Sign in
      </button>

      <div className='email' isUserAuthrized={isUserAuthrized}>
        {usersEmail}
      </div>
    </div>
  );
}

export default Header;
