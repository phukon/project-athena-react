import React, { useState, useEffect } from 'react';
import News from './News';
import { fetchEventPosts } from '../service/fetchEventPosts';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [shouldResizeImage, setShouldResizeImage] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setShouldResizeImage(window.innerWidth < 540);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

          imageUrl={`${news.imageUrl}${shouldResizeImage ? '?fit=fill&w=300&h=200' : '?auto=format&w=500&h=400'}`} // to reduce load time and save bandwidth
          expanded={index === expandedNewsIndex}
          onClick={() => handleNewsClick(index)}
        />
      ))}
    </div>
  );
};

export default NewsPage;
