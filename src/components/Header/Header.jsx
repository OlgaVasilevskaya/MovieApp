import React from 'react';

import logo from '../../assets/img/video-camera.png';

import SearchInput from '../SearchInput';

import './header.scss';

const Header = () => {

  return (

    <div className='header'>
       <img src={logo} alt="logo" />
       <SearchInput />
       <button>Sign in</button>
    </div>
  );
}

export default Header;
