import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tabTitle } from '../../Title/Title';

const Register = () => {
    tabTitle('Register');

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                // console.log(createdUser);
            })
            .catch((error) => {
                // console.log(error);
            })
    }

    const handleGoogleLogin =()=>{
        signInWithGoogle()
        .then((result)=>{
            navigate(from, { replace: true });
        })
        .catch((error)=>{
            // console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <button className="btn bg-gray-400 mt-5" onClick={handleGoogleLogin}>Login With Google</button>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" defaultValue="https://ibb.co/sbDZ2kk" placeholder="Photo URL" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </form>
                            <label className="label">
                                <span className="label-text-alt ">Already Have An Account? <Link to="/login" className='link'>Login</Link> </span>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;