import React from 'react';

import Images from '../assets/Images';

export default function EventsPage() {
  return (
    <main>
      <article id='event-article-1'>
          <h1>Beyond the Classroom</h1>
          <p>Don't Miss a Beat with Our Events Page</p>
      </article>

      <article id='event-article-2'>
        <div id='event-data'>
          <div className='square-box'>
            <div>
              <h3>A talk on marketing.</h3>
            </div>
            <div id='details'>
              <span>3 March 2023</span><span>JIST</span>
            </div>
          </div>

          <div className='square-box'>
            <div>
              <h3>A talk on marketing.</h3>
            </div>
            <div id='details'>
              <span>3 March 2023</span><span>JIST</span>
            </div>
          </div>

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
