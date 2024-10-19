import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';
import loginImage1 from './img_1.jpg'; 
import loginImage2 from './img_2.jpg';
import loginImage3 from './img_3.jpg';
import loginImage4 from './img_4.jpg';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const images = [loginImage1, loginImage2, loginImage3, loginImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/welcome'); 
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <div className="image">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Login ${i + 1}`}
              className={`login-img ${i === index ? '' : 'hide'}`}
            />
          ))}
        </div>
      </div>
      <div className="right-side">
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email / Username" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
