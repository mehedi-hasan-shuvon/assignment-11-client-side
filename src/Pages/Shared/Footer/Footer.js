import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ps-4">
                        <h6>About</h6>
                        <p className="text-justify">Eco-electronics-warehouse started with the motivation of becoming country's largest electronics product inventory where more then 20+ products are stocked for business and can easily delivered on time. Trustability is the main priority of Eco-electronics-warehouse</p>
                    </div>

                    <div className="col-xs-6 col-md-3 ps-4">
                        <h6>Our Top features</h6>
                        <ul className="footer-links">
                            <li>Vast inventory with large scale stock</li>
                            <li>Multi layer security with jWT token with firebase authentication</li>
                            <li>Can easily check your inventory and update</li>
                           
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3 ps-4">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">



                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>Developer About</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/login'></Link></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div className="container text-center">

                <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
                    Eco-Electronics Warehouse(Mehedi Hasan Shuvon)</p>


            </div>
        </footer>
    );
};

export default Footer;