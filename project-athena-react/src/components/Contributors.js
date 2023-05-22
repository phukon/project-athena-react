import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const projectId = "jbb9mv51";
const dataset = "production";

export default function Contributors() {
  const [renderData, setRenderData] = useState([]);

  const fetchFile = async () => {
    try {
      let QUERY = encodeURIComponent(`*[_type == "blog" && title == "riki-phukon"]{title, roles, college, description, "imageUrl": mainImage.asset->url}`);

      const response = await axios.get(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${QUERY}`);
      return response.data.result;
    } catch (error) {
      console.log('Error while calling the API ', error.message);
      return [];
    }
  };

  useEffect(() => {
    const getFiles = async () => {
      const returnedData = await fetchFile();

      const renderedItems = returnedData.map((item, index) => (
        <div key={index}>
          <div className='content-container'>
            <div id='content'>
              <h2>Riki Phukon</h2>
              <p>{item.roles}</p>
              <p>{item.college}</p>
            </div>
            <img src={item.imageUrl} alt='' class="small-image"></img>
          </div>
          <p>📝</p>
          <span>{item.description}</span>
        </div>
      ));

      setRenderData(renderedItems);
    };

    getFiles();
  }, []);

  return (
    <main>
      <article id='contributor-article-1'>
        <h1>Contributors</h1>
      </article>

      <article id='contributor-article-2'>
        <div className='contributor' >{renderData}</div>
      </article>
    </main>
  );
}
