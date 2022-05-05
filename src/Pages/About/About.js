import React from 'react';
import './About.css';
import me from '../../Images/me.png'
const About = () => {
    return (
        <div className='container bg'>
            <h1 className='text-center p-2 about-header'>About Me:</h1>
            <div className='text-center py-3'>
                <img className='my-photo' src={me} alt="" />
            </div>
            <div className="typewriter">
                <h1>Mehedi Hasan Shuvon</h1>
            </div>
            <h2 className='text-center'>Recently graduated from Brac University in Computer Science Engineering (CSE) Department.I have worked as student tutor at Brac University in Data Structure and Algorithm Course for over 1 year. Currently I am a Trainee at BJET. Also learning MERN web Development from Programming Hero.My goal is to become a web developer.And for that i will work hard and efficiently to reach my goal. </h2>

        </div>
    );
};

export default About;