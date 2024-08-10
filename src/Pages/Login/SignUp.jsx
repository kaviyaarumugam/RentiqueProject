import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/create', {
        username,
        email,
        password,
      });
      alert('User registered successfully!');
      navigate('/'); // Redirect to the home page after the alert
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert('Error registering user');
    }
  };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value.toLowerCase());
  // };



  return (
    <form className="sign-up-form" onSubmit={handleSignUp}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FaUser />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-field">
        <FaEnvelope />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  style={{ textTransform: 'lowercase' }}/>
      </div>
      <div className="input-field">
        <FaLock />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="https://www.facebook.com/signup" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/i/flow/signup" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://myaccount.google.com/" className="social-icon">
          <FaGoogle />
        </a>
        <a href="https://www.linkedin.com/" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </form>
  );
}

export default SignUp;
