import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import logo from '../../../../public/image/logo.jpg'
import './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.displayName);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                // console.log(error);
            })
    }
    return (
        
        <div className=''>
            <div className="navbar bg-base-100 fixed top-0 z-50 w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-red-500 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                               
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    
                <Link to="/"><img src={logo} className='h-10 w-10' alt="logo" /></Link>
                </div>

                <div className="navbar-center md:flex hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        <li><Link to="/myToys">My Toys</Link></li>
                        <li><Link to="/addToy">Add Toy</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user &&
                        <div className='container'>
                            <div className="avatar online image">
                                <img className='w-10 h-10 rounded-full' src={user?.photoURL} />
                            </div>
                            <div className='dropdown'>
                                <a className='ankor'> {user?.email}</a>
                                <a className='ankor'>{user?.displayName}</a>

                            </div>
                        </div>}
                    {user ?
                        <Link onClick={handleLogOut} className='mx-2'> Logout</Link>
                        :
                        <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;