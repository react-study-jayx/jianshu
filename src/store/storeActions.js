import {HOT_SEARCH,CHANGE_SEARCH_VALUE,INIT_SEARCH_VALUE_ASYNC,CHANGE_FOCUS_STATUS,GET_HOT_LIST} from './storeActionTypes'
import axios from 'axios'
export const changeSearchAction=(value)=>{
    return  {
        type:CHANGE_SEARCH_VALUE,
        value:value
    }
}
export const changeFocusedAction=(isFocused)=>{
    return  {
        type:CHANGE_FOCUS_STATUS,
        isFocused:isFocused
    }
}
export const getHotList=()=>{
    return (dispatch)=>{
        axios.get('http://node.itianhuihui.com/translate/lang/hot').then(res=>{
            let data=res.data.data;
            const action={
                type:GET_HOT_LIST,
                data:data
            }
            dispatch(action);
        })
    }
}
export const initValueAsyncAction=()=>{
    return (dispatch)=>{
        new Promise((resolve,reject)=>{
                setTimeout(()=>{
                   resolve('hello'+Math.random())
                },500)
        }).then(res=>{
            console.log('dhdhhd')
            const action={
                type:INIT_SEARCH_VALUE_ASYNC,
                value:res
            } 
            dispatch(action);
        })
    }
}