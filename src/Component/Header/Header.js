import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';



const Header = () => {
    const {user , logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogOut =()=>{
        logOut()
        .then(()=>{}).catch(error=>console.error(error))
    }
    return (
        <div className=" sticky top-0 z-50">
            <div className="navbar bg-primary text-primary-content justify-between">
                <div >
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/order' className="btn btn-ghost normal-case text-xl">Order</Link>
                <Link to='/registrar' className="btn btn-ghost normal-case text-xl">Registrar</Link>
                { user?.email ?
                    <button onClick={handleLogOut} className="btn btn-outline btn-secondary">LogOut</button>:
                    <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                    }
                </div>
                    <div>
                        
                    {user?.email && <span>welcome {user.email}</span>}
                    {user?.uid && <span className='me-2'>{user.displayName}</span>}
                {user?.uid && <img style={{width:"50px", borderRadius:"50%" }} src={user.photoURL} alt=""/>}
                    </div>
            </div>
        </div>
    );
};

export default Header;