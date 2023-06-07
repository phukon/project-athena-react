import React, { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'react-router-dom'
import './News.css'; // Import the CSS file for styling

const News = ({ title, content, expanded, onClick, postedAt, college, roles, imageUrl, slug }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(expanded ? getContentHeight() : 0);
  }, [expanded]);

  const getContentHeight = () => {
    return expanded ? contentRef.current.scrollHeight : 0;
  };

  const contentRef = React.createRef();

  return (
    <div className={`news-box ${expanded ? 'expanded' : ''}`} onClick={onClick}>
      <h2>{title}</h2>
      <div className="category-grid">
        <p className="posted-at">{postedAt}</p>
        <p className="posted-at">{college}</p>
        <p className="posted-at">by {roles}</p>  
        
      </div>
      <div className="content-wrapper" style={{ height: `${height}px` }}>
        <div ref={contentRef}>
          {imageUrl && <img src={imageUrl} alt="News Image" />}
          <BlockContent
            blocks={content}
            renderContainerOnSingleChild={true}
            className="block-content"
          />
          <Link to={`/events/${slug}`}><div>Read more</div></Link>
        </div>
        
      </div>
    </div>
  );
  
};

export default News;
