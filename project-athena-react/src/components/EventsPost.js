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

  useEffect(() => {
    const fetchFile = async () => {
      try {
        let QUERY = encodeURIComponent(
          `*[_type == "eventpost" && slug.current == "${id}"]{title, roles, slug, college, body, "imageUrl": mainImage.asset->url}`
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
            <p>Subheading</p>
          </article>

          <article id="event-post-article">
            <img src="" alt="" className="event-post-image" />
            {post.body && <BlockContent blocks={post.body} projectId = {projectId} dataset ={dataset} />}
          </article>
        </>
      )}
    </main>
  );
};

export default EventsPost;
