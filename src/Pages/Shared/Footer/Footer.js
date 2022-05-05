import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Recently graduated from Brac University in Computer Science Engineering (CSE) Department.I have worked as student tutor at Brac University in Data Structure and Algorithm Course for over 1 year. Currently I am a Trainee at BJET. Also learning MERN web Development from Programming Hero.My goal is to become a web developer.And for that i will work hard and efficiently to reach my goal. </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Highlighted Courses</h6>
                        <ul className="footer-links">
                            <li>Introduction with Python(OOP)</li>
                            <li>Intermediate Python(Data Structure)</li>
                            <li>Advance Python(Algorithms)</li>
                            <li>Javascript Course</li>
                            <li>SQL Database Course</li>
                            <li>Machine Learning Course</li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">



                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/login'></Link></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div className="container text-center">

                <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
                    Tutor Master(Mehedi Hasan)</p>


            </div>
        </footer>
    );
};

export default Footer;