import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>
                    Hire Haven | Home
                </title>
            </Helmet>
            <div className="pt-28 bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 pb-10 ">
                <div className=" h-20 rounded-lg ">
                    <Marquee><h1 className="mt-5 text-3xl text-center py-4 text-purple-900 font-semibold ">Understanding Access Tokens, Refresh Tokens, Express.js, and Nest.js</h1></Marquee>
                </div>
                <div className="join join-vertical w-2/4 ml-[25%] mt-20 mb-36">
                    <div className="collapse collapse-arrow join-item border border-base-300 ">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What is an access token and refresh token? How do they work and where should we
                            store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p>An access token and a refresh token are crucial elements in modern authentication and authorization systems.</p>
                            <p><strong>Access Token:</strong> An access token is a short-lived credential that grants access to specific resources on a server. It is issued to a client after a user's successful authentication and authorization. Access tokens are used to make secure, authenticated requests to protected resources, such as APIs, on behalf of the user. They have a limited validity period to enhance security.</p>
                            <p><strong>Refresh Token:</strong> A refresh token is a long-lived credential issued alongside an access token. It is used to obtain a new access token when the current one expires. Refresh tokens are essential for maintaining a user's session without frequent re-authentication. They should be securely stored on the client-side and sent to the authorization server to request a new access token when needed.</p>
                            <p>Storing these tokens on the client-side requires security precautions. Access tokens are often stored in memory and used in API requests. Refresh tokens should be stored securely, with options like HTTP-only cookies, secure storage, or in-memory storage with additional safeguards, depending on your security requirements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What is Express.js and Nest.js?
                        </div>
                        <div className="collapse-content">
                            <p><strong>Express.js:</strong> Express.js, often referred to as Express, is a popular and minimalistic web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features and tools. Express.js is known for its flexibility, speed, and simplicity, making it a top choice for creating server-side applications in Node.js. It allows developers to handle routing, middleware, and request/response processing efficiently.</p>
                            <p><strong>Nest.js:</strong> Nest.js is a progressive and opinionated Node.js framework that builds on top of Express.js. It is designed to help developers create scalable and maintainable server-side applications. Nest.js follows the principles of Dependency Injection, and it provides a structured and organized architecture that encourages modularity and testability. With its built-in support for TypeScript, decorators, and modules, Nest.js simplifies the development of robust and enterprise-grade applications.</p>
                            <p>Both Express.js and Nest.js are valuable tools in the world of Node.js development, offering developers the flexibility to choose the framework that best suits their project's requirements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Explain your Code
                        </div>
                        <div className="collapse-content">
                            <p>The project code is a web application developed with React and Express for job searching and posting. It incorporates packages like Axios, Firebase, and React-to-PDF to create a secure, user-friendly experience. Users can register, search for jobs, post job openings, and manage their applications. Key features include user authentication, job listing, employer capabilities, and a user dashboard. The codebase ensures data privacy and security, delivering a seamless job search platform.</p>

                            <h1><strong>Frontend</strong></h1>
                            <p>The frontend of the project is built using React and leverages packages like React Router for routing and React-to-PDF for generating PDF summaries. It comprises various components and pages that enable user interaction, job posting, job search, and job application management. Code snippets illustrate how these components work together.</p>

                            <h1><strong>Backend</strong></h1>
                            <p>The server-side code is implemented with Express and serves as the backend for the application. It defines APIs and routes for user registration, login, job management, and more. The backend processes requests, interacts with the database, and sends responses to the frontend.</p>

                            <h1><strong>Authentication</strong></h1>
                            <p>User authentication is a crucial part of the project. Code examples demonstrate how users can register and log in securely. Authentication ensures that only registered users can access certain features like posting and managing jobs.</p>

                            <h1><strong>Database</strong></h1>
                            <p>The database structure is outlined, including the models used to store user data, job listings, and job applications. The code illustrates interactions with the database to retrieve and update information.</p>

                            <h1><strong>Job Posting</strong></h1>
                            <p>Code snippets showcase how users can post job openings. Employers can add job details, such as title, category, salary range, and application deadline. They can also update or delete job listings.</p>

                            <h1><strong>Job Search</strong></h1>
                            <p>The job search functionality is explained with code examples. Users can search for jobs based on keywords, and filtering options by job category. The code demonstrates how the frontend communicates with the backend to retrieve relevant job listings.</p>

                            <h1><strong>User Dashboard</strong></h1>
                            <p>Users have a dashboard where they can manage their posted jobs and view their job application history. The code reveals how users can update job details or delete job listings and applications.</p>

                            <h1><strong>Download Job History</strong></h1>
                            <p>Users can download a PDF summary of their job application history. Code snippets show how this feature works, allowing users to save their application details offline.</p>

                            <h1><strong>Blog Section</strong></h1>
                            <p>The project includes a blog section. The code snippets illustrate how to structure and manage blog content, including creating and displaying blog posts.</p>

                            <h1><strong>FAQs</strong></h1>
                            <p>FAQs are implemented with code examples for easy access to commonly asked questions.</p>

                            <p>This basic description provides an overview of your project code and its key components and features. Explore the code for a deeper understanding of how these elements are implemented.</p>

                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Blog;