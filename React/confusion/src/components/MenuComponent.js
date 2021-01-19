import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function Menurender({dish,onClick})
{
    return(
                <Card onClick={() => onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay>
                        <CardTitle >{dish.name}</CardTitle>
                    </CardImgOverlay>
                    
                </Card>
     );
}

function Menu(props)
{    
    if(props.dishes!=null)
    {
         const menu=props.dishes.map((dish)=>{
           return (
            <div key={dish.id} className="col-12 col-md-3 m-1" >
                
                <Menurender dish={dish} onClick={props.onClick} />
            </div>
           );
        });

        return(
            <div className="container">
                
                <div className="row">
                     {menu}
                     
                </div>
                
            </div>
        );
    }
    else{
        return(
        <></>);
    }
}  

export default Menu;