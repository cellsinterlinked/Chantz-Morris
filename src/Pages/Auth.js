import React, { useState, useContext } from 'react';
import './Auth.css';
import { AuthContext } from '../Context/auth-context';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import ErrorModal from '../Reusable/Modals/ErrorModal';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userNameController = (event) => {
    setUserName(event.target.value);
  };

  const passwordController = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/user/login',
        'POST',
        JSON.stringify({
          userName: userName,
          password: password,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      auth.login(responseData.userId, responseData.token);
      console.log('logged in!');
    } catch (err) {
      console.log('failed to log in, nerd.');
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="authPage">
        <div className="authContainer">
          <div className="loginTitle">
            <h1>LOGIN</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="nameInput">
              <input
                type="text"
                id="user"
                name="user"
                onChange={userNameController}
                value={userName.value}
              ></input>
            </div>
            <div className="passwordInput">
              <input
                type="text"
                id="password"
                name="password"
                onChange={passwordController}
                value={password.value}
              ></input>
            </div>
            <div className="authSubmit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
