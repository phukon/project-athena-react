import React from 'react';
import '../Events.css'
import Images from '../assets/Images';

export default function EventsPage() {
  return (
    <main>
      <article id='community-article-1'>
          <h1>Collaborate to Innvoate</h1>
          <p>Find Partners and Resources to Take your Research to the Next Level</p>
      </article>

      <article id='community-article-2'>
        <h1>Connect with Your Institute Community Soon!</h1>
        <p>A Hub for All Your Institute Needs - Get Ready to Collaborate!</p>
      </article>

      <article class="article-6" id='event-article-4'>
          <img src={Images.elon5} alt=""/>
          <h1>Suit Up, Students</h1>
          <p>Upload Your Resources and Help Your Peers Reach New Heights of Academic Excellence</p>
          <button>Upload Now➡</button>
      </article>
    </main>
  )
}
