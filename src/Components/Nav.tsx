import React from 'react';
import Logo from "../assets/logo-text.png"
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = () => {
    return (
        <nav className='border-b py-3' >
            <div className='grid grid-cols-3 items-center max-w-7xl mx-auto px-4 py-3' >
                <img src={Logo} alt="" className='w-28 justify-self-center' />

                <ul className='hidden md:flex items-center gap-4' >
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className='hidden md:flex items-center gap-2 justify-self-end' >
                    <button className="btn btn-soft">Sign In</button>
                    <button className="btn btn-secondary">Sign Up</button>
                </div>

                <button className='md:hidden justify-self-start text-2xl'><RxHamburgerMenu /></button>
            </div>

        </nav>
    );
};

export default Nav;