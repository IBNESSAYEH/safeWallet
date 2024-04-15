import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      console.log(response.data.message);
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/login');
     
      
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="navbar row py-3 navbar-expand-lg shadow  navbar-light px-4 bg-light">
      <Link className="navbar-brand col-md-4 fw-bold" to="/">my<span className='text-primary'>Wallet</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse col-md-4 container navbar-collapse d-flex px-4 justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/TransactionPages">Transactions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/accounts">Accounts</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <div className="form-inline my-2 my-lg-0">
            <button onClick={handleLogout} className="btn btn-outline-primary my-2 my-sm-0" type="button">Logout</button>
          </div>
        ) : (
          <div className="form-inline my-2 my-lg-0">
            
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
