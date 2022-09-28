import React from 'react';
import logo from '../../logo.png'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav d-flex align-items-center gap-3 py-4'>
            <img src={logo} className="img-fluid" alt="" />
            <div>
                <h2 className='text-primary'>BEST-HEALTH-CLUB-AND-GYMS</h2>
            </div>
        </div>
    );
};

export default Nav;