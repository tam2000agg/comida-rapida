
import * as ActionTypes from './ActionTypes';
export const Comments=(state={
    errMess:null,
    comments:[]
},action)=>
{
    switch(action.type)
    {
       
        case ActionTypes.ADD_COMMENT:
           
            var comment=action.payload;
           // comment.id=state.comments.length;
           //this id is already included by the server automatically
        
            return {...state,comments:state.comments.concat(comment)};    //immutable object-concat
    
            
            case ActionTypes.ADD_COMMENTS:
                return {...state, errMess: null, comments: action.payload};
    
            case ActionTypes.COMMENTS_FAILED:
                    return {...state, errMess: action.payload};
        
        default: return state;  
    }
 
 }; 