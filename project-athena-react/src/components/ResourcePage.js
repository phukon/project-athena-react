import { useState} from 'react';
import { uploadFile } from '../service/api';

import Images from '../assets/Images';

export default function EventsPage() {

  const getFiles = async () => {
    //const imageFile = await convertToBase64(file);
    const data = new FormData()
    data.append('fileName', file.name);
    data.append('file', file);
    data.append('branch', option1);
    data.append('semester', option2); //  It's a string! Change type to int
    data.append('college', option3);

    await uploadFile(data);
  }
  
  const [option1, setOption1] = useState('branch')
  const [option2, setOption2] = useState('semester')
  const [option3, setOption3] = useState('college')

  const [file, setFile] = useState(null);

  const handleOption1 = (event)=> {
    setOption1(event.target.value)
  }

  const handleOption2 = (event)=> {
    setOption2(event.target.value)
  }

  const handleOption3 = (event)=> {
    setOption3(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getFiles()
  }


  // function convertToBase64(image){
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(image);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     }
  //   })
  // }


  return (
    <main>
      <article id='resource-article-1'>
          <h1>No More Scavenger Hunt</h1>
          <p>Find Everything You Need in One Place</p>
      </article>

      <article id='resource-article-2'>
        <div className="dropdown-container">
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="dropdown">
              <select id="branch" value={option1} onChange={handleOption1}>
                <option disabled selected>Branch</option>
                <option value="etc">ETC</option>
                <option value="mech">Mech</option>
                <option value="civil">Civil</option>
                <option value="pei">PEI</option>
              </select>
            </div>
            
            <div className="dropdown">
              <select id="semester" value={option2} onChange={handleOption2}>
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
            
            <div className="dropdown">
              <select id="college" value={option3} onChange={handleOption3}>
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
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit" className="form-button" id="typeValue">Let's Go!</button>
          </form>
          
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
