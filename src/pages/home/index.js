import React from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import List from './components/list'
import Recommend from './components/recommend'
import Rank from './components/rank'
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
           <HomeWrapper>
               <HomeLeft>
                   <img  class='banner-img' width="625" src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <List></List>
               </HomeLeft>
               <HomeRight>
                    <Recommend></Recommend>
                    <Rank></Rank>
               </HomeRight>
           </HomeWrapper>
        )
    }
}
export default Home;