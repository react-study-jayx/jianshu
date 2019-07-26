import * as actionTypes from '../storeActionTypes'
import {fromJS} from 'immutable';

const defaultState=fromJS({//转成immutable对象
    list:[],
    focused:false,
    placeholder:"PLS"
})
export default (state=defaultState,action)=>{
    if(action.type==actionTypes.GET_HOT_LIST){
        console.log('acccc',action)
       return  state.set('list',action.data)
    }
    if(action.type==actionTypes.CHANGE_FOCUS_STATUS){
        console.log('ttttt')
          //immutable 对象会根据之前的值和新值 生产一个新的对象 并不改变原始state
        return state.set('focused',action.isFocused)
    }

    return state;
}