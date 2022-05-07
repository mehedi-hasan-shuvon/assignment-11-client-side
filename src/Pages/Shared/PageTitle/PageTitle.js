import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Eco-Electronics Warehouse</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;