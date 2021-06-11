import React,{Component} from 'react';
import {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, CardSubtitle, CardFooter,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Commentform from './Commentformcomponent';
import { Loading } from './LoadingComponent';
import {baseUrl} from "../shared/baseurl";
class DishComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            
            isModalOpen: false
                
            }
        }
        toggleModal=()=>{
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
          }
    render()
    {
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
         else  if(this.props.dish!=null)
        {  
           const comments =this.props.comments.map(comment=>{
               return (
                   
                   <div key={comment.id}  >
                       <Media tag="li"> 
                       <p>{comment.comment}</p>
                       </Media>
                       <Media tag="li">
                       <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                       </Media>
                    
                   </div>
               );
            });
        
            return(
                <div className="dishes" style={{padding:"70px"}}>
                <div className="container"style={{backgroundColor:'darkseagreen',padding:"20px"}} >
                <div className="row ">
                <div className="col-12 col-md-5 m-2 ">  
                    <Card > 
                        <Link to="/menu">
                    <CardImg width="100%" src={baseUrl+ this.props.dish.image} alt={this.props.dish.name}></CardImg>
                    </Link>
                    
                    <CardBody>
                    <CardSubtitle>
                    <div ><b>{this.props.dish.name}</b></div>
                    </CardSubtitle>
                    </CardBody>
                   
                   <CardFooter>
                   {this.props.dish.description}
                   </CardFooter>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-2">
                <h3>COMMENTS</h3>
                     
                    
                    <Media list>
                       {comments} 
                    </Media>

            <a className="btn btn-outline-dark"  onClick={this.toggleModal}>
                <span className="fa fa-pencil"></span> Submit Comment
            </a>

            <Commentform isModalOpen={this.state.isModalOpen} onClick={()=>{this.toggleModal()}} 
            PostComment={this.props.PostComment}
            dishId={this.props.dish.id}
            ></Commentform>
                  
                </div>
                </div>
                </div>
                </div>
            );
            
        }
        else{
            return (
                <div></div>
            );
        }      
    }
}

export default DishComponent;