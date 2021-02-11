import React from 'react';
import { Card, CardImg,  CardTitle,Breadcrumb,BreadcrumbItem, CardHeader, CardSubtitle, CardBody, CardImgOverlay} from 'reactstrap';
import{Link} from 'react-router-dom';
import {baseUrl} from "../shared/baseurl";
import { Loading } from './LoadingComponent';
function Menurender({dish})
{
    return(
        <div className="anim">
                <Card className="mb-sm-3 mb-md-0" style={{background:"lightgrey"}}>
                    <CardHeader>
                        <CardTitle ><b>{dish.name}</b></CardTitle>
                    </CardHeader>
                    <Link to ={`/menu/${dish.name}/${dish.id}`}>
                    
                        <CardImg className="image" src={baseUrl+ dish.image} alt={dish.name}>
                        <CardImgOverlay>John Doe</CardImgOverlay>
                        </CardImg>
                   
                    </Link>
                    <CardBody>
                       <div className="row" >
                        <div className="col-7 mr-auto">
                        <CardSubtitle> <b>{dish.category}</b></CardSubtitle>
                        </div>
                        <div className=" ml-auto col-4">
                        <CardSubtitle><b>${dish.price}</b></CardSubtitle>
                        </div>
                        </div>
                        </CardBody>
                </Card>
                </div>
     );
}

function Menu(props)
{    
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
    {
           
           const menu=props.dishes.dishes.map((dish)=>{
           return (
            <div key={dish.id} className="col-12 col-md-3">
                
                <Menurender dish={dish} />
            </div>
           );
        });

        return(
            <div style={{background:"url('/assets/images/image6.jpg')",backgroundSize:"certain"}}>
            <div className="container " >
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                   <div className="col-12">
                       <h3>Menu</h3>
                       <hr />
                   </div>
                    
                </div>
                <div className="row" >
                     {menu}
                     
                </div>
                
            </div>
            </div>
        );

}  
}

export default Menu;
