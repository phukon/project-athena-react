import { useState} from 'react';
import { fetchFile } from '../service/api';

import Images from '../assets/Images';

export default function EventsPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [option0, setOption0] = useState('question_papers')
  const [option1, setOption1] = useState('etc')
  const [option2, setOption2] = useState('8')
  const [option3, setOption3] = useState('jist')
  const [showCollegeSelect, setShowCollegeSelect] = useState(false)
  const [renderData, setRenderData] = useState([]);

  const getFiles = async () => {
    setIsLoading(true)
    //const imageFile = await convertToBase64(file);
    const data = new FormData()
    // data.append('fileName', file.name);
    // data.append('file', file);
    data.append('typeOfDocument', option0);
    data.append('branch', option1);
    data.append('semester', option2); //  It's a string! Change type to int
    data.append('college', option3);

    const returnedData = await fetchFile(data);

    if (returnedData.length === 0) {
      setRenderData(<p>We are gathering the resources...</p>);
    } else {

      const renderedItems = returnedData.map((item, index) => (
        <div key={index}>
          <h3><a href= {item.pdfUrl} target="_blank" rel="noopener noreferrer">{item.name}</a></h3>
          <div id='dateAndUser'>
            <span>Date: 21e2</span>
            <span>by riki</span>
          </div>
          <p>{item.description}</p>
        </div>
      ))
      setRenderData(renderedItems);
    }   

    setIsLoading(false)
  }
  

  // const [file, setFile] = useState(null);


  const handleOption0 = (event)=> {
    setOption0(event.target.value)
    if(event.target.value === "notes") {
      setShowCollegeSelect(true)
    } else {
      setShowCollegeSelect(false)
    }
  }

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

            <div className="dropdown">
              <select id="typeOfDocument" value={option0} onChange={handleOption0}>
                <option disabled selected>Type</option>
                <option value="notes">Notes</option>
                <option value="question_papers">Question Papers</option>
              </select>
            </div>

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
            
            {showCollegeSelect && (
              <div className="dropdown">
                <select id="college" value={option3} onChange={handleOption3}>
                    <option disabled selected>College</option>
                    <option value="jist">JIST</option>
                    <option value="jec">JEC</option>
                    <option value="aec">AEC</option>
                    <option value="bbec">BBEC</option>
                    <option value="dec">DEC</option>
                    <option value="bvec">BVEC</option>
                    <option value="gimt">GIMT</option>
                    <option value="tu">TU</option>
                  </select>
              </div>
            )}

            
            {/* <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
            <button type="submit" className="form-button" id="typeValue">Let's Go!</button>
          </form>
        </div>       
        <div className='renderedData'>{isLoading ? <p>Loading...</p> : renderData}</div> 
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
