import React from 'react';
import {Card,CardImg ,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';

function Home(props)
{
    return (
        <div className="container">
            {/* <div className="row "> */}
              {/* <div className="col-12 col-md m-4"> */}
                  <RenderCard items={props.dish}/>
                  {/* </div>   */}
                  <hr ></hr>
                  {/* <div className="col-12 col-md m-4"> */}
                  <RenderCard items={props.prom}/>
                  <hr ></hr>
                  {/* </div>   */}
                  {/* <div className="col-12 col-md m-4"> */}
                  <RenderCard items={props.leader}/>
                  <hr></hr>
                  {/* </div>   */}
            {/* </div> */}

        </div>
    );
}

function RenderCard({items})
{
    const m=items.map((item)=>{
return (
    
    <div className="col-12 col-md-4 m-1">
<Card style={{border:"3px solid black"}}>
    <CardImg src={item.image}/>
    <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
        <CardText>{item.description}</CardText>
    </CardBody>
</Card>
</div>

);
    });

    return (
        <div className="row">
            {m}
         </div>
        );
}
export default Home;