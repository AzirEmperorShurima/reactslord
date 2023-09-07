import React from 'react';
import PropTypes from 'prop-types';

LoginPage.propTypes = {

};

function LoginPage(props) {
    return (
        <div className='loginPage'>
            <h1>Login Form</h1>
            <div className='input-box'>
                <input type='text' id='user-input' placeholder='UserName' />
                <label htmlFor='User-input'>UserName</label>
                <input type='password' id='password-input' placeholder='Password' />
                <label htmlFor='password-input'>Password</label>
            </div>
            <div className='question-login'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember</label>
                <a href="http://" target="_blank" rel="noopener noreferrer">Forget Password</a>
            </div>
            <div className='btn submit-login'>
                <button type="submit">Login</button>
            </div>
        </div>
    );
}

export default LoginPage;