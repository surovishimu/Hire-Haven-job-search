import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
    const allJobs = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(allJobs); // Initialize with all jobs

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
        <div className="mt-20">
            <div className="bg-base-200 h-36 ">
                <h1 className="text-2xl font-semibold text-blue-500 text-center pt-5 mb-5">Search and Apply for Jobs</h1>
                <div className="search-container flex items-center justify-center">

                    <input
                        type="text"
                        placeholder="Search by Job Title"
                        onChange={(event) => setSearchQuery(event.target.value)}
                        value={searchQuery}
                        className="h-10 w-80 pl-4 outline-none"
                    />
                    <button className="bg-blue-400 h-10 w-20" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-10 mb-20">
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
                        {/* You can map your data and create table rows here */}
                        {filteredJobs.map((item) => (
                            <tr key={item.id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.logo} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.
                                                company_name}</div>
                                            <div className="text-sm opacity-50">{item.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-semibold">{item.title}</span>
                                    <br />
                                    <span className={`badge badge-ghost badge-sm ${isDeadlinePassed(item.deadline) ? 'text-red-500' : 'text-green-500'}`}>Deadline: {item.deadline}</span>
                                </td>
                                <td>{item.person_name}</td>
                                <td>
                                    {item.salary_range}
                                </td>
                                <th>
                                    <Link to={`/jobdetails/${item._id}`} >
                                        <button className="btn btn-ghost btn-xs normal-case bg-blue-200">View Details</button></Link>
                                </th>
                            </tr>
                        ))}
                        {/* End of data mapping */}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllJobs;
