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

                        </div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Blog;