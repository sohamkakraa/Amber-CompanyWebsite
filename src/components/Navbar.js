import React from 'react'
import { Link } from 'react-router-dom';

// const activeBtn = window.location.href;
// if(activeBtn == "")
const NavBar = ( ) =>  {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="col-md-3 col-sm-12">
                <h1 class="navbar-brand gradient-text"><Link to='/'>Amber</Link></h1>
            </div>
            <div class="col-md-6 col-sm-12 menu justify-content-center">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <Link to='/' class='btn'>Home</Link>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <Link to='/description' class='btn'>Description</Link>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <Link to='/about-us' class='btn'>About Us</Link>
                    </div>
                    {/* <div class="col-md-3 col-sm-12">
                        <Link to='/contact-us' class='btn'>Contact Us</Link>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar
