import React, { useState, useEffect } from 'react';
import News from './News';
import { fetchEventPosts } from '../service/fetchEventPosts';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await fetchEventPosts();
        setNewsData(data);
      } catch (error) {
        console.log('Error while fetching news data:', error.message);
      }
    };

    fetchNewsData();
  }, []);

  const [expandedNewsIndex, setExpandedNewsIndex] = useState(null);

  const handleNewsClick = (index) => {
    setExpandedNewsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="news-page">
      {newsData.map((news, index) => (
        <News
          key={index}
          title={news.title}
          content={news.body}
          postedAt={news.postedAt}
          college={news.college}
          roles={news.roles}
          imageUrl={news.imageUrl}
          expanded={index === expandedNewsIndex}
          onClick={() => handleNewsClick(index)}
        />
      ))}
    </div>
  );
};

export default NewsPage;
