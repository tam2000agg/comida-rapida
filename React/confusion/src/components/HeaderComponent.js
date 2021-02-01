import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen: false

        };
       // this.toggleNav=this.toggleNav.bind(this);  // so that we can call this by name directly
       this.handleLogin = this.handleLogin.bind(this);
    }
  
    toggleNav=()=>
    {
        this.setState({
            isNavOpen: !this.state.isNavOpen
            
        });
    }
    toggleModal=()=>{
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

     }
      fun()
    { 
        if(document.querySelector('.jumbotron').style.backgroundColor !=="red") 
        document.querySelector('.jumbotron').style.backgroundColor="red";
        
       else
        document.querySelector('.jumbotron').style.backgroundColor="lightgrey";
         

    }
    render(){
      
        
        return(
            // <> REACT FRAGMENTS
            <>
             <Navbar light   className=" bg-secondary shadow" expand="md">
                <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                      <NavbarBrand style={{color:"black"}}className="mr-auto " href="/">
                      <b>    TAMANNA AGGARWAL  </b>
                      </NavbarBrand>
                       
                      
                      <Collapse  isOpen ={this.state.isNavOpen} navbar className= "offset-md-0  offset-lg-1 offset-xl-1">
                      <Nav navbar>
                          <NavItem>
                              <NavLink  className="nav-link " to="/home">
                                  <span className="fa fa-home fa-lg "></span>HOME 
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link " to="/aboutus">
                                  <span className="fa fa-info fa-lg"></span> ABOUT US
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink onFocus={this.fun} className="nav-link " to="/menu">
                                  <span className="fa fa-list fa-lg"></span> DISHES MENU
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/contactus">
                                  <span className="fa fa-address-card fa-lg"></span> CONTACT US
                              </NavLink>
                          </NavItem>
                      </Nav>
                      <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button className="btn-outline-dark" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                      </Collapse>
                      
                 </div>
             </Navbar>
             <Jumbotron style={{margin:"0px 0px 10px 0px"}}>
             <div className="container" >
                 <div className="row row-header">
                     <div className="col-12 col-md-12 ">
                        <h1 >WELCOME TO AGGARWAL'S KITCHEN</h1>
                        </div>
                        <div className=" offset-sm-6 offset-md-0 col-6 col-md-12 order-lg-first">
                    <p style={{fontWeight:"500" ,color:'black',fontSize:"20px"}}><b>~ MOST DELICIOUS FOOD</b></p>
                     </div>
                 </div>
            </div>
             </Jumbotron>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
             
          </>
        );
    }
}
export default Header;