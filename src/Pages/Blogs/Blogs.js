import React from 'react';
import { Accordion } from 'react-bootstrap';
import question from '../../Images/question.png'
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <PageTitle title={"Blogs"}></PageTitle>
            <div className='container text-center p-3'>
                <img className='img-fluid question-img' src={question} alt="" />
            </div>
            <h2 className='text-center question-answer-header'>Question Answers:</h2>
            <div className='container mx-auto py-3 pt-1 pb-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between JavaScript and Node JS</Accordion.Header>
                        <Accordion.Body>
                            <p><span className='fw-bold'>JavaScript: </span> JavaScript is a programming language. It is running in any web browser with a proper browser engine.</p>
                            <p><span className='fw-bold'>Node JS: </span>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</p>
                            <p>There is clear difference between JavaScript and Node JS which are shown below:</p>
                            <ul>
                                <li>
                                    JavaScript Mainly using for any client-side activity for a web application.However, Node JS mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script.
                                </li>
                                <li>
                                    JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).On the other hand, Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.
                                </li>
                                <li>
                                    JavaScript is used for both frontend and backend development so that it may run on different devices..But,Node JS  used the JavaScript language to develop server-side applications.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> When should you use nodejs and when should you use mongodb ?</Accordion.Header>
                        <Accordion.Body>
                            <p>Nodejs is a Javascript engine that you can write any application you want with Javascript language.t is used to build servers that can respond to web requests.However,MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. </p>
                            <p>When should you use nodejs and when should you use mongodb is depended on developer's purpose and goal for the project.Though,Some of the reasons are given below:</p>
                            <ul>
                                <li>if developer want to write some kind of stand-alone program or server in Javascript, then you can use Node js for it</li>
                                <li>If the application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Differences between sql and nosql databases</Accordion.Header>
                        <Accordion.Body>
                            <p>SQL stands for Structured Query Language which enables a user to create,
                                modify and essentially interact with a database.On the Other hand,NoSQL databases (aka "not only SQL") are non-tabular databases.Some of the major differences are given below:</p>
                            <ul>
                                <li>SQL databases are relational databases.On the ohter hand, NoSQL databases are non-relational.</li>
                                <li>SQL databases are not suited for hierarchical data storage.While NoSQL databases are best suited for hierarchical data storage.</li>
                                <li>SQL database follows Follows ACID property while  NoSQL database follows CAP(consistency, availability, partition tolerance)</li>
                                <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            What is the purpose of jwt and how does it work ?</Accordion.Header>
                        <Accordion.Body>
                            <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.JWTs are used as a secure way to authenticate users and share information.With the help of JWT the server does not need to keep a database with the information needed to identify the user.The working process of JWT is given below:</p>
                            <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.Once decoded, you will get two JSON strings:</p>
                            <ul>
                                <li>The header and the payload.</li>
                                <li>The signature.</li>
                            </ul>
                            <p>The payload contains informations which are typically used by the server to verify that the user has permission to perform the action they are requesting.The signature ensures that the token hasn’t been altered.Therefore it can verify whatever the right user is trying to access particular data or not.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;