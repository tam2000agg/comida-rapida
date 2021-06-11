import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,Breadcrumb,BreadcrumbItem, CardHeader, CardSubtitle, CardBody} from 'reactstrap';
import{Link} from 'react-router-dom';
import {baseUrl} from "../shared/baseurl";
import { Loading } from './LoadingComponent';
function Menurender({dish})
{
    return(
        <div className="anim">
                <Card className="mb-sm-3 mb-md-0 _menunew shadow">
                    <CardHeader>
                        <CardTitle ><b>{dish.name}</b></CardTitle>
                    </CardHeader>
                    <Link to ={`/menu/${dish.name}/${dish.id}`}>
                    
                        <CardImg className="imagee" src={baseUrl+dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <div class="middle">
                               <CardTitle className="text">{dish.label}</CardTitle>
                           </div>
                    </CardImgOverlay>
                    </Link>
                    <CardBody>
                       <div className="row" >
                        <div className="col-auto ">
                        <CardSubtitle> <b>{dish.category}</b></CardSubtitle>
                        </div>
                        <div className=" ml-auto col-auto">
                        <CardSubtitle><b>{dish.price}</b></CardSubtitle>
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
            <div key={dish.id} className="col-12 col-sm-6 col-md-3 p-1">
                
                <Menurender dish={dish} />
            </div>
           );
        });

        return(
            <div className="_menu " style={{paddingBottom:"15px"}} >
                <div  style={{height:"70px"}}>
                
                </div>
            <div className="container " >
                <div className="row">
                    {/* <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb> */}
                   <div className="col-12">
                       <h2>Menu</h2>
                       <hr />
                   </div>
                    
                </div>
                <div className="row " style={{backgroundColor:"darkseagreen",padding:"20px"}} >
                     {menu}
                     
                </div>
                
            </div>
            </div>
        );

}  
}

export default Menu;
