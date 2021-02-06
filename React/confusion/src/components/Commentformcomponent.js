import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Redirect ,useHistory} from 'react-router-dom';
import {Row,Label,Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


 const required = (val) => val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len);
 const minLength = (len) => (val) => !(val) || (val.length >= len) ;

 
 function handleSubmit(values,onClick,addComment,dishId,history) 
 {
    onClick();
    addComment(dishId,values.rating,values.name,values.comment);
   
    history.push('/home');     
 }
 
function Commentform (props) {
    
    let history = useHistory();  //react hooks are always used in function component 
 
  


    return(
        <Modal isOpen={props.isModalOpen} toggle={props.onClick} >
        <ModalHeader toggle={props.onClick}>Submit Comment</ModalHeader>
        <ModalBody>
        <LocalForm onSubmit={(values)=>handleSubmit(values,props.onClick,props.addComment,props.dishId,history)} >
                <Row className="form-group">
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select model=".rating" id="rating" name="rating"
                     
                      className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Control.select>
                </Row>

                <Row className="form-group">
                    <Label htmlFor="name">Your Name</Label>
                    <Control.text model=".name" id="name" name="name"  className="form-control"
                 
                    validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                    }}
                    />
                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show={true}
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                </Row>

                <Row className="form-group">
                     <Label htmlFor="comment" >Comment</Label>
                     <Control.textarea model=".comment" id="comment" name="comment" rows="6"  className="form-control"/>
                </Row>
                <Button type="submit" value="submit" color="primary">Submit</Button>
            </LocalForm>
        </ModalBody>
    </Modal>
    );
    








} 

export default Commentform;