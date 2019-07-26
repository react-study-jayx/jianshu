import React from 'react'
import {SideWrapper,SideList,SideListItem} from './style'
import {connect} from 'react-redux'
class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.scrollEvent=this.scrollEvent.bind(this);//需要bind this
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scrollEvent);
    }
    componentWillMount(){
        window.removeEventListener('scroll',this.scrollEvent)
    }
    scrollEvent(e){
        //this 指向有问题
        const limit=200;
        let scrollTop=document.documentElement.scrollTop;

          //let that=this;
          console.log('scrollTop',scrollTop)
          this.gtThis();
          if(scrollTop>limit){
              this.props.setScrollTopVisibility(true);
          }else{
            this.props.setScrollTopVisibility(false);
          }
    }
    gtThis(){
        console.log('ddddddddddddd')
    }
    goTop(){
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
          });
    }
    render(){
        const {showScrollTop,showShare}=this.props;
        return (
            <SideWrapper>
                <SideList>
                    {showScrollTop?<SideListItem onClick={this.goTop.bind(this)}><a className="iconfont">&#xe60f;</a></SideListItem>:''}
                    {showShare?<SideListItem><a className="iconfont">&#xe60a;</a></SideListItem>:''}
                </SideList>
            </SideWrapper>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        showScrollTop:state.get('common').get('showScrollTop'),
        showShare:state.get('common').get('showShare'),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        setScrollTopVisibility(value){
            let action={
                type:"show_scroll_top_btn",
                value:value,
            }
            dispatch(action);
        },
        setShareVisibility(value){
            let action={
                type:"show_share_btn",
                value:value,
            }
            dispatch(action);
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(SideBar);