import SocialLogin from "./SocialLogin";



const Register = () => {
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form method="dialog">

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-3xl text-center">Create a Free <span className="text-green-800 text-4xl">H</span>ire<span className="text-amber-500 text-4xl">H</span>aven Account</h3>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6 p-0">
                    <button type='submit' className="btn bg-primary text-white hover:btn-primary">Login</button>
                    </div>


                </form>
                <span className="flex justify-center items-center gap-2">
                    Already have an account?{' '}
                    <button className="text-primary text-lg font-bold"
                        onClick={() => {
                            const loginModal = document.getElementById('my_modal_2');
                            const registerModal = document.getElementById('my_modal_3');
                            if (loginModal && registerModal) {
                                loginModal.close(); // Close the register modal
                                registerModal.showModal(); // Open the login modal
                            }
                        }}
                    >
                        LogIn
                    </button>
                </span>
                <SocialLogin></SocialLogin>

            </div>
        </dialog>

    );
};

export default Register;