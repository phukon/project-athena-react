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
  }

  useEffect(() => {
    const getFiles = async () => {
      const returnedData = await fetchFile();

      const renderedItems = returnedData.map((item, index) => {
        const resizedImageUrl = `${item.imageUrl}?fit=fillmax&w=190&h=190`;

        return (
          <div className='contributor' key={index}>
              <h3>Hello!</h3>
              <div id="dateAndUser">
                <span>{item.postedAt}</span>
                <span>Riki Phukon, 17 June 2023</span>
              </div>
              <div className="imgDesc">
              <div className="imgContainer">
                <img src={resizedImageUrl} alt="" className="small-image" />
              </div>
              <div className="descriptionContainer">
                <p>{item.description}</p>
              </div>
             </div>
        </div>
        );
      });

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
        {renderData}
      </article>
    </main>
  );
}
