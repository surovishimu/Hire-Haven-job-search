import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../../public/image/login1.png"
import { Helmet } from "react-helmet";

const LoginRout = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)

            .then(() => {
                toast.success(
                    "Loged in successfully",
                    {
                        duration: 6000,
                    }
                );
                navigate(location?.state ? location?.state : '/')

            })
            .catch(error => toast.error(error.message))

    }
    return (
        <>
            <Helmet>
                <title>
                    Hire Haven | Sign In
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-blue-400 pt-20 ">

                <div className="hero-content  ">

                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-10 md:ml-10 -ml-2">

                        <form onSubmit={handleLogin} className="card-body">
                            <h3 className="font-bold text-3xl text-center ">Login to <span className="text-blue-700 text-4xl">H</span>ireHaven</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name='password' placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    New here? <Link to="/register" className="label-text-alt link link-hover text-primary text-lg font-bold">Create an account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn bg-primary text-white hover:btn-primary">Login</button>
                            </div>



                        </form>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LoginRout;