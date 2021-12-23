import React from 'react'
import user from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-user.svg'
import mail from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-mail.svg'
import edit from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-edit.svg'
import facebook from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-facebook.svg'
import twitter from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-twitter.svg'
import linkedin from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-linkedin.svg'
import slack from '/Users/sohamkakra/Desktop/F28SD/Amber-company-website/src/assest/icon-slack.svg'

const Footer = ( ) =>  {
    return (
        <div class="footer">
            <div class="row">
                <h1 class="navbar-brand gradient-text" href="#" style={{marginTop: '10vw'}}>Amber</h1>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-6">
                    <div class="row mx-5 mt-5">
                        <p class="text1">Follow us</p>
                    </div>
                    <div class="row social-media mx-5">
                        <img class="icon" src={facebook} alt="facebook" />
                        <img class="icon" src={linkedin} alt="linkedin" />
                        <img class="icon" src={slack} alt="slack" />
                        <img class="icon" src={twitter} alt="twitter" />
                    </div>
                    <div class="row mx-5 mt-5">
                        <p class="text1">Information</p>
                    </div>
                    <div class="row mx-5 menu2">
                        <div class="row ">
                            <div class="col-4">About us</div>    
                            <div class="col-4">Feed</div>    
                            <div class="col-4">We are hiring!</div>    
                        </div>
                        <div class="row ">
                            <div class="col-4">Explore</div>    
                            <div class="col-4">Privacy Policy</div>    
                            <div class="col-4">Resources</div>    
                        </div>
                        <div class="row ">
                            <div class="col-4">Communities</div>    
                            <div class="col-4">Terms of Service</div>    
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-6">
                    <div class="row mx-5">
                        <p class="amber-email">info@amber.com</p>
                    </div>
                    <div class="row mx-5">
                        <p class="text1">Keep in touch</p>
                    </div>
                    <div class="row mx-5">
                        <div class="col-3 box">
                            
                            <input type={'text'} defaultValue={'Your Name'} />
                            <img class="user" src={user} alt="user" />
                            
                        </div>
                        <div class="col-4 offset-1 box">
                            <input type={'text'} defaultValue={'E-mail'} />
                            <img class="mail" src={mail} alt="mail" />
                        </div>
                    </div>
                    <div class="row mx-5 mt-4">
                        <div class="col-8 message-box">
                            <form>
                                <textarea class="message">Leave your message...</textarea>
                            </form>
                            {/* <img class="edit" src={edit} alt="edit" /> */}
                        </div>
                    </div>
                    <div class="row mx-5 mt-4">
                        <div class="col-4 offset-2">
                            <button class="sendbtn">Send</button>
                        </div>
                    </div>
                    <div class="row" style={{margin: '9%'}}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer