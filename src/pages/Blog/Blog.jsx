import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Sebti Abdellah',
        description: 'PEACE WAS NEVER AN OPTION'
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
    {
        id: 3,
        img: [Blog3Img],
        title: 'Saidi Naila',
        description: 'this school is party and I’m the piñata.'
    },
    
    {
        id: 5,
        img: [Blog5Img],
        title: 'Maissa Bennaceur',
        description: 'My time at NSAST has been an epic saga with professors as dragons, assignments as quests, and exams as battles. They challenge us with cryptic riddles, and our `open space` is where we innovate using hardware and software skills, surrounded by algorithms and equations on whiteboards. NHSAS is like a thrilling RPG; navigating projects and facing challenges shapes us into stronger, wiser individuals.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Djelouah Hanane',
        description: 'This field is wonderful in our current era, and enjoyable if you love it. Stay motivated, prioritize your goals and أزدم .Study, work diligently, sleep well, eat your meals, and don`t forget to enjoy your life, because all our choices in life are meaningless if they don`t bring us joy. Enjoy the journey in this school future engineer !. And remember " No pain, no gain .PEACE WAS NEVER AN OPTION".'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Ilyas Bellaoui',
        description: 'In the high education to success you need to never stop asking question . the most groundbreaking advancements come from the word "why?" ,Do not settle for what is provided to you by education alone. Search and explore on your own.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Terguini Dhia eddin',
        description: 'it`s very interesting field that without any doubt u`ll fall in love with it by giving live to your creativity and ambitious.but u need to take on countability the overload of subject studied .as it as the rest of national schools that study ST in the prepatory cycle.the first year was pretty decent and under the expectation since the lack of organization but it will get better the next year (أن شاء الله)'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Khanouf iyad',
        description: 'Don`t raise the white flag except when Real Madrid wins'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Students Opinion</h1>
                <p className='text-center w-75 mb-5'></p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;