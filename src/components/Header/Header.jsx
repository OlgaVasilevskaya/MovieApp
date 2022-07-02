import React from 'react';

import './header.scss';

import logo from '../../assets/img/video-camera.png';
import SearchInput from '../../components/SearchInput/SearchInput';

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
