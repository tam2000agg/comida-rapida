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
    //   fun()
    // { 
    //     if(document.querySelector('.jumbotron').style.backgroundColor !=="red") 
    //     document.querySelector('.jumbotron').style.backgroundColor="red";
        
    //    else
    //     document.querySelector('.jumbotron').style.backgroundColor="lightgrey";
         

    // }
    render(){
      
        
        return(
            // <> REACT FRAGMENTS
            <div className="navbar_container " style={{padding:"0px",backgroundColor:"black"}} >
             <Navbar className="shadow"  light expand="md" style={{marginLeft:"0px"}} >
                <div className="container-fluid " style={{marginLeft:"0px"}}>
               
                      <NavbarBrand style={{color:"brown"}}className="mr-auto " href="/">
                      <b>  COMIDA RAPIDA  </b>
                      </NavbarBrand>
                      <NavbarToggler onClick={this.toggleNav}/>
                      
                      <Collapse  isOpen ={this.state.isNavOpen} navbar className= " offset-sm-0 offset-md-0 offset-lg-3 offset-xl-5">
                      <Nav navbar className='container' style={{width:'auto'}}>
                          <NavItem className="nav_item">
                              <NavLink  className="nav-link "  to="/home">
                                 HOME 
                              </NavLink>
                          </NavItem>
                          <NavItem className="nav_item">
                              <NavLink className="nav-link " to="/aboutus">
                                   ABOUT US
                              </NavLink>
                          </NavItem>
                          <NavItem className="nav_item">
                              <NavLink  className="nav-link " to="/menu">
                                  DISHES MENU
                              </NavLink>
                          </NavItem>
                          <NavItem className="nav_item">
                              <NavLink className="nav-link" to="/contactus">
                                  CONTACT US
                              </NavLink>
                          </NavItem >
                          <NavItem className="nav_item">
                                    <Button className="btn" onClick={this.toggleModal}> Login</Button>
                                </NavItem>
                      </Nav>
                      
                      </Collapse>
                 </div>
             </Navbar>
            
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
             
                </div>
        );
    }
}
export default Header;