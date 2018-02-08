import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="flex container">
        <Link className="link" to="/apps">Apps</Link>
        <Link className="link" to="/About">About</Link>
        <Link className="link" to="/press">Press</Link>
        <Link className="link" to="/Careers">Careers</Link>
        <Link className="link" to="/Support">Support</Link>
        <Link className="link" to="/Blog">Blog</Link>
        <Link className="link" to="/TechBlog">Tech Blog</Link>
        <Link className="link" to="/AtlantaDating">Atlanta Dating</Link>
        <Link className="link" to="/PrivacyPolicy">Privacy Policy</Link>
        <Link className="link" to="/Terms">Terms</Link>
        <Link className="link" to="/SafetyTips">Safety Tips</Link>
      </div>

      <style jsx global>{`
        .link {
          text-transform: uppercase;
          color: black;
        }

        .footer a:hover{
          color: #8397c3;
        }
        .footer {
          background-color: #fff;
          color: #fff;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
      `}</style>

    </div>

  );
}

export default Footer;
