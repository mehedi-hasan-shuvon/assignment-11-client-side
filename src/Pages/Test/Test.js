
import React from 'react';
import { Bar, BarChart, CartesianGrid, Label, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useService from '../../CustomHooks/useService';

const Test = () => {
    const [services, setServices] = useService();
    return (
        <div>

            <div className='w-75 mx-auto'>

                <div className='row chart-container'>

                    <div className='col-md-6 col-12 py-3'>
                        <h4>Our Product quantity vs Product price</h4>
                        <BarChart width={350} height={300} data={services} className="bar-chart">
                            <Legend verticalAlign="top" height={36} />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <Bar dataKey="quantity" fill="#8884d8" />
                            <Bar dataKey="price" fill="#82ca9d" />
                            <YAxis>
                            </YAxis>
                            <XAxis dataKey="name">
                                <Label value="Product Wise" offset={-4} position="insideBottom" />
                            </XAxis>
                            <Tooltip></Tooltip>
                        </BarChart>
                    </div>
                    <div className='col-md-6 col-12 py-3'>
                        <h4>Our product Quantity vs Product Supplier</h4>
                        <PieChart width={350} height={300}>

                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                            <Pie data={services} dataKey="quantity" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={services} dataKey="quantity" nameKey="supplierName" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#82ca9d" label />
                            <Tooltip></Tooltip>
                        </PieChart>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;