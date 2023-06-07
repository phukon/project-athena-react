import React, { useState } from 'react';
import News from './News';

const NewsPage = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: 'News 1',
      content: 'Content for News 1...',
    },
    {
      id: 2,
      title: 'News 2',
      content: 'Content for News 2...',
    },
    // Add more news items as needed
  ];

  const [expandedNewsId, setExpandedNewsId] = useState(null);

  const handleNewsClick = (id) => {
    if (id === expandedNewsId) {
      setExpandedNewsId(null);
    } else {
      setExpandedNewsId(id);
    }
  };

  return (
    <div className="news-page">
      {newsData.map((news) => (
        <News
          key={news.id}
          title={news.title}
          content={news.content}
          expanded={news.id === expandedNewsId}
          onClick={() => handleNewsClick(news.id)}
        />
      ))}
    </div>
  );
};

export default NewsPage;
