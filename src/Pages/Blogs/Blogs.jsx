import React from 'react';
import { tabTitle } from '../../Title/Title';

const Blogs = () => {
    tabTitle ('Toy Store | Blog');
    return (
        <div className='my-20'>
            <div className='mt-10'>
                <h1 className='font-bold text-center'> What is an access token and refresh token?  How do they work and where should we store them on the client-side?</h1>
                <article>
                    A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources
                </article>
                <article> 1. Store it in local browser storage. <br />
                    2. Store it in a cookie in client side, it can be safer than local browser storage. <br />
                    3. Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.</article>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-center'> Compare SQL and NoSQL databases?</h1>
                <article>
                    1. SQL databases are relational, and NoSQL databases are non-relational. <br />
                    2. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </article>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-center'> What is express js? </h1>
                <article>
                Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and utilities that make it easier to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and template rendering. It is widely used in the Node.js ecosystem and is known for its simplicity and extensibility.
                </article>
                <h1 className='font-bold text-center mt-5'> What is express js? </h1>
                <article>
                Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                </article>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-center'> What is MongoDB aggregate and how does it work ? </h1>
                <article>
                In MongoDB, the aggregate framework is a powerful feature that allows you to perform complex data processing operations and transformations on collections of documents. It provides a way to perform advanced queries, perform data aggregation, and manipulate data within the database.
                </article>
                
            </div>
        </div>
    );
};

export default Blogs;