import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './About.css'

export const About = () => {
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
        <Link to='/cart' className='link'>Cart</Link>
        </div>
        <Outlet></Outlet>
    
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="herosection">
            <div className="mainhero">
                <div className="herosimg">
                    <div className="herocontent">
                      <h1>ABOUT US</h1>
                        <h5>HOME {'>'} ABOUT US</h5>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="aboutsectionone">
        <div className="aboutussection">
                <div className="aboutheading">
                    <h1>KNOW ABOUT US!</h1>
                </div>
                <div className="mainaboutus">
                    <div className="aboutimage">
                       <img src={require('./images/hero section.png')} alt="" /> 

                     
                    </div>
                    
                        <div className="aboutimage1">
                           
                        </div>
                        
                        
                            
                        
                    </div>
                    
                </div>
            </div>
        

        <div className="sectionfive">
                <div className="blogsection">
                    <div className="blogheading">
                        <h1>OUR LATEST BLOGS</h1>
                    </div>
                    <div className="blogmainsection">
                        <div className="blog1">
                            <div className="blog1img">
                                <img src={require('./images/veget.png')} alt="" />
                                
                            </div>
                            <div className="blog1content">
                                <h3>
                                    VEGETABLE
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                   

                                   
    
                                </div>
                                 
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/farmi.png')} alt="" />


                               
                            </div>
                            <div className="blog1content">
                                <h3>
                                   FARMING
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                   
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/.png')} alt="" />
                       
                            </div>
                            <div className="blog1content">
                                <h3>
                                    ORGANIC FRUITS
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                    
    
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>
                    <div className="blogmainsection">
                        <div className="blog1">
                            <div className="blog1img">
                                <img src={require('./images/mutt.png')} alt="" />
                                
                            </div>
                            <div className="blog1content">
                                <h3>
                                   MEAT INDUSTRY
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                   

                                   
    
                                </div>
                                 
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/beef.png')} alt="" />


                                
                            </div>
                            <div className="blog1content">
                                <h3>
                                    LABOUR SHORTAGE
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                   
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/pork.png')} alt="" />
                            
                            </div>
                            <div className="blog1content">
                                <h3>
                                    PROCESSOR MOVE
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                    
    
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>
                    <div className="blogmainsection">
                        <div className="blog1">
                            <div className="blog1img">
                                <img src={require('./images/Corr.png')} alt="" />
                                
                            </div>
                            <div className="blog1content">
                                <h3>
                                CONSECTETUR 
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                   

                                   
    
                                </div>
                                 
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/nut.png')} alt="" />


                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div className="blog1content">
                                <h3>
                                 ADIPISICING
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                   
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog1">
                            <div className="blog1img">
                            <img src={require('./images/cumb.png')} alt="" />
                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div className="blog1content">
                                <h3>
                                    FRESHNESS
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                    
    
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
                </div>

                <div className= "inside">

                    <h2>Photo Gallery</h2>
                    <h3>Insite Photo Gallery</h3>
                    <div className="photo">
                        <img src ={require('./images/photo1.png')} alt="" />
                        <img src={require('./images/photo2.png')} alt="" />
                        <img src={require('./images/photo3.png')} alt="" />


                    </div>

                </div>

 


                <div className="brand">

                    <div className="">
                        <img src={require('./images/soda.png')} alt="" />
                    </div>
                    <div className="">
                        <img src={require('./images/coco.png')} alt="" />
                    </div>
                    <div className="">
                        <img src={require('./images/lemon.png')} alt="" />
                    </div>
                    <div className="">
                        <img src={require('./images/drink.png')} alt="" />
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
