import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

const Blog = () => {
    return (
       <>
        <Helmet>
                <title>
                    Hire Haven | Blog
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
                        <p>Access tokens enable clients to securely call protected web APIs. Web APIs use access tokens to perform authentication and authorization.An access token is a short-lived credential that grants a client  permission to access specific resources or services on a server. It's often used in OAuth 2.0 for authorization.</p> <br />
                        
                        A refresh token is a long-lived credential used to obtain a new access token when the old one expires. It helps maintain user sessions without requiring frequent login.Refresh tokens are more secure than access tokens and are typically stored on the client-side (e.g., in a secure cookie or storage mechanism) to enable seamless and secure user sessions without frequent login prompts. 
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default Blog;