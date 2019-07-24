import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import   * as  Style from './style'
import {IconFont} from './statics/iconfont/'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(//全局样式的引入
<React.Fragment>
    <Provider store={store}>
        <App />
    </Provider>
    <Style.GlobaleStyle ></Style.GlobaleStyle>
    <IconFont></IconFont>
</React.Fragment>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
