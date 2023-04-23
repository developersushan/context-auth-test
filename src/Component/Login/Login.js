import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {
    const { signInFrom,user ,resetPassword} = useContext(AuthContext)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    //send email reset password 
    const [reset,setResetPassword] = useState([])
    const handleLogin = event => {

        event.preventDefault();
        const from = event.target;
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)
        setSuccess(false)
        setError(false)
        signInFrom(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                navigate('/')
                from.reset()
            })
            .catch(error => {

                setError(true)

            })
    }

    const emailBlur =(event)=>{
        event.preventDefault()
        const email = event.target.value;
        setResetPassword(email)
        console.log(email)
    }
    const handleResetPassword =()=>{
        resetPassword(reset)
        .then(()=>{
            alert("password reset successfully sent !")
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        
                        {user?.email ? <h1 className="text-5xl font-bold">welcome {user.email}</h1> :<h1 className="text-5xl font-bold">Login now!</h1>}
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" onBlur={emailBlur} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />


                                {success && <p className='text-green-700'>successfully complete !</p>}
                                {error && <p className='text-red-700'>password didn't match ? please try again !</p>}
                                <label className="label">
                                    <Link onClick={handleResetPassword} className="label-text-alt link link-hover">Forget Password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {/* Divider-section */}
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;