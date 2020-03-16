import {ADD_ITMES,DELETE_ITMES,COMPLITE_ITMES,EDIT_ITMES,btedit_ITMES} from '../actions/action'
const initialState =[]

const Reducer = (state =initialState,action)=>{
    switch(action.type){
        case ADD_ITMES :
            return state.concat(action.a)
       case DELETE_ITMES :
           return state.filter(action.payload)
    
    case COMPLITE_ITMES:
        return state.map((el,i)=>(action.payload===i )?{...el, isComplite : !el.isComplite}: el)

        case EDIT_ITMES :
            return state.map(action.payload)
 

case btedit_ITMES:
    return state.map((el,i)=>(action.payload===i )?{...el, edit : !el.edit}: el)

           default :
            return state



            
    }
}
export default Reducer