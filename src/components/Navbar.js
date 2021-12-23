import React from 'react'

const NavBar = ( ) =>  {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="col-md-3 col-sm-12">
                <h1 class="navbar-brand gradient-text" href="#">Amber</h1>
            </div>
            <div class="col-md-6 col-sm-12 menu">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <button class="button-selected">Home</button>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <button class="button">Explore</button>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <button class="button">About Us</button>
                    </div>
                    {/* <div class="col-md-3 col-sm-12">
                        <button class="button">Contact Us</button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar
