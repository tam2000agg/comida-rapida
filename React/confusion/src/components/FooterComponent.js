import React from 'react';

import {Link} from 'react-router-dom';

function Footer (props)
{
    return (
    
<div className="footer mt-4 pt-3" style={{margin:"0px"}}>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-5 mr-auto">
                    <h5 >Links</h5>
                    <ul className="list-unstyled">
                        <li ><Link to="/home" style={{color:"black"}}>HOME</Link></li>
                        <li  ><Link to="/aboutus" style={{color:"black"}}>ABOUT US</Link></li>
                        <li ><Link to="/menu" style={{color:"black"}}>MENU</Link></li>
                        <li ><Link to="/contactus" style={{color:"black"}}>CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="col-5 ml-auto">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net" style={{color:"black"}}>
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-md-4 align-self-center py-3">
                    <div className="text-center social-circle">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:tamannaaggarwalmaur@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-12 my-2 text-md-center">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
   
    );
}
export default Footer;