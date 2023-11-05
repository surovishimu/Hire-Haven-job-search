import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img className='w-2/4 ' src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt="" />
            </div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-shadow-2xl text-center">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to={"/"}> <button className="btn btn-outline mt-4 ">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;