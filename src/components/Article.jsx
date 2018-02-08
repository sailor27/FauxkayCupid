import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {

  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div>
        <ul>
          <li>{props.source}</li>
          <li>{props.date}</li>
        </ul>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string
};


export default Article;
