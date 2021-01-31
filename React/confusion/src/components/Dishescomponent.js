import React,{Component} from 'react';
import {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, CardSubtitle, CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
class DishComponent extends Component {
    
    render()
    {
        

        if(this.props.dish!=null)
        {  
           const comments =this.props.comments.map(comment=>{
               return (
                   <div key={comment.id} >
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
                <div className="container">
                <div className="row ">
                <div className="col-12 col-md-5 m-2">  
                    <Card> 
                        <Link to="/menu">
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
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