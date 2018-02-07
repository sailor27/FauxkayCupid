import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="flex container">
        <Link className="link" to="#">Apps</Link>
        <Link className="link" to="#">About</Link>
        <Link className="link" to="/press">Press</Link>
        <Link className="link" to="#">Careers</Link>
        <Link className="link" to="#">Support</Link>
        <Link className="link" to="#">Blog</Link>
        <Link className="link" to="#">Tech Blog</Link>
        <Link className="link" to="#">Atlanta Dating</Link>
        <Link className="link" to="#">Privacy Policy</Link>
        <Link className="link" to="#">Terms</Link>
        <Link className="link" to="#">Safety Tips</Link>
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
