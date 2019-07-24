import React from 'react';
import Header from './common/header'
import {connect} from  'react-redux'
import {changeSearchAction,initValueAsyncAction} from './store/storeActions'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import SideBar from './common/sideBar'
class App extends React.Component{
  constructor(props){
    super(props);
  }
 
  componentWillMount(){
    this.props.initSearchValue()
  }     

  render(){
    return (
      <div className="App">
        <Header></Header>
        <BrowserRouter>
          
              {/* <Route path='/' exact render={()=><div>Index</div>}></Route>
              <Route path='/detail' exact render={()=><div>Detail</div>}></Route> */}

              <Route path='/' exact  component={Home}></Route>
              <Route path='/detail' exact  component={Detail}></Route>
            
        </BrowserRouter>
        <SideBar></SideBar>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
      return {
        searchValue:state.searchValue
      }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleSearchChange(e){
      let value=e.target.value;
      const action=changeSearchAction(value);
      dispatch(action)
    },
    initSearchValue(){
      let action=initValueAsyncAction();
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App;
