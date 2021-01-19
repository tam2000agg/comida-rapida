import React,{Component} from 'react';
import {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishComponent extends Component {
    
    render()
    {
        

        if(this.props.dish!=null)
        {  
           const comments =this.props.dish.comments.map(comment=>{
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
                <div className="col-12 col-md-5 m-1">  
                    <Card onClick={() => this.props.onClick(null)}> 
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
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