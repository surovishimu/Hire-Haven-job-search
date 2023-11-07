import Marquee from "react-fast-marquee";

const Blog = () => {
    return (
        <div className="pt-28 bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 pb-10 ">
            <div className=" h-20 rounded-lg ">
                <Marquee><h1 className="mt-5 text-3xl text-center py-4 text-purple-900 font-semibold ">Understanding Access Tokens, Refresh Tokens, Express.js, and Nest.js</h1></Marquee>
            </div>
            <div className="join join-vertical w-2/4 ml-[25%] mt-20 mb-36">
                <div className="collapse collapse-arrow join-item border border-base-300 ">
                    <input type="radio" name="my-accordion-4" checked="checked" />
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
        </div>
    );
};

export default Blog;