import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us.jpg'

import ChooseSection from '../../components/ChooseSection/ChooseSection';



function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About NSAST</h1>
                <p className='text-center w-75 mb-5'></p>
                
            </div>
        </header>

        <div className='container my-5'>
            
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>The National Higher School of Autonomous Systems Technology in Algeria is one of the main sources of technical and technological education in the country. </p>
                <p>The school offers specialized educational programs that combine robotics, electronics, and programming, with a focus on artificial intelligence, to prepare students for the technological challenges of the modern age.</p>
                <p>Education System: 
                    The school adopts an advanced educational system consisting of two preparatory years of common trunk in science and technology, followed by three years of specialization in English, where students receive the necessary theoretical and practical teaching to develop their skills in the fields of robotics and electronics.</p>
                <p>Acceptance Rate: 
                    The school requires a high acceptance rate in mathematics and physics or the average obtained in the baccalaureate (16.52 or higher), with equal priority among the three scientific branches.</p>
                <p>Features and Privileges:

                   The university scholarship is 10,000 Algerian dinars per month.
                   Fully equipped university accommodation with individual rooms.
                   An advanced study environment that includes open study halls throughout the day and late into the night.
                   Full support from the Ministry of Scientific Research and Higher Education.
                   Diverse employment and training opportunities in space and technology fields.</p>
                <p>Future of the School:
                    It is expected that the acceptance rate will witness a significant increase in the future, reflecting the growing interest in technological education in Algeria and the increasing demand for specialized engineers.</p>
                    <br></br>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0' style={{ backgroundColor: '#3572EF', borderColor: '#3572EF'}}>Contact Us</button>
                    </Link>
                </div>
                

                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid rounded mb-4 mb-lg-0' style={{height: 400}} alt="school" />
                    
                </div>
                
                
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

       
    </div>
  )
}

export default About;