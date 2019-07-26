import * as actionTypes from '../storeActionTypes'
const defaultState={
    searchValue:"",
    focused:false,
    placeholder:"PLS"
}
export default (state=defaultState,action)=>{
    if(action.type==actionTypes.CHANGE_SEARCH_VALUE){
        let newState=JSON.parse(JSON.stringify(state));
        newState.searchValue=action.value;
        return newState;
    }
    if(action.type==actionTypes.CHANGE_FOCUS_STATUS){
        console.log('testet')
        let newState=JSON.parse(JSON.stringify(state));
        newState.focused=action.isFocused;
        return newState;
    }

    return state;
}