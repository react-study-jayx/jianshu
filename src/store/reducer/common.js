import {fromJS} from 'immutable'
const defaultState=fromJS({
    showScrollTop:false,
    showShare:false,
})
export default (state=defaultState,action)=>{
    if(action.type=="show_scroll_top_btn"){
        return  state.set('showScrollTop',action.value);
    }
    if(action.type=="show_share_btn"){
        return  state.set('showShare',action.value);
    }
    return state;
}