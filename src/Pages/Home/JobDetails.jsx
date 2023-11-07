import { Link, useLoaderData } from "react-router-dom";
import { FaCalendar, FaDollarSign, FaMapMarker, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { VscOrganization } from 'react-icons/vsc';
import ApplyModal from "./ApplyModal";
import toast from "react-hot-toast";
import mikeimg from "../../../public/image/megaphone.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const { category, title, logo, description, skills, location, deadline, salary_range, company_name, person_name
    } = jobDetails;
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="mt-28 mb-10 bg-base-200 py-20 px-10 " >
                <div className="flex justify-center items-center">
                    <h1 className="text-center font-bold text-4xl mb-10 -mt-4 ">WE ARE <span className="text-amber-500 "> HIRING</span></h1>
                    <img className="h-24 mb-10" src={mikeimg} alt="" />
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col justify-between items-center px-10 ">
                    <div>
                        <img className="h-44 " src={logo} alt="" />
                    </div>
                    <div>
                        <h1><h3 className="text-2xl font-semibold mb-5">{title}</h3></h1>
                        <div className="flex lg:flex-row md:flex-wrap flex-wrap gap-5 items-center mb-5">
                            <div className="flex items-center">
                                <VscOrganization className="text-lg" />
                                <p className="text-gray-600 ml-2 font-semibold">{company_name}</p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarker className="text-lg" />
                                <p className="text-gray-600 ml-2 font-semibold">{location
                                }</p>
                            </div>
                            <div className="flex items-center">
                                <FaCalendar className="text-lg" />
                                <p className={`ml-2 font-semibold ${Date.now() > new Date(deadline).getTime() ? 'text-red-600' : 'text-green-600'}`}>
                                    {deadline}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaDollarSign className="text-lg" />
                                <p className="text-gray-600 ml-2 font-semibold">{salary_range}</p>
                            </div>


                        </div>
                        <div className="mb-5">
                            <h3 className="text-sm bg-white border-blue-400 border w-28 text-center h-8 rounded-xl font-semibold flex justify-center items-center ">{category}</h3>
                        </div>

                    </div>
                    <div>

                        <button
                            onClick={() => {
                                if (Date.now() > new Date(deadline).getTime()) {
                                    toast.error("Deadline for this job has passed. You cannot apply.");
                                } else if (user.displayName === person_name) {
                                    toast.error("You cannot apply for your own job.");
                                } else {
                                    document.getElementById('my_modal_5').showModal();
                                }
                            }}
                            className="btn btn-primary normal-case text-lg text-white w-40"
                        >
                            Apply For Job
                        </button>
                        <ApplyModal jobDetails={jobDetails}></ApplyModal>
                    </div>

                </div>
            </div>

            <div>
                <h1 className="text-4xl text-center font-semibold ">Job Description</h1>
                <p className="text-lg text-center mt-5 font-semibold w-2/5 mx-auto">
                    {description}
                </p>

            </div>

            <h1 className="text-xl font-semibold text-center mt-10 mb-10 bg-base-200 p-5 w-8/12 mx-auto">{skills}</h1>
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-5 mb-20">
                <p className="text-xl font-semibold">Share this job</p>
                <div className="flex lg:flex-row md:flex-row flex-col gap-5">
                    <Link to={"https://www.facebook.com/"}>
                        <button className="btn bg-[#0e3f7d] text-white text-lg normal-case hover:bg-[#0e3f7d]">
                            <FaFacebook className="social-icon" />Facebook
                        </button></Link>

                    <Link to={'https://www.twitter.com/'}>
                        <button className="btn bg-[#00acee] text-white text-lg normal-case hover:bg-[#00acee]">
                            <FaTwitter className="social-icon" />Twitter
                        </button></Link>

                    <Link to={'https://www.linkedin.com/'}>
                        <button className="btn bg-[#0072b1] text-white text-lg normal-case hover:bg-[#0072b1]">
                            <FaLinkedin className="social-icon" />LinkedIn
                        </button></Link>
                </div>
            </div>

        </>
    );
};

export default JobDetails;