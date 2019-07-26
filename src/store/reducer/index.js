//import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
import headerReducer from './headerReducer'
import testReducer from './testReducer'
import common from './common'
export default combineReducers({
    header:headerReducer,
    test:testReducer,
    common:common
})