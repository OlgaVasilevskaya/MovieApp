import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import './generalModal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { isActive, setIsActive } = props;

  const handleOpen = () => setIsActive(true);

  const handleClose = () => {
    setIsActive(false);
    setFormType(true);
  }

  const [formType, setFormType] = useState(true);

  const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');

  const [formError, setFormError] = useState('');

  const [isUserAuthorized, setIsUserAuthorized] = useState(false);

  const handleSubmit = () => {
    if((password === repeatPassword) && (password ?? repeatPassword)) {
      setFormError('');
    } else {
      setFormError('passwords are not equal');
    }

    const usersJson = localStorage.getItem('users');
    console.log('usersJson', usersJson);
    const users = JSON.parse(usersJson) || []; //null / []

    if(JSON.parse(usersJson)) {

    }

    console.log('users', users);

    const newUser ={
      email,
      password
    }

    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    const userEmail = newUser.find(item => item.email === email);
    const userEmail2 = JSON.stringify([...users, userEmail])
    console.log(userEmail2, 'userEmail2')
  };


  // listen to local storage

  const handleChangeEmail = (e) => {
    console.log('e', e.target.value);
    setEmail(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    console.log('e', e.target.value);
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    console.log('e', e.target.value);
    setLastName(e.target.value);
  };

  const handleChangePhone = (e) => {
    console.log('e', e.target.value);
    setPhone(e.target.value);
  };

  const handleChangePassword = (e) => {
    console.log('e', e.target.value);
    setPassword(e.target.value);
  };

  const handleChangeRepeatPassword = (e) => {
    console.log('e', e.target.value);
    setRepeatPassword(e.target.value);
  };

  const handleSignUp = () => {
    //successfully signed in
    //isUserAuthorized
    setFormType(false);
  }

  const handleSignIn = () => {
    setFormType(true);
  }

  // const validateEmail = (email) => {
  //   const re = /\S+@\S+\.\S+/;

  //   return re.test(email);
  // };

  return (
    <>
      <Modal
        open={isActive}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        {
          formType
          ? 
            (<Box sx={style}>
              <h2>Sign in</h2>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField 
                onChange={handleChangeEmail}
                value={email}
                id="outlined-basic1" 
                label="Email" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangePassword}
                value={password}
                id="outlined-basic2" 
                label="Password" 
                variant="outlined" 
                type="password"/>
              </Typography>

              <footer className="modal-footer">

                <button onClick={handleSubmit} className="submit" disabled={(!email, !password)}>
                  Sign in
                </button>

                <p>
                  Don't have an account yet? 
                  <button onClick={handleSignUp}>
                    Create one.
                  </button>
                </p>
              </footer>
            </Box>)
          : 
            (<Box sx={style}>
              <h2>Sign up</h2>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField 
                onChange={handleChangeEmail}
                value={email}
                id="outlined-basic3" 
                label="Email" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeFirstName}
                value={firstName}
                id="outlined-basic4" 
                label="First Name" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeLastName}
                value={lastName}
                id="outlined-basic5" 
                label="Last Name" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangePhone}
                value={phone}
                id="outlined-basic6" 
                label="Phone" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangePassword}
                value={password}
                id="outlined-basic7" 
                label="Password" 
                variant="outlined" 
                type="password"/>

                <TextField 
                onChange={handleChangeRepeatPassword}
                value={repeatPassword}
                id="outlined-basic8" 
                label="Repeat Password" 
                variant="outlined" 
                type="password"/>
              </Typography>

              <footer className="modal-footer">
                <div>{formError}</div>

                <button onClick={handleSubmit} className="submit" disabled={(!email, !firstName, !lastName, !phone, !password, !repeatPassword)}>
                  Sign up
                </button>

                <button onClick={handleSignIn} className="submit">
                  Go to sign in
                </button>
              </footer>
            </Box>)
        }
      </Modal>
    </>
  );
}
