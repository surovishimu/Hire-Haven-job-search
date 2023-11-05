
import SocialLogin from "./SocialLogin";
import Register from "./Register";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    
    const { signIn  } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn (email, password)

            .then(() => {
                toast.success(
                    "Loged in successfully",
                    {
                        duration: 6000,
                    }
                );
                navigate('/')

            })
            .catch(error => toast.error(error.message))
        }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-3xl text-center">Login to <span className="text-green-800 text-4xl">H</span>ire<span className="text-amber-500 text-4xl">H</span>aven</h3>
                <form onSubmit={handleLogin } className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 p-0">
                        <button type='submit' className="btn bg-primary text-white hover:btn-primary">Login</button>
                    </div>



                </form>
                <span className="flex justify-center items-center gap-2">Don't have an account?<button className="text-primary text-lg font-bold" onClick={() => {
                    const loginModal = document.getElementById('my_modal_3');
                    if (loginModal) {
                        loginModal.close(); // Close the login modal
                    }
                    const registerModal = document.getElementById('my_modal_2');
                    if (registerModal) {
                        registerModal.showModal(); // Open the register modal
                    }
                }}>
                    Create an account
                </button> </span>
                <Register></Register>
                <SocialLogin></SocialLogin>

            </div>
        </dialog>

    );
};

export default Login;