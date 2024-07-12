import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold' style={{color:'black'}}>NOTHING TO SHOW Here YET</h1>
                <p className='text-center w-75 mb-5'></p>
                
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
               
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            
        </div>
    </div>
  )
}

export default Courses;