import {Component} from 'react';
import {Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap';
import { Control , actions } from 'react-redux-form';

class Contact extends Component 
{
   
    constructor(props){
       super(props);
       this.state={
           firstname:"",
           lastname:"",
           telnum:"",
           email:"",
           agree:false,
           contactType:'Tel.',
           message:"",
           touched:{
               firstname:false,
               lastname:false,
               telnum:false,
               email:false
           }
       };
      
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleInputChange=this.handleInputChange.bind(this);
}

handleSubmit=(values)=>
   {

   alert("Current State is: "+JSON.stringify(values));
   this.props.resetFeedbackForm();
   //    var item=document.getElementById("firstname");
  //    alert(item.value);
 // event.preventDefault();
   
   }

handleInputChange(event)
{
    const target=event.target;
    const value=target.type==='checkbox'?target.checked:target.value;
    const name=target.name;

    this.setState({
        [name]:value
    });
}


// handleBlur=(field)=>(evt)=>
// {
// this.setState({
//     touched:{...this.state.touched,[field]:true}
// });
// }
handleBlur=(event)=>
{
    const target=event.target;
    const name=target.name;
    this.setState({
        touched:{[name]:true}
    
});
}

validate(firstname, lastname, telnum, email) {
    const errors = {
        firstname: '',
        lastname: '',
        telnum: '',
        email: ''
    };

    if (this.state.touched.firstname && firstname.length < 3)
        errors.firstname = 'First Name should be >= 3 characters';
    else if (this.state.touched.firstname && firstname.length > 10)
        errors.firstname = 'First Name should be <= 10 characters';

    if (this.state.touched.lastname && lastname.length < 3)
        errors.lastname = 'Last Name should be >= 3 characters';
    else if (this.state.touched.lastname && lastname.length > 10)
        errors.lastname = 'Last Name should be <= 10 characters';

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
        errors.telnum = 'Tel. Number should contain only numbers';

    if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
        errors.email = 'Email should contain a @';

    return errors;
}


    render(){
       const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
    return(
       <div className="contact" style={{backgroundColor:"rgb(110, 170, 120)",padding:"70px"}}>
        <div className="container" >
            <div className="row row-content" style={{backgroundColor:"darkseagreen",padding:"20px"}}>
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5450.341233615425!2d75.23316102818279!3d30.267926226476504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910c5ac80d49997%3A0x84ee7e117e309650!2sPizza%20On!5e0!3m2!1sen!2sin!4v1611752062566!5m2!1sen!2sin" style={{ width:"100%",height:"100%", border:"3px solid black"}} ></iframe>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="skype:abc"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content" style={{backgroundColor:"darkseagreen",padding:"30px",marginTop:"50px"}}>
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                            <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                       // value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onFocus={this.handleBlur}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                            <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        //value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onFocus={this.handleBlur}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                    
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                       // value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onFocus={this.handleBlur}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                            <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                       //value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onFocus={this.handleBlur}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                           //value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                      //  value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
}
}

export default Contact;
