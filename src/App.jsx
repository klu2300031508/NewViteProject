import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password123') {
      setMessage('Signin successful!');
    } else {
      setMessage('Invalid credentials.');
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h2>Ganesh's Portal</h2>
        <nav>
          <a href="#login">Login</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Login Form */}
      <section id="login" className="login-container">
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="extra-links">
          <a href="#">Forgot password?</a> | <a href="#">Create an account</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About This Site</h2>
        <p>This is a simple login page demo built using React.js. It includes state handling and basic form validation.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91 12345 67890</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ganesh's Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
