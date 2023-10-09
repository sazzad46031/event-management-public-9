import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('')
    const notify = () => toast("user logged in successfully!");
    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('')
        setRegisterError('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(notify())
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New to this website please <Link className="text-blue-600" to="/register">Register</Link></p>
                    {
                        registerError && <p className="text-red-600 text-center">{registerError}</p>
                    }
                    {
                        success && <p>{success}</p>
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;