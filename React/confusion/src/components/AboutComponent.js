import React from 'react';
import {Media, Card,CardImg ,CardText,CardBody,CardTitle,CardSubtitle,CardHeader} from 'reactstrap';
import {baseUrl} from "../shared/baseurl";
import { Loading } from './LoadingComponent';

function Check({isloading,iserror,leaders})
{
    
    if (isloading) 
    {
        return(
            
                <div className="row">            
                    <Loading />
                </div>
        
        );
    }
    else if (iserror) 
    {
        return(
            
                <div className="row"> 
                    <div className="col-12">
                        <h4>{iserror}</h4>
                    </div>
                </div>
        
        );
    }
    else
    {
        const leaderss=leaders.map(leader=>{
            return (
                <div key={leader.id} className="col-12 col-sm-11 col-md-3 col-lg-3 p-1">
                <Card style={{backgroundColor:"seagreen",color:"white"}}>
                    <CardHeader>{leader.name}</CardHeader>
                    <CardImg src={baseUrl + leader.image} alt={leader.name} />
                    <CardBody>
                        <CardTitle>{leader.designation}</CardTitle>
                     </CardBody>
                </Card>
            </div>
            );
         });

    return(
        <div className="_about row" >
            {leaderss}
         </div>
        );
    }
    
}
 function About(props)
 {
    
 return (
        
        <div className="about">
            <div className="container" >
               <div className="row ">
               <div className="col-12">
                     <h2>Our History</h2>
                       <hr />
                   </div>
                    <div className="col-12 col-md-6 m-1 _about">
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-12 col-md m-1 _about">
                        <Card>
                        <CardTitle style={{backgroundColor:"seagreen",color:"white",padding:"5px"}}>Facts At a Glance</CardTitle>
                        <CardBody>
                            <div className="row">
                                <div className="col-3"><b>Started</b></div>
                                <div className="col"><p>27 Jan,2021</p></div>
                            </div>
                            <div className="row">
                                <div className="col-3"><b>Major Stake Holder</b></div>
                                <div className="col"><p>Tamanna aggarwal</p></div>
                            </div>
                            <div className="row">
                                <div className="col-3"><b>Last Year's Turnover</b></div>
                                <div className="col"><p>$0</p></div>
                            </div>
                            <div className="row">
                                <div className="col-3"><b>Employees</b></div>
                                <div className="col">Rahul Bansal</div>
                            </div>
                            
                        </CardBody>
                        </Card>
                    </div>
                </div>
               <hr />
                <div className="row" style={{marginTop:"20px"}}>
                    <h2>HONERABLE CHEF'S</h2>
                  
                </div >
                <hr></hr>
               
                        <Check isloading={props.leaders.isLoading}
                        iserror={props.leaders.errMess}
                        leaders={props.leaders.leaders} 
                        />
                
                
            </div>
            </div>
            

    );
 }
 export default About;