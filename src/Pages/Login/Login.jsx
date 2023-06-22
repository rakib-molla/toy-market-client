import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tabTitle } from '../../Title/Title';

const Login = () => {
    tabTitle('Login');

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // console.log(error);
            })
    }

    const handleGoogleLogin =()=>{
        // console.log('google login click');
        signInWithGoogle()
        .then((result)=>{
            navigate(from, { replace: true });
            console.log(result.user);
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
                            <form onSubmit={handleLogin}>
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
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>

                                </div>
                            </form>
                            
                            <label className="label">
                                <span className="label-text-alt ">Don't Have Account? <Link to="/register" className='link'>Register</Link> </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;