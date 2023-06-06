import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Images from '../assets/Images';
import {fetchEventPosts} from '../service/fetchEventPosts';

export default function EventsPage() {

  const [renderData, setRenderData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getFiles = async () => {
    const returnedData = await fetchEventPosts();

    if (returnedData.length === 0) {
      setRenderData(<p>We are gathering the resources...</p>);
    } else {
      const renderedItems = returnedData.map((item, index) => {
        // Resize the image URL
        const resizedImageUrl = `${item.imageUrl}?fit=fillmax&w=600&h=600`;

        return (
          <div className='square-box' key={index}>
            <Link to={`/events/${item.slug.current}`}>
              <h3>{item.title}</h3>
              <div id="dateAndUser">
                <span>{item.postedAt}</span>
                <span>by Admin</span>
              </div>
              <div className="imgDesc">
              <div className="imgContainer">
                <img src={resizedImageUrl} alt="" className="small-image" />
              </div>
              <div className="descriptionContainer">
                <p>{item.description}</p>
              </div>
             </div>
          </Link>
        </div>
        );
      });
      setRenderData(renderedItems);
    }   

    setIsLoading(false)
  }

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <main>
      <article id='event-article-1'>
          <h1>Beyond the Classroom</h1>
          <p>Don't Miss a Beat with Our Events Page</p>
      </article>

      <article id='event-article-2'>
        <div id='event-data'>
          
          {isLoading ? <p>Loading...</p> : renderData}

          <div className='square-box'>
            <div>
              <h3>A talk on marketing.</h3>
            </div>
            <div id='details'>
              <span>3 March 2023</span><span>JIST</span>
            </div>
          </div>

        </div>
      </article>

      <article className="article-6" id='event-article-4'>
          <img src={Images.elon5} alt=""/>
          <h1>Suit Up, Students</h1>
          <p>Upload Your Resources and Help Your Peers Reach New Heights of Academic Excellence</p>
          <button>Upload Now➡</button>
      </article>
    </main>
  )
}
