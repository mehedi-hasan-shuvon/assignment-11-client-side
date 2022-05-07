import React from 'react';
import Ratings from '../../Ratings/Ratings';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Test from '../../Test/Test';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className='home-banner'>
            <PageTitle title={"Home"}></PageTitle>
            <div className='row justify-content-center align-items-center home-banner-row'>
                <div className='col-md-6 text-center'>
                    <h1 className='welcome pt-4'>Welcome to <span className='eco-electronics'>Eco-Electronics Warehouse</span></h1>
                    <h4>Largest warehouse<span className='eco-electronics'> for electronics products</span></h4>
                    <div className='px-5 py-3'>
                        <p className='px-5'>A electronics warehouse with a vast product collection with sound quantity for profitable business.You can stock,update and clear products with any quantity whenever you want!!!</p>
                    </div>

                </div>
                <div className='col-md-6 mx-auto py-4 px-5'>
                    <Banner></Banner>
                </div>
            </div>
            <div className='container text-center'>
                <Services></Services>
            </div>

            <div  className='py-3 chart-class'>
                <h1 className='text-center  section-header'>Our Inventory Comparisons</h1>
                <Test></Test>
            </div>
            <div className='py-3'>
                <h1 className='text-center  section-header'>Our Service Ratings</h1>
                <Ratings></Ratings>
            </div>


        </div>
    );
};

export default Home;