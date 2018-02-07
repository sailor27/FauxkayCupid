import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
function Press() {

  const mainArea = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff'
  };
  return (
    <div style={{backgroundColor: '#4fc5d0', width: '100vw'}}>
      <NavBar />
      <div style={{paddingTop: '300px'}}>
        <div style={mainArea}>
          <div>
            <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>We are pretty legit</h1>
          </div>
          <div style={{backgroundColor: '#3260c7', height: '450px'}}>
            <h2>View our media kit</h2>
            <p>Hi-res assets, as well as rules about how to use the OkCupid brand.</p>
            <button>View media kit</button>
            <p>For press inquiries, contact press@okcupid.com</p>
          </div>
        </div>
        <Footer />
      </div>

    </div>

  );
}

export default Press;
