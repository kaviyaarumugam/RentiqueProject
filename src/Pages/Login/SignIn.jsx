import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle, FaApple,FaLinkedinIn } from 'react-icons/fa';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const adminEmail = 'kaviyaadmin@gmail.com';
  const adminPassword = 'Kaviya@admin';

  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log('Attempting to sign in with email:', email);

    // Check if the credentials are for the admin
    if (email === adminEmail && password === adminPassword) {
      alert('Admin login successful!');
      localStorage.setItem('email', email);
      navigate('/admin/home', { state: { email } });
      return;
    }

    // Proceed with regular user login
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      console.log('Server response:', response);

      if (response.status === 200) {
        const { email } = response.data;
        localStorage.setItem('email', email);
        console.log('Email stored in localStorage:', email);

        alert('Login successful!');
        navigate('/', { state: { email } });
      } else {
        console.log('Login failed with status:', response.status);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSignIn}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FaEnvelope />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ textTransform: 'lowercase' }}
        />
      </div>
      <div className="input-field">
        <FaLock />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ textTransform: 'lowercase' }}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
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

export default SignIn;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
  
//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const { email } = response.data; // Adjust based on your API response
//         localStorage.setItem('email', email);
//         console.log('Email stored in localStorage:', email); // Debugging
//         alert('Login successful!');
//         navigate('/', { state: { email } });
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in. Please check your credentials.');
//     }
//   };
  
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value.toLowerCase());
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <FaEnvelope />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}   style={{ textTransform: 'lowercase' }}/>
//       </div>
//       <div className="input-field">
//         <FaLock />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="https://www.facebook.com/signup" className="social-icon">
//           <FaFacebookF />
//         </a>
//         <a href="https://twitter.com/i/flow/signup" className="social-icon">
//           <FaTwitter />
//         </a>
//         <a href="https://myaccount.google.com/" className="social-icon">
//           <FaGoogle />
//         </a>
//         <a href="https://www.linkedin.com/" className="social-icon">
//         <FaLinkedinIn />
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;
