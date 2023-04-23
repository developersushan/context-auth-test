import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { FaGoogle,FaFacebookSquare,FaGithub} from "react-icons/fa";

const Registrar = () => {
    const { createUser,verify , providerGoogle ,providerFacebook , providerGithub} = useContext(AuthContext)
    const [password, setPassword] = useState([])
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const handleFrom = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        setPassword(false)
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return setPassword('please enter the upper case latter and  strong characters')
        }
        if (!/(?=.*[0-9])/.test(password)) {
            return setPassword('please enter the number password')
        }
       
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                verify()
                navigate('/')
                alert("please verification your email" )
                form.reset()
            })
            .catch(error => {
                setError(true)
            })
            

            
    }
    const handleGoogle =()=>{
        providerGoogle()
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    const handleFacebook =()=>{
        providerFacebook()
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>console.log(error))
    }

    const handleGithub =()=>{
        providerGithub()
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registrar now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleFrom} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                                {success ? <p className='text-green-700'>successfully complete</p> : <p className='text-red-700'>{password}</p>}
                                {error && <p className='text-yellow-500'>Already have an account</p>}
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registrar</button>
                            </div>
                            {/* Divider-section */}
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className="social-icon gap-2">
                                <button onClick={handleGoogle} className='me-2 text-2xl text-yellow-500'><FaGoogle></FaGoogle></button>
                                <button onClick={handleFacebook} className='me-2 text-2xl text-cyan-500'><FaFacebookSquare></FaFacebookSquare></button>
                                <button onClick={handleGithub} className='me-2 text-2xl'><FaGithub></FaGithub></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registrar;