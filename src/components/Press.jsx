import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Article from './Article';


const masterArticleList = [
  {
    title: 'OkCupid Now Lets You Know Which Dudes Support Planned Parenthood',
    content: 'OkCupid may be the OG of dating sites, but that doesn’t mean it is done innovating. The online dating service on Wednesday announced a new update that gives users the ability to let everyone know they stand with Planned Parenthood. It is an easy way to figure out who is worthy of a first date—or at the very least, a u up.',
    source: 'Glamour',
    date: '9/13/17'
  },
  {
    title: 'After Charlottesville, Even Dating Apps Are Cracking Down on Hate',
    content: 'OkCupid may be the OG of dating sites, but that doesn’t mean it is done innovating. The online dating service on Wednesday announced a new update that gives users the ability to let everyone know they stand with Planned Parenthood. It is an easy way to figure out who is worthy of a first date—or at the very least, a u up.',
    source: 'Glamour',
    date: '9/13/17'
  },
  {
    title: 'OkCupid Now Lets You Know Which Dudes Support Planned Parenthood',
    content: 'OkCupid may be the OG of dating sites, but that doesn’t mean it is done innovating. The online dating service on Wednesday announced a new update that gives users the ability to let everyone know they stand with Planned Parenthood. It is an easy way to figure out who is worthy of a first date—or at the very least, a u up.',
    source: 'Glamour',
    date: '9/13/17'
  },
  {
    title: 'After Charlottesville, Even Dating Apps Are Cracking Down on Hate',
    content: 'OkCupid may be the OG of dating sites, but that doesn’t mean it is done innovating. The online dating service on Wednesday announced a new update that gives users the ability to let everyone know they stand with Planned Parenthood. It is an easy way to figure out who is worthy of a first date—or at the very least, a u up.',
    source: 'Glamour',
    date: '9/13/17'
  },

];

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
        <div>
          {masterArticleList.map((article, index) =>
            <Article title={article.title}
              content={article.content}
              source={article.source}
              date={article.date}
              key={index}/>
          )}
        </div>
        <Footer />
      </div>

    </div>

  );
}


export default Press;
