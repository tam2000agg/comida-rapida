import React from 'react';
import {Media, Card,CardImg ,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import {baseUrl} from "../shared/baseurl";
import { Loading } from './LoadingComponent';

function Check({isloading,iserror,leaders})
{
    console.log("ta,man");
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
                <div key={leader.id} >
                    <div className="row">
                        <div className="col-md-2">
                            
                                <img src={baseUrl+leader.image}></img>
                            
                        </div>
                        <div className="col-md-10">
                    <Media tag="li"> 
                    <Media heading>{leader.name}</Media>
                    </Media>
                    <Media tag="li">
                    <p>{leader.designation}</p>
                    </Media>
                    <Media tag="li">
                    <p>{leader.description}</p>
                    </Media>
                    </div>
                    </div>
    
                 
                </div>
            );
         });
    return(
        <Media list>
            {leaderss}
              </Media>
    );
    }
    
}
 function About(props)
 {
    
     
    return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 m-1">
                        <h2>Our History</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-12 col-md m-1">
                        <Card>
                        <CardTitle style={{backgroundColor:"blue",color:"white",padding:"5px"}}>Facts At a Glance</CardTitle>
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
                <div className="row" style={{border:"1px solid lightgrey" , textAlign:"center"}}>
                    <p style={{textAlign:"center",width:"100%", margin:"15px"}}>- Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="row" style={{marginTop:"40px"}}>
                    <h2>Corporate Leadership</h2>
                </div>
                
                        <Check isloading={props.leaders.isLoading}
                        iserror={props.leaders.errMess}
                        leaders={props.leaders.leaders} 
                        />
                
                
            </div>


    );
 }
 export default About;