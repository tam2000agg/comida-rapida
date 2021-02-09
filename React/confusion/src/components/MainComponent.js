import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishComponent from './Dishescomponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { PostComment,fetchComments,fetchDishes, fetchPromos} from '../redux/ActionCreators';



const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments:state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        PostComment: (dishId, rating, author, comment) => dispatch(PostComment(dishId, rating, author, comment))
        ,fetchDishes:()=>{dispatch(fetchDishes())},
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
        fetchComments:()=>{dispatch(fetchComments())},
        fetchPromos:()=>{dispatch(fetchPromos())}
  
    }
};


class Main extends Component {
    constructor(props) {
        super(props);
        

    }
    componentDidMount()
    {
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
    }
    


    render() {
        const Homepage = () => {
            return (
                <>
                       <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)}
                        dishesLoading={this.props.dishes.isLoading}
                        dishesErrMess={this.props.dishes.errMess}
                        prom={this.props.promotions.promotions.filter((promo) => promo.featured)}
                        promosLoading={this.props.promotions.isLoading}
                        promosErrMess={this.props.promotions.errMess}
                        leader={this.props.leaders.filter((lead) => lead.featured)}
                    />

                    {/* optional we can put any no.of components that we want to call with home component  */}
                </>
            );

        }
        const DishWithId = ({ match }) => {
            return (
                <DishComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                    commentserrMess={this.props.comments.errMess}
                    PostComment={this.props.PostComment}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                />
            );
        }
        return (

            <div>
                <Header />

                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route exact path="/contactus" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route path="/menu/:dishName/:dishId" component={DishWithId} />
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
