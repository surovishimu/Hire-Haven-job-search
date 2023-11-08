import { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvide";
import { Helmet } from "react-helmet";


const AddAjob = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const person_name = form.person_name.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const postingDate = form.postingDate.value;
        const deadline = form.deadline ? form.deadline.value : null;
        const description = form.description.value;
        const applicants = parseInt(form.applicants.value);
        const skills = form.skills.value;
        const company_name = form.company_name.value;
        const location = form.location.value;
        const email = user.email;


        // console.log(image, title, name, category, salary, postingDate, description, skills, deadline);

        const myData = {
            logo: image,
            title,
            person_name,
            category,
            salary_range: salary,
            posted_date: postingDate,
            description,
            deadline,
            applicants,
            skills,
            company_name,
            location,
            email


        }

        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Job Posted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset()
            })
    };
    return (
      <div>
         <Helmet>
                <title>
                    Hire Haven | Add Job
                </title>
            </Helmet>
          <div className=" p-6 flex lg:flex-row md:flex-col flex-col justify-around items-center bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 ">
            <div className="">
                <img className="h-96" src="https://website-assets-fw.freshworks.com/attachments/cl02ejxkj02ugmjfnh0qs982y-freshteam-spot-illustration-how-to-post-a-job-on-linkedin-for-free.one-half.png" alt="" />
            </div>
            <div className="mx-auto mt-28 mb-10 p-5 bg-white rounded-lg shadow-2xl ">

                <form onSubmit={handleAddJob} className="">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 font-bold">
                                Banner Image
                            </label>
                            <input
                                required
                                type="text"
                                id="image"
                                name="image"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company_name" className="block text-gray-700 font-bold">
                                Company Name
                            </label>
                            <input
                                required
                                type="text"
                                id="company_name"
                                name="company_name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold">
                                Title
                            </label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold">
                                User Name
                            </label>
                            <input
                                defaultValue={user.displayName
                                }
                                type="text"
                                id="name"
                                name="person_name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-gray-700 font-bold">
                                Job Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            >
                                <option value="On Site Job">On Site Job</option>
                                <option value="Remote Job">Remote Job</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Hybrid">Hybrid</option>


                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold">
                                Salary range
                            </label>
                            <input
                                type="text"
                                id="type"
                                name="salary"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold">
                                Job Posting Date
                            </label>
                            <input
                                type="date"
                                id="postingDate"
                                name="postingDate"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="applicationDeadline" className="block text-gray-700 font-bold">
                                Application Deadline
                            </label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                id="applicationDeadline"
                                name="deadline"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="applicant" className="block text-gray-700 font-bold">
                                Job Applicants Number
                            </label>
                            <input
                                type="number"
                                id="applicant"
                                name="applicants"
                                defaultValue={0}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="skills" className="block text-gray-700 font-bold">
                                Skills
                            </label>
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 font-bold">
                                Location
                            </label>
                            <input
                                required
                                type="text"
                                id="location"
                                name="location"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="shortDescription" className="block text-gray-700 font-bold">
                                Job Description
                            </label>
                            <textarea
                                id="shortDescription"
                                name="description"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>

                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:purple-500   w-full outline-none text-lg"
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
};

export default AddAjob;