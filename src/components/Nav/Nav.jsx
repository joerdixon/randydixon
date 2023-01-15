import React from 'react';

function Nav() {
    return (
        <nav id='nav' className='text-white'>
            <a id='nav-name' href="#hero">Randy Dixon</a>
            <div>
                <a className='nav-link' href="#about">About</a>
                <a className='nav-link' href="#classes">Classes</a>
                <a className='nav-link' href="#shows">Shows</a>
                <a className='nav-link' href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Nav;