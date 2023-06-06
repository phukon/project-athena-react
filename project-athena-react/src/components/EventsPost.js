import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';

// the get request runs twice, solve it later

const EventsPost = () => {
  const projectId = 'jbb9mv51';
  const dataset = 'production';

  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [shouldResizeImage, setShouldResizeImage] = useState(false);

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

  useEffect(() => {
    const fetchFile = async () => {
      try {
        let QUERY = encodeURIComponent(
          `*[_type == "eventpost" && slug.current == "${id}"]{title, roles, slug, college, description, body, postedAt, "imageUrl": mainImage.asset->url}`
        );

        const response = await axios.get(
          `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${QUERY}`
        );
        return response.data.result[0]; // Retrieve the first result from the array
      } catch (error) {
        console.log('Error while calling the API:', error.message);
        return null;
      }
    };

    if (post === null) {
      fetchFile()
        .then((returnedData) => setPost(returnedData))
        .catch((error) => console.log('Error while calling the API:', error.message));
    }
  }, [id, post]);
    

  return (
    <main>
      {post && (
        <>
          <article id="event-article-1">
            <h1>{post.title}</h1>
            <div className="dateAndUser">
                <span>{post.postedAt}</span>
                <> </>
                <span>by Admin</span>
            </div>
          </article>

          <div id="event-post-article">
            <img src={`${post.imageUrl}${shouldResizeImage ? '?fit=fill&w=300&h=200' : ''}`} alt="" className="event-post-image"/>

            <div className="block-content-wrapper">
              <BlockContent blocks={post.body} className="custom-block-content" projectId={projectId} dataset={dataset} />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default EventsPost;
