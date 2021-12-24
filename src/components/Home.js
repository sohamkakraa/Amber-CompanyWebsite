import React from 'react'
import EditingPage from '../assest/EditingPage.svg'
import Pen from '../assest/Pen.svg'
import WaterCan from '../assest/WaterCan.svg'

const Home = ( ) =>  {
    return (
        <div class="body">
            <div class="container homepage-body-part1">
                <div class="row">
                    <div class="col-sm-12 sol-md-12 col-lg-6" style={{textAlign: 'left'}}>
                        <div class="col-12 mt-5">
                            <h1 class="heading">Creating Art</h1>
                        </div>
                        <div class="col-12">
                            <h2 class="sub-heading">made simple.</h2>
                        </div>
                        <div class="col-12">
                            <button class="startbtn">Start Collaborating</button>
                        </div>
                    </div>
                    <div class="col-6 col-sm-12 sol-md-12 col-lg-6">            
                        <img class="artwork1" src={EditingPage} alt="Editing Page"></img>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <img class="artwork2 " src={Pen} alt="Pen"></img>
                </div>
            </div>

            <div class="container homepage-body-part2" style={{marginTop: '2vw'}}>
                <div class="col-12">
                    <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut neque quis cursus.</p>
                </div>
                <div class="col-12">
                    <button class="whybtn">Why Amber</button>
                </div>
            </div>

            <div class="container homepage-body-part3" style={{marginTop: '2vw'}}>
                <div class="row justify-content-start">
                    <div class="col-3">
                        <img class="artwork3" src={WaterCan} alt="Water Can"></img>
                    </div>
                    <div class="col-9" style={{ paddingTop: '20vw'}}>
                        <h1 class="sub-heading justify-content-center">Easy To Use</h1>
                        <p class="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut neque quis cursus. <br/> <br/>Class aptent taciti litora torquent per</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home