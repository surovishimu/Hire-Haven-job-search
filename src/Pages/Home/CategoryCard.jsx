import { useContext } from 'react';
import { FaUser, FaCalendar, FaClock, FaDollarSign, FaUsers, FaArrowRight, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvide';
import toast from 'react-hot-toast';

const CategoryCard = ({ categoryy }) => {
    const { _id,
        category,
        person_name,
        location,
        title,
        posted_date,
        deadline,
        salary_range,
        applicants,
    } = categoryy;

    const { user } = useContext(AuthContext)
    const handleViewDetails = () => {
        if (!user) {

            toast("Please log in to view details", {
                icon: '🔒',
                style: {
                    backgroundColor: 'red',
                    color: 'white',
                },
            });
        }
    };
    return (
        <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg p-4 shadow-lg px-5 pt-5">
            <div className="flex justify-between items-center gap-4 mb-5">

                <div className=" ">
                    <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                </div>
                {/* <div>
                    <img className='h-16 rounded-full' src={logo} alt="" />
                </div> */}
                <div className="">
                    <h3 className="text-sm bg-white w-28 text-center h-8  flex items-center justify-center rounded-xl font-semibold text-primary mx-auto ">{category}</h3>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-center">
                    <FaUser className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Posted by:</span> {
                        person_name
                    }</p>
                </div>
                <div className="flex items-center">
                    <FaClock className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Posting:</span> {posted_date}</p>
                </div>
                <div className="flex items-center">
                    <FaCalendar className="text-primary" />
                    <p className={`text-gray-600 ml-2 font-semibold ${Date.now() > new Date(deadline).getTime() ? 'text-red-600' : 'text-green-600'}`}>
                        <span className='font-bold'>Deadline:</span> <span className={Date.now() > new Date(deadline).getTime() ? 'text-red-500' : 'text-green-500'}>
                            {deadline}
                        </span>
                    </p>
                </div>
                <div className="flex items-center">
                    <FaDollarSign className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Salary:</span> {salary_range}</p>
                </div>
                <div className="flex items-center">
                    <FaUsers className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'> Applicants:</span> {applicants}</p>
                </div>
                <div className="flex items-center">
                    <FaMapMarker className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Location: </span> {location
                    }</p>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <Link to={`/jobdetails/${_id}`}>
                    <button onClick={handleViewDetails} className="mt-4 px-4 py-2 bg-primary text-white rounded-full flex items-center ">
                        View Details <FaArrowRight className="ml-2" />
                    </button></Link>
            </div>
        </div>
    );
};

export default CategoryCard;