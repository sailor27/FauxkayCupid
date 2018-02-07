import React from 'react';

function Home() {

  const homeHeaderStyle = {
    height: '100px',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between'
  };
  const threeDee = {
    color: '#fff',
    textShadow: '-1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000, -5px 5px #000, -6px 6px #000',
  };
  return (
    <div style={{background:'#f0a1c1'}}>
      <div className='container'>
        <header style={homeHeaderStyle}>
          <button>Sign Up</button>
        </header>
        <div>
          <h1 style={threeDee}>Dating Deserves Better</h1>
          <p>
            On OkCupid, you’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: better.
          </p>
        </div>
        <form>
          <h3>YOU ARE A</h3>
          <select>
            <option>Straight</option>
            <option selected>Bisexual</option>
            <option>Gay</option>
            <option>Other</option>
          </select>
          <select>
            <option>Woman</option>
            <option selected>Android</option>
            <option>Man</option>
            <option>Other</option>
          </select>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
