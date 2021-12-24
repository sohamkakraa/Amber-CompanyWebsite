import React from 'react'
import Illustrations from '../assest/Illustrations.svg'
import ArtWork from '../assest/ArtWork3.svg'
import Profile from '../assest/media.png'
import TeamAPI from '../api.js'

const AboutUs = ( ) =>  {
    return (
        <div class="body">
            <div class="container body-part-1">
                <div class="row mt-5">
                <h1 class='heading2'>Combine &nbsp; <strong style={{color: '#D63031'}}>fine</strong> &nbsp; ideas</h1>
                </div>
                <div class="row">
                    <h2 class='sub-heading2'>To represent creativity</h2>
                </div>
                <div class="row mt-4">
                    <img src={Illustrations} alt='Illustrations' class='illustrations' />
                </div>
            </div>

            <div class="container body-part-2">
                <div class="row mt-5">
                    <div class="col-md-6">
                        <div class="row">
                            <h2 class="description" style={{fontSize: '5vw', fontWeight: '600'}}>Lorem ipsum dolor sit amet, elit.</h2>
                        </div>
                        <div class="row">
                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        {/* <img src={ArtWork} alt='Art work' class='artwork' /> */}
                    </div>
                </div>
            </div>

            <div class="container body-part-3">
                <div class="row mt-5">
                    <div class="row">
                        <h2 class="sub-heading2" style={{fontSize: '4vw', fontWeight: '600'}}>Meet Our Team</h2>
                    </div>
                    {
                        TeamAPI.all().map(m => (
                            <div class="col-lg-3 col-md-4 col-sm-6 mt-3" key={m.number}>
                                <div class="card">
                                    <img class="profile-picture" src={m.profilePic} alt="Profile Picture" />
                                    <h5 class="name mt-3">{m.name}</h5>
                                    <p class="role">{m.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div class="container body-part-4 mt-5">
                <div class="row mt-5">
                    <div class="row my-5">
                        <h2 class="sub-heading2" style={{fontSize: '2vw', fontWeight: 'bold'}}>WHY CHOOSE US</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs