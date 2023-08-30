import React from 'react';
import './App.css';
import laptop from './laptop.png'
import mobile from './mobile.png'
import brand from './brand.png'
import vid from './vid.mp4'

function VideoPlayer() {
  return (
    <div>
      <video  controls width={300} height={150}>
        <source src={vid} type="video/mp4" />
      </video>
      
    </div>
  );
}

function ImageComponent() {
  return (
    <div>
      <img className='laptop' src={laptop} alt=" Description" width='20'/>
    </div>
  );
}



function Image2Component() {
  return (
    <div>
      <img className='mobile' src={mobile} alt=" Description" width='20'/>
    </div>
  );
}

function Image3Component() {
  return (
    <div>
      <img className='brand' src={brand} alt=" Description" width='20'/>
    </div>
  );
}

function App() {
  

  return (
    <>
     <header>
        <h3 className="logo">𝑢𝑠𝑚𝑎𝑛</h3>
        <ul className="nav">
          <li>
            <a href="#"> Services</a>
          </li>
          <li>
            <a href="#"> Works</a>
          </li>
          <li>
            <a href="#"> Notes</a>
          </li>
          <li>
            <a href="#"> Experince</a>
          </li>
        </ul>
        <h4>+234 8166 280 639</h4>
      </header>

      <section className="section-one">
        <div className="sec-one">
          <div className="greeting-sec">
            <h1>Hey there, <span><br /> I'm Usman</span></h1>
          </div>
          <div className="what-sec">
            <h5>i design beatifully simple things, i love what i do.</h5>
          </div>
        </div>
        <div className="sec-email">
        <p>Usmanalfaki@gmail.com</p>
        </div>
      <div className="sec-two">
    <div className="sec-text">
    <p className="yr">10</p>
      <p className="Experience" > Years <span> <br /> Experience</span></p>
    </div>
    <div className="sec-vid">
    <VideoPlayer />
    </div>
      
      </div>
      </section>
       
       <section className='section-two'>
        <div className='design'>

          <div className='web-design'>
          <ImageComponent />
           <div className='web-details'>
           <p>web design </p>
            <p> 76 projects</p>
           </div>
          </div>


          <div className='app-design'>
          <Image2Component />
          <div className='app-details'>
           <p>mobile app design </p>
            <p> 63 projects</p>
          </div>
          </div>
          
          
          <div className='brand-design'>
          <Image3Component />
          <div className='brand-details'>
           <p>Brand Identity </p>
            <p> 47 projects</p>
          </div>
          </div>
        </div>



        <div className='help'>
          <div className='details-head'></div>
          <div className='details'></div>
          <div className='details-num'></div>
        </div>
       </section>
    </>
  )
}

export default App
