import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Ratings.css';
const Ratings = () => {
    return (
        <div id='Comparisons' className='w-75 mx-auto'>
            <div className='row'>
                <div className='col-md-6 py-2'>
                    <h2 className='py-2'>Service Details</h2>
                    <p>Eco-Electronics-Warehouse has the far-most reputation for over 10years of product inventory and delivery with 85% customer satisfaction and unbelievable 99% On-Time delivery record.Our support works 24/7 for any needs.</p>
                </div>
                <div className='col-md-6  py-2'>
                    <h2 className='py-2'>Progress Bar</h2>
                    <ProgressBar className='my-2' variant="success" animated now={85} label="Supplier Satisfaction 85%" />
                    <ProgressBar className='my-2' variant="warning" animated now={97} label="Support Quality 97%" />
                    <ProgressBar className='my-2' variant="danger" animated now={92} label="Cost Efficiency 92%" />
                    <ProgressBar className='my-2' variant="info" animated now={99} label="On-Time Delivery 99%" />

                </div>

            </div>
        </div>
    );
};

export default Ratings;