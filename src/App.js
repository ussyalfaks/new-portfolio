import React from 'react';
import './App.css';
import laptop from './laptop.png'
import delitech from './Delitech.png'
import mobile from './mobile.png'
import brand from './brand.png'
// import vid from './vid.mp4'

// function VideoPlayer() {
//   return (
//     <div>
//       <video  controls width={300} height={150}>
//         <source src={vid} type="video/mp4" />
//       </video>
      
//     </div>
//   );
// }

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

function Delitech() {
  return (
    <div>
      <img className='delitech' src={delitech} alt=" Description" width='200'/>
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
    <Delitech />
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
          <div className='details-head'>
            <h1>what do i help?</h1>
          </div>
          <div className='details'>
            <p>I will help you with finding a solution and solve
              any problem that may arise in your project. I can also provide you with the best possible solutions for any kind of web or mobile application.
            </p>
            <p>We use process design to create digital product
              that is user friendly, easy to navigate. We also make sure that the website or mobile application works on all devices.
            </p>
          </div>
          <div className='details-num'>
            <div className='num1'>
              <p>256+</p>
              <p>Project Completed</p>
            </div>

            <div className='num2'>
              <p>176+</p>
              <p>Happy Clients</p>
            </div>

          </div>
        </div>
       </section>

       <section className='section-iii'>
       <h1>My work experience </h1>
        <container className='sec-iii'>
          <div className='employ-sec'>
           
            <div className='employ-1'>
            <p>Self employed,kaduna</p>
            <p>Aug-2021 Sep-2023</p>
            </div>

            <div className='employ-2'>
            <p>Self employed,kaduna</p>
            <p>Aug-2021 Sep-2023</p>
            </div>


            <div className='employ-3'>
            <p>Self employed,kaduna</p>
            <p>Aug-2021 Sep-2023</p>
            </div>

          </div>


          <div className='skills-sec'>
          <div className='skills-1'>
            <p>Web Developer</p>
            <p>A web developer specializes in creating and maintaining websites and web applications. Their primary focus is on the online platform, which includes websites, web-based games, and various internet applications. Web developers are responsible for implementing the visual and functional aspects of websites, ensuring that they are user-friendly, responsive, and perform well on various devices and browsers.</p>
            </div>


            <div className='skills-2'>
            <p>UI/UX Designer</p>
            <p>User interface designs or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances and mobile devices</p>
            </div>


            <div className='skills-3'>
            <p>Mobile App Developer</p>
            <p>A mobile app developer specializes in creating and maintaining applications for mobile devices, such as smartphones and tablets. Their primary focus is on developing software solutions that run on mobile operating systems like Android and iOS. Mobile app developers are responsible for designing, coding, testing, and optimizing applications to deliver a seamless user experience on various mobile devices</p>
            </div>
          </div>
        </container>
       </section>
    </>
  )
}


export default App
