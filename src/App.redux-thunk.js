import React from 'react';
import logo from './logo.svg';
import Header from './common/header'
import store from './store'
import {changeSearchAction,initValueAsyncAction} from './store/storeActions'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    console.log('lll',store.getState())
    this.handleSearchChange=this.handleSearchChange.bind(this);
    this.handStoreChange=this.handStoreChange.bind(this);
    store.subscribe(this.handStoreChange)
  }
  componentDidMount(){
    let action=initValueAsyncAction();
    store.dispatch(action);
  }
  handStoreChange(){
      this.setState(store.getState());
  }
  handleSearchChange(e){
    let value=e.target.value;
    const action=changeSearchAction(value);
    store.dispatch(action);
  }
  render(){
    return (
      <div className="App">
        <Header></Header>
        <input value={this.state.searchValue}  onChange={this.handleSearchChange}/>
      </div>
    );
  }
}

export default App;
