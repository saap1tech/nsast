import React, { useRef, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/video.mp4';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';



const AutoPlayVideo = ({ src }) => {
    const videoRef = useRef(null);
    const userInteracted = useRef(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    if (userInteracted.current) {
                        videoElement.play().catch(error => {
                            console.log('Play was prevented:', error);
                        });
                    }
                } else {
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.75
        });

        observer.observe(videoElement);

        const handleUserInteraction = () => {
            userInteracted.current = true;
            videoElement.playbackRate = 1.3; // Set the playback rate here after user interaction
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };

        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        return () => {
            observer.unobserve(videoElement);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, []);

    const handleEnded = () => {
        videoRef.current.play();
    };

    return (
        <video
            ref={videoRef}
            src={src}
            className='img-fluid'
            alt=""
            controls={false}  // Hide the toolbar
            onContextMenu={(e) => e.preventDefault()}  // Disable right-click context menu
            onEnded={handleEnded}  // Replay when video ends
        />
    );
};






const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Sebti Abdellah',
        description: 'GREAT Field'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Kerkache Yanis',
        description: 'Autonomous systems will revolutionize our understanding of the possible, turning the extraordinary into everyday reality.As pioneers in this exciting frontier, we will be the ones to shape the future of this field'

    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Ikram douifi',
        description: 'My experience in this school was from the greatest ones .it gonna teach you a lot of things but only if you want to see this opportunities and make it for your side ❤️'
    },
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>National School of Autonomous Systems Technology</h1>
                <p>One of the best training centers for engineers in Algeria. </p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                    <button type='button' class='somthingbutt btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 btn-custom'>Discover</button>


                    </Link>
                    <Link to="#">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact School</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>{new Date().getFullYear()} will be an exciting year</h2>
                        <p>Join Our School to Discover The Greatest Field in Algeria</p>
                        <Link to="/courses">
                        <button type='button' className='btn btn-lg mx-0 mx-sm-2 my-2 my-sm-0' style={{ backgroundColor: '#3572EF', borderColor: '#3572EF' }}>Learn More</button>

                        </Link>
                    
                    </div>
                    
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <div>
                            <AutoPlayVideo class='video' src={StartCoursesImg}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>some stuendts opinion</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5' style={{ backgroundColor: '#3572EF', borderColor: '#3572EF' }}>Read More</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;