import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';
class Header extends Component{
    render(){
        return(
            // <> REACT FRAGMENTS
            <>
             <Navbar dark>
                <div className="container">
                      <NavbarBrand href="/">Restauarnt</NavbarBrand>
                 </div>
             </Navbar>
             <Jumbotron style={{  backgroundImage: `url("assets/images/pexels-mariana-kurnyk-1775043.jpg")` }} >
             <div className="container" >
                 <div className="row row-header">
                     <div className="col-12 col-sm-6">
                        <h1 >CANDY CRUSH</h1>
                    <p style={{fontWeight:"500" ,color:'black'}}>HAMARE PASS KABHI MAT AANA,WORLD'S BEKAAR KHANA HAMARA YAHAN MILTA HAI!!</p>
                     </div>
                 </div>
            </div>
             </Jumbotron>
             
          </>
        );
    }
}
export default Header;