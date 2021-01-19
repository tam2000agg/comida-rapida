import React,{ Component } from 'react';
import Header from  './HeaderComponent';
import Footer from  './FooterComponent';
import Menu from './MenuComponent';
import DishComponent from './Dishescomponent';
import { DISHES } from '../shared/dishes.js';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';


class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            dishes: DISHES,
            selecteddish:null
        };
        
    }
     ondishselect(dishid,dishess){
        this.setState({
           
           selecteddish : dishid,
           dishes:dishess
        });
     }

    render()
    {
     
        
    return (
      <div>
      <Header/> 

       {/* <Menu  dishes={this.state.dishes} 
       onClick={(dishid)=> this.ondishselect(dishid,null)} />
        */}
         
        {/* <DishComponent dish={DISHES.filter((dish)=>this.state.selecteddish===dish.id)[0]} 
        onClick={(dishid)=> this.ondishselect(dishid,DISHES)}/> 
        */}


<Switch>
    
</Switch>
      <Footer />
      </div>
  );
}
}
export default Main;
