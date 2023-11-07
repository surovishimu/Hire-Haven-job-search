import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import Swal from "sweetalert2";


const ApplyModal = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const link = form.resume.value;

        const submitData = {
            name, email, link
        }
        const modal = document.getElementById('my_modal_5'); 

        // Close the modal
        if (modal) {
            modal.close();
        }
        fetch('http://localhost:5000/candidates', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Application Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset()
            })
    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box">
                    <h3 className="font-semibold text-3xl  text-center">Submit Your <span className="text-amber-500">Application</span></h3>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={user.displayName
                            } type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user.email} type="email" name='email' placeholder="Your Email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label htmlFor="resumeLink">Resume Link</label>
                            <input required type="text" name='resume' placeholder="Your Resume Link" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6 p-0">
                            <button type='submit' className="btn bg-primary text-white hover:btn-primary">Submit</button>
                        </div>



                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ApplyModal;