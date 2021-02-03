import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Row,Label,Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


 const required = (val) => val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len);
 const minLength = (len) => (val) => !(val) || (val.length >= len) ;


class Commentform extends Component {


    handleSubmit=(event) =>
    {
        this.props.onClick();
        alert('Current State is: '+ this.name.value);
        //event.preventDefault();
    }

    // handleSubmit(values) {
    //    this.props.onClick();
    //     alert('Current State is: ' + JSON.stringify(values));
    //     event.preventDefault();  
    // }

render(){
    return(
        <Modal isOpen={this.props.isModalOpen} toggle={this.props.onClick} >
        <ModalHeader toggle={this.props.onClick}>Submit Comment</ModalHeader>
        <ModalBody>
        <LocalForm onSubmit={this.handleSubmit} >
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
                    innerRef={(input) => this.name = input}
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








} 

export default Commentform;