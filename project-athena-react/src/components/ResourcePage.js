import React from 'react';
import '../Events.css'
import Images from '../assets/Images';

export default function EventsPage() {
  return (
    <main>
      <article id='resource-article-1'>
          <h1>No More Scavenger Hunt</h1>
          <p>Find Everything You Need in One Place</p>
      </article>

      <article id='resource-article-2'>
        <div class="dropdown-container">
          <div class="dropdown">
            <select id="branch">
              <option disabled selected>Branch</option>
              <option value="etc">ETC</option>
              <option value="mech">Mech</option>
              <option value="civil">Civil</option>
              <option value="pei">PEI</option>
            </select>
          </div>
          
          <div class="dropdown">
            <select id="semester">
              <option disabled selected>Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          
          <div class="dropdown">
            <select id="college">
                <option disabled selected>College</option>
                <option value="1">JIST</option>
                <option value="2">JEC</option>
                <option value="3">AEC</option>
                <option value="4">BBEC</option>
                <option value="5">DEC</option>
                <option value="6">BVEC</option>
                <option value="7">GIMT</option>
                <option value="8">TU</option>
              </select>
          </div>
          
          <button class="form-button" id="typeValue">Let's Go!</button>
        </div>        
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
