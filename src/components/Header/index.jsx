import React, { useState } from 'react';

import SearchInput from '../SearchInput';
import Modal from '../Modal';

import logo from '../../assets/img/video-camera.png';

import './header.scss';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const SwitchStatus = () => setIsModalOpen(!isModalOpen);

  return (

    <div className='header'>
      <img src={logo} alt="logo" />

      <SearchInput />

      <button className="clickme" onClick={() => SwitchStatus()}>
        Sign in
      </button>

      <Modal show={isModalOpen} close={SwitchStatus} />
    </div>
  );
}

export default Header;
