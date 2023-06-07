import React, { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import './News.css'; // Import the CSS file for styling

const News = ({ title, content, expanded, onClick }) => {
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
      <div className="content-wrapper" style={{ height: `${height}px` }}>
        <div ref={contentRef}>
          <BlockContent blocks={content} /> {/* Render the block content using BlockContent */}
        </div>
      </div>
    </div>
  );
};

export default News;
