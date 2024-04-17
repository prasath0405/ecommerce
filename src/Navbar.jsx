import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slide as Menu } from 'react-burger-menu'





export const Navbar = ({cart}) => {
    
    
  return (
    <div>

        
        

        
        <div className="navbar">
            <div className="logo">
                <img src={require('./images/logo.png')} alt="" />
            </div>
        <div className="mainnav">
        <Link to='/' className='link'>Home</Link>
        <Link to='/aboutus' className='link'>About</Link>
        <Link to='/spices' className='link'>Shop</Link>
        <Link to='/cart' className='link'>Cart 
        <div className='cartr'>
        {cart.length}
            
            </div></Link>
        

        </div>
        
    
        <Outlet/>
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="herosection">
            <div className="heroimage">
                <div className="herocontent">
                <h4>
                100% Healthy & Affordable
                Vegetables
                </h4>
                <h1>ORGANIC
                VEGETABLES</h1>
                <h6>WE EXPORT AUTHETIC SPICES FROM INDIA</h6>
                <button className='herobutton'>SHOP NOW</button>

                </div>
            
            </div>
        </div>
        <div className="sectionone">
            <div className="subsectionone">
                <div className="ladiss">
                    <h1>Green Vegetable</h1>
                    <h2>100% ORGANIC</h2>
                    <h5>Healthy Nutrition</h5>
                    <button>Shop Now</button> 
                


                </div>
                <div className="spencs">
                <h1>Fresh Herbs</h1>
                    <h2>SPINACH</h2>
                    <h5>Healthy Food</h5>
                    <button>Shop Now</button> 
               
                </div>
            </div>
        </div>
        <div className="aboutussection">
                    <div className="aboutheading">
                        <h3>Popular Foods And Vegetables</h3>
                        <h1>Quality Fruits & Vegetables </h1>
                    </div>
                    <div className="crispy">
                        <img src={require('./images/crispy.png')}  width="100%" height="100%" alt="" />
                    </div>
                    <div className="mainaboutus">
                        <div className="aboutimage">
                            <img src={require('./images/farm.png')}  alt="" />
                        </div>
                        <div className="abouttcontent">
                            
                            <h1>About company</h1>

                            <h3>Organic & Healthy Foods <br />
                         Provider Farming</h3>
                         <div className="vege">
                         <div >
                         <h4>Agriculture <br />
                        &Foods</h4></div>
                        <div>
                        <h4>Vegetable <br />
                        &Fruits</h4>
                        </div>
                        </div>
                        <hr />
     
                             <p>On the other hand we denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain.





                            </p>
                            
                         <div className="found">
                            <div>
                         <img src={require('./images/found.png')} alt="" />
                         </div>
                         <div>
                            <h1>Michael D. Foreman</h1>
                            <h3>CEO & Founder</h3>
                         </div>
                         </div>
                            <div className="aboutbutton">
                                <button type="button" className='aboutbuttonn'>KNOW MORE</button>
                            </div>
                            
                                
                            
                        </div>
                        
                    </div>
                </div>
                <br />
                <div className="sectionthree">
                <div className="freshfruitsheading">
                        <h1>OUR FRESH FRUITS</h1>
    
                    </div>
                    <div className="mainfreshfruits">
                        <div className="ff1">
                        <img src={require('./images/cali.png')} width="100%" height="100%" alt="" />

    
                        </div>
                        <div className="ff2">
                        <img src={require('./images/orange.png')} width="100%" height="100%" alt="" />
    
                        </div>
                        
                    </div>
                    <div className="knowmorebutton">
                        <button type="button">KNOW MORE</button>
                    </div>
                </div>
                <br />


                <div className="sectionfour">
                <div className="spicesheading">
                        <h1>OUR SPICES COLLECTIONS</h1>
    
                    </div>
                    <div className="mainspices">
                        <div className="s1">
                        <img src={require('./images/brocolli.png')}  width="100%" height="100%" alt="" />

    
                        </div>
                        <div className="s2">
                        <img src={require('./images/carrt.png')}  width="100%" height="100%" alt="" />
    
                        </div>
                        <div className="s3">
                        <img src={require('./images/Group 18.png')} width="100%" height="100%"  alt="" />

    
                        </div>
                       
                    </div>
                    <div className="knowmorebutton">
                        <button type="button">KNOW MORE</button>
                    </div>
                </div>

                <br />




                <div className="blogsection">
                    <div className="blogheading">
                        <h1>OUR LATEST PRODUCT</h1>
                    </div>
                    
                    <div className="special">
                   <img src={require('./images/special deals.png')} width="100%" height="100%" alt="" />
               
                  </div>    
                                              
                    
                </div>
                
                <div className="brand">

                    <div className="">
                        <img src={require('./images/risk.png')} alt="" />
                    </div>
                    <div className="">
                        <img src={require('./images/rice.png')} alt="" />
                    </div>
                    <div className="">
                        <img src={require('./images/bran.png')} alt="" />
                    </div>
                    <div className="">
                        <img src={require('./images/shopri.png')} alt="" />
                    </div>

                </div>




                <div className="newssection">
                    <h1>SUBSCRIBE TO OUR NEWSLETTERS</h1>
                    <p>GET THE LATEST NEWS ABOUT OUR PRODUCTS AND DISCOUNTS!</p>
                    <div className="emails">
                        <input type="email" placeholder="ENTER YOUR EMAIL" className='emailinput'/>
                        <button type="submit">SUBSCRIBE</button>

                    </div>

                    

                </div>
            
                
                <div className="sectionseven">
                <div className="footermainsection">
                <div className="footer">
                    <div className="mainfooters">
                        <div className="mainfoot">
                            <div className="mainfoots1">
                                <div className="logo">
                                <img src={require('./images/company.png')} alt="" />
                                <p>It is important to pursue a course of study, but at the same time it takes time to work and suffer a great deal. who himself suspended his pregnancy.</p>
                                <h4>Download our app</h4>

                                 
                                </div>
                                <div className="footertopic1">
                                    <p>Home</p>
                                    <p>About Us</p>
                                    <p>Shop</p>
                                    <p>Meet Farmers</p>
                                    <p>Latest News</p>
                                    <p>Vegetables</p>
                                </div>
                                <div className="footertopic2">
                                    <p>Documentation</p>
                                    <p>Elements </p>
                                    <p>Best Products</p>
                                    <p>Technology</p>
                                    <p>Contact Us</p>
                                    <p>Setting & Privacy</p>
                                </div>
                                <div className="footertopic3">
                                    <h5>OPENING TIME</h5>
                                    <p>Mon - Fri: 8AM-10PM</p>
                                    <p>Sat: 9AM-8PM</p>
                                    <p>Suns: 14hPM-18hPM</p>
                                    <p>Mon - Fri: 8AM-10PM</p>
                                    <p>Work All The Holidays</p>
                                </div>
                                <div className="footertopic4">
                                    <h5>CONTACT US</h5>
                                    <p>53 Main Street, 2nd</p>
                                    <p>Mountain New York.,</p>
                                    <p>+012 (345) 678 99</p>
                                    <p>support@gmail.com</p>
                                    <button>Download our app</button>
                                </div>
                            </div>
                            <hr/>
                            <div className="bottom">
                                <div className="socialicon">
                                    <img src={require('./images/SOCIAL ICONS (4).png')} alt="" />
                                    {/* <img src="./images/SOCIAL ICONS (1).png" alt=""> */}
                                </div>
                            </div>
                        </div>
                        <div className="copy">
                             <hr />
                             <p>Copyright © 2023 Hariprasath. All Rights Reserved.</p>
                        </div>

                    </div>
                </div>
            </div>
            
                </div>
           
    </div>
  )
}
