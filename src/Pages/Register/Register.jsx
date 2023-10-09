/* eslint-disable no-constant-condition */
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Register = () => {
    const [success,setSuccess] = useState('')
    const [registerError,setRegisterError] = useState('')
    const notify = () => toast("user created successfully!");
    
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('')
        setRegisterError('')
        if(!/^(?=.*[A-Z])(?=.*[\W_]).{7,}$/.test(password)){
            setRegisterError("password is not valid")
            return ; 
        }
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(notify())
        })
        .catch(error=>{
            console.log(error)
        })
       
        
    }
    return (
       <div>
             <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p>Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
        
        {
            registerError && <p className="text-red-600 text-center">{registerError}</p>
        }
        {
            success && <p>{success}</p>
        }
        <ToastContainer />
       </div>
    );
};

export default Register;