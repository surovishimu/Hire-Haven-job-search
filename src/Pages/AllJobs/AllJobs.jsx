import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import noJobimg from "../../../public/image/cancel.png";

const AllJobs = () => {
    const allJobs = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(allJobs);

    const handleSearch = () => {
        const filteredData = allJobs.filter((job) =>
            job.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredJobs(filteredData);
    };

    function isDeadlinePassed(deadline) {
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);
        return currentDate > deadlineDate;
    }

    return (
        <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400">
            <div className="h-36 pt-20">
                <h1 className="text-2xl font-semibold text-white text-center pt-5 mb-5">
                    Search and Apply for Jobs
                </h1>
                <div className="search-container flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search by Job Title"
                        onChange={(event) => setSearchQuery(event.target.value)}
                        value={searchQuery}
                        className="rounded-l-xl h-10 w-80 pl-4 outline-none"
                    />
                    <button
                        className="bg-purple-800 rounded-r-xl text-white h-10 w-20"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                {filteredJobs.length > 0 ? (
                    <table className="table mt-20 mb-20 max-w-screen-lg mx-auto">
                        <thead>
                            <tr className="">
                                <th>Company Name & Location</th>
                                <th>Title</th>
                                <th>Job Posted By</th>
                                <th>Salary Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.logo} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {item.company_name}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {item.location}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="font-semibold">
                                            {item.title}
                                        </span>
                                        <br />
                                        <span
                                            className={`badge badge-ghost lg:badge-sm lg:text-sm md:text-xs text-xs w-44 md:badge-lg badge-lg ${isDeadlinePassed(item.deadline)
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                                }`}
                                        >
                                            Deadline: {item.deadline}
                                        </span>
                                    </td>
                                    <td>{item.person_name}</td>
                                    <td>{item.salary_range}</td>
                                    <th>
                                        <Link to={`/jobdetails/${item._id}`}>
                                            <button className="btn btn-ghost lg:btn-xs md:btn-sm btn-md normal-case bg-purple-300">
                                                View Details
                                            </button>
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="text-xl text-white h-screen flex items-center justify-center">No job found</h1>
                        <img className="h-10" src={noJobimg} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllJobs;
