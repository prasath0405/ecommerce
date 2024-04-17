import React, { useState } from 'react'
import Productdetails from './Productdetails'
import { Link, Outlet } from 'react-router-dom'
import './Spices.css'

export const Spices = ({cart,setCart}) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart= (product)=>{
        setCart([...cart.product]);
        setCartCount(prevCount => prevCount+1);
    }
    console.log(Productdetails);
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
        {/* <Link to='/fruits' className='link'>Fruits</Link> */}
        <Link to='/cart' className='link'>Cart

        <div className='cartr'>
        {cart.length}
            
            </div>
            
        
        </Link>

        </div>
        <Outlet></Outlet>
    
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="sectionone">
        <div className="herosection">
            <div className="mainhero">
                <div className="heroimg">
                    <div className="herocontent">
                      <h1>SHOP</h1>
                        <h5>HOME {'>'}SHOP</h5>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        <div className="row">
            
                <div className="sectiontwo">
        <div className="productsection">
                <div className="products1">
                    {
                        Productdetails.map((dd,index)=>
                        
                        <div className="product1" key={index}>

                          <img src={dd.productimage} alt="" width={'400px'} height={'400px'}/>


                        <div className="producttext">
                            <h4>{dd.productname}</h4>
                            <h5>{dd.amount}</h5>
                        </div>
                        <div className="productbutton">
                        <button className='addcart' onClick={()=> setCart([...cart,dd])}>ADD TO CART</button>
                       


                        </div>
                    </div>
                    
                    
                    
                        )
                        
                    }
                    
                    
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
                                <img src={require('./images/broli.png')} alt=""  />
                                
                            </div>
                            <div className="blog1content">
                                <h3>
                                FRESH VEGETABLE GREENERY
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                 
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog2">
                            <div className="blog2img">
                            <img src={require('./images/orae.png')} alt=""/>


                               
                            </div>
                            <div className="blog2content">
                                <h3>
                               ORGANIC FRUITS & NUTS
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div className="readmore">
                                    <button>READ MORE >></button>
                                    
                                    
    
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog3">
                            <div className="blog3img">
                            <img src={require('./images/bugegg.png')} alt="" />
                               
                            </div>
                            <div className="blog3content">
                                <h3>
                                FARMING & AGRICULTURE
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
                <div className="sectionsix">
                <div className="newsletter">
                <div className="newssection">
                    <h1>SUBSCRIBE TO OUR NEWSLETTERS</h1>
                    <p>GET THE LATEST NEWS ABOUT OUR PRODUCTS AND DISCOUNTS!</p>
                    <div className="emails">
                        <input type="email" placeholder="ENTER YOUR EMAIL" className='emailinput'/>
                        <button type="submit">SUBSCRIBE</button>

                    </div>

                    

                </div>
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
