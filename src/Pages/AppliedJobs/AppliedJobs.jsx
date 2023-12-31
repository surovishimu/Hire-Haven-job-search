import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import { useState, useEffect } from "react";
import noJobimg from "../../../public/image/cancel.png";
import { useReactToPrint } from "react-to-print";
import { Helmet } from "react-helmet";
import axios from "axios";

const AppliedJobs = () => {
    const [myJob, setMyjob] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterCategory, setFilterCategory] = useState("");
    const { user } = useContext(AuthContext);
    const url = `https://job-service-server.vercel.app/candidates?email=${user?.email}`;
    const componentRef = useRef();

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyjob(res.data);
                setLoading(false);
            })
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setMyjob(data);
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         setLoading(false);
        //         console.error("Error fetching data:", error);
        //     });
    }, [url]);

    function isDeadlinePassed(deadline) {
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);
        return currentDate > deadlineDate;
    }

    const filteredJobs = myJob.filter((item) =>
        filterCategory === "" ? true : item.category === filterCategory

    );



    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <Helmet>
                <title>
                    Hire Haven | Applied Job
                </title>
            </Helmet>
            <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400">

                {loading ? (
                    <div className="flex justify-center items-center gap-4">
                        <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center"></span>
                    </div>
                ) : myJob.length > 0 ? (
                    <div className="overflow-x-auto" ref={componentRef}>
                        <div className="mb-4 text-end mr-10">
                            <div> <div className="mt-28 ">
                                <label className="text-white ">Filter by Job Category:</label>
                            </div>
                                <select
                                    className="select select-bordered bg-white text-black mt-5 outline-none"
                                    onChange={(e) => setFilterCategory(e.target.value)}
                                    value={filterCategory}
                                >
                                    <option value="">All</option>
                                    <option value="On Site Job">On Site Job</option>
                                    <option value="Remote Job">Remote Job</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Part Time">Part Time</option>
                                </select></div>
                        </div>
                        <div><h1 className="text-center text-2xl font-semibold -mt-5">Applications Dashboard</h1></div>
                        <table className="table mt-10 mb-20 ">
                            <thead>
                                <tr>
                                    <th>Company Name & Location</th>
                                    <th>Job Title</th>
                                    <th>Job Posted By</th>
                                    <th>Job Category</th>
                                    <th>Salary Range</th>
                                    <th>Applicant</th>
                                    <th>Description</th>
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
                                                    <div className="font-bold">{item.company_name}</div>
                                                    <div className="text-sm opacity-50">{item.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="font-semibold">{item.title}</span>
                                            <br />
                                            <span
                                                className={`badge badge-ghost lg:badge-sm lg:text-sm md:text-xs text-xs w-44 md:badge-lg badge-lg ${isDeadlinePassed(item.deadline) ? 'text-red-500' : 'text-green-500'
                                                    }`}
                                            >
                                                Deadline: {item.deadline}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="font-semibold">{item.
                                                person_name}</span>
                                            <br />
                                            <span>
                                                PostedDate:{item.
                                                    posted_date
                                                }
                                            </span>
                                        </td>
                                        <td>{item.category}</td>
                                        <td>{item.salary_range}</td>
                                        <td>{item.applicants}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="text-xl text-white h-screen flex items-center justify-center">No job found</h1>
                        <img className="h-10" src={noJobimg} alt="" />
                    </div>
                )}
                <div className="text-center mt-4">
                    <button
                        onClick={handlePrint}
                        className="btn mb-10 -mt-10  py-2 px-4 normal-case outline-none text-lg"
                    >
                        Download Summary (PDF)
                    </button>
                </div>
            </div></>
    );
};

export default AppliedJobs;
