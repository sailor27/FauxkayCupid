import React from 'react';
import Footer from './Footer';
import tangerine from '../assets/images/crispy-slide-tangerine.png';
import bwLogo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

function Home() {

  const homeHeaderStyle = {
    padding: '30px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const threeDee = {
    color: '#fff',
    textShadow: '-1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000, -5px 5px #000, -6px 6px #000',
    textTransform: 'uppercase',
    fontSize: '3em'
  };

  const clearBtn = {
    border: '1px solid',
    color: '#000',
    padding: '8px',
    borderRadius: '3px',
  };

  return (
    <div>
      <div style={{background:'#f0a1c1'}}>
        <div className='container'>
          <header style={homeHeaderStyle}>
            <img src={bwLogo}/>
            <Link style={clearBtn} to="#">Sign Up</Link>
          </header>
          <div style={{display:'grid', gridTemplateColumns:'50% 50%', padding:'80px 0'}}>
            <div style={{}}>
              <div>
                <h1 style={threeDee}>Dating Deserves Better</h1>
                <p style={{fontSize: '1.1em', lineHeight: '2em',}}>
                  On OkCupid, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: better.
                </p>
              </div>
              <form style={{padding:'10px 10px'}}>
                <h3>YOU ARE A</h3>
                <div className="selectdiv">
                  <label>
                    <select >
                      <option defaultValue>Bisexual</option>
                      <option>Straight</option>
                      <option>Gay</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
                <div className="selectdiv">
                  <label>
                    <select>
                      <option defaultValue>Android</option>
                      <option>Woman</option>
                      <option>Man</option>
                      <option>Other</option>
                    </select>
                  </label>

                </div>
                <button type="submit">Continue</button>
                <style jsx>
                  {`
                    .selectdiv {
                      position: relative;
                      float: left;
                      min-width: 200px;
                      display: inline;
                      margin-right: 20px;
                    }
                    .selectdiv:after {
                      content: '\f078';
                      font: normal normal normal 17px/1 FontAwesome;
                      color: #0ebeff;
                      right: 11px;
                      top: 6px;
                      height: 34px;
                      padding: 15px 0px 0px 8px;
                      border-left: 1px solid #0ebeff;
                      position: absolute;
                      pointer-events: none;
                    }
                    select::-ms-expand {
                      display: none;
                    }
                    .selectdiv select {
                      -webkit-appearance: none;
                      -moz-appearance: none;
                      appearance: none;
                      /* Add some styling */

                      display: block;
                      width: 100%;
                      max-width: 320px;
                      height: 50px;
                      float: right;
                      margin: 5px 0px;
                      padding: 0px 24px;
                      font-size: 16px;
                      line-height: 1.75;
                      color: #333;
                      background-color: #ffffff;
                      background-image: none;
                      border: 1px solid #0ebeff;
                      -ms-word-break: normal;
                      word-break: normal;
                    }
                    `}
                </style>
              </form>
            </div>
            <div>
              <img src={tangerine}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
