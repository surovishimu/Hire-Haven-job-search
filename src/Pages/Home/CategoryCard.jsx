import { FaUser, FaCalendar, FaClock, FaDollarSign, FaUsers, FaArrowRight, FaMapMarker } from 'react-icons/fa';

const CategoryCard = ({ categoryy }) => {
    const { _id, category, name, title,
        posted_date,
        deadline, salary_range,
        applicants } = categoryy;
    return (
        <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg p-4 shadow-lg px-5 pt-5">
            <div className="flex justify-between items-center gap-4 mb-5">

                <div className=" ">
                    <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                </div>
                <div className="">
                    <h3 className="text-sm bg-white w-28 text-center h-8  flex items-center justify-center rounded-xl font-semibold text-primary mx-auto ">{category}</h3>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-center">
                    <FaUser className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Posted by:</span> {name}</p>
                </div>
                <div className="flex items-center">
                    <FaCalendar className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Posting:</span> {posted_date}</p>
                </div>
                <div className="flex items-center">
                    <FaClock className="text-primary" />
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Deadline:</span>  <span className='text-red-500'>{deadline}</span></p>
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
                    <p className="text-gray-600 ml-2 font-semibold"><span className='font-bold'>Location: </span> London, UK</p>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full flex items-center ">
                    View Details <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;