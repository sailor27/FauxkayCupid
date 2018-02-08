import React from 'react';
import colorLogo from '../assets/images/color-logo.png';
import {Link} from 'react-router-dom';

const navOuter = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop:'50px',
  position: 'absolute',
  top: '0',
  width: '100%'
};

const link = {
  marginLeft: '40px',
  fontSize: '1.4em',
  letterSpacing: '2px',
  color:'#fff',
};


function NavBar() {
  return (
    <div className="container">
      <div style={navOuter}>
        <Link to="/"><img style={{height: '33px', display: 'block'}} src={colorLogo} /></Link>
        <div>
          <Link style={link} to="/About">About</Link>
          <Link style={link} to="/Careers">Careers</Link>
          <Link style={link} to="/Support">Support</Link>
          <Link style={link} to="/Press">Press</Link>
        </div>
      </div>
    </div>

  );
}

export default NavBar;
