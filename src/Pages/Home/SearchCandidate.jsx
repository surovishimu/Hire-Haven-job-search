

const SearchCandidate = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-around items-center px-10 mb-20">
            <div className="flex-1">
                <h1 className="text-4xl font-semibold mb-5">Getting Applied by an <br />
                    Expert Talent</h1>
                <p className="text-stone-500 mb-5 w-3/4">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.
                    Software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages</p>
                <button className="btn normal-case btn-primary">Search Canditate</button>
            </div>
            <div className="flex-1 relative">
                <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Findex-11%2Ftext%2Fimage-2.png&w=640&q=75" alt="" />
                <div className="card bg-base-200 w-56 h-64 lg:absolute md:absolute static -bottom-10  right-14 shadow-xl">
                <div className="bg-blue-700 rounded-t-xl mb-2"> <h1 className="mb-7 mt-2 text-center  text-white text-lg font-semibold">Applicants List</h1></div>
                <div className="flex items-center mb-2 ml-2 gap-2">
                    <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fapplicant-1.png&w=64&q=75" />
                    <div>
                        <h3>Brooklyn Simmons</h3>
                        <small>Web Developer</small>
                    </div>
                </div>
                <div className="flex items-center mb-2 ml-2 gap-2">
                    <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fapplicant-2.png&w=64&q=75" />
                    <div>
                        <h3>Courtney Henry</h3>
                        <small>Web Developer</small>
                    </div>
                </div>
                <div className="flex items-center ml-2 gap-2">
                    <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fapplicant-3.png&w=64&q=75" />
                    <div>
                        <h3>Marvin McKinney</h3>
                        <small>Web Developer</small>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default SearchCandidate;