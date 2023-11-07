import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import { useEffect } from "react";
import { useState } from "react";
import noJobimg from "../../../public/image/cancel.png";


const AppliedJobs = () => {
    const [myJob, setMyjob] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/candidates?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMyjob(data);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                setLoading(false); // Set loading to false in case of an error
                console.error("Error fetching data:", error);
            });
    }, [url]);

    function isDeadlinePassed(deadline) {
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);

        return currentDate > deadlineDate;
    }



    return (
        <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 h-screen ">
            {loading ? (
                <div className="flex justify-center items-center gap-4">

                    <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center"></span>
                </div>
            ) : myJob.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table mt-36 mb-20 max-w-screen-lg mx-auto">
                        <thead>
                            <tr className="">
                                <th>Company Name & Location</th>
                                <th>Title</th>
                                <th>Job Category</th>
                                <th>Salary Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myJob.map((item) => (
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
                                            className={`badge badge-ghost   lg:badge-sm lg:text-sm md:text-xs text-xs w-44 md:badge-lg badge-lg  ${isDeadlinePassed(item.deadline) ? 'text-red-500' : 'text-green-500'
                                                }`}
                                        >
                                            Deadline: {item.deadline}
                                        </span>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.salary_range}</td>

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
        </div>
    );
};

export default AppliedJobs;
