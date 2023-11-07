import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Myjobs = () => {
    const [myJob, setMyjob] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/categories?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyjob(data))
    }, [url])
    function isDeadlinePassed(deadline) {
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);

        return currentDate > deadlineDate;
    }
    return (
        <div className="mt-20 mb-20">
            {myJob.length > 0 ? <div className="overflow-x-auto">
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
                                <th className="">
                                    <Link>
                                        <button className="btn btn-ghost btn-xs normal-case bg-green-200 mr-2">Update Job</button></Link>
                                    <Link>
                                        <button className="btn btn-ghost btn-xs normal-case bg-red-200 ">Delete Job</button></Link>
                                </th>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div> :
                <h1 className="text-xl text-red-500 h-screen flex items-center justify-center">No job found</h1>}
        </div>
    );
};

export default Myjobs;