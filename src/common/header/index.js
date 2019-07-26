import React,{Component,Fragment} from 'react'
import {changeFocusedAction} from '../../store/storeActions'
import {
    HeaderWrapper,Logo,Nav,NavItem,NavSearch,Btn,Adition,WrapperSearch,
    SearchTrendingHeader,WrapperSearchTrending,SearchTrending,SearchUl,SearchUlItem
} from './style'
import {connect} from 'react-redux'
import { GET_HOT_LIST } from '../../store/storeActionTypes';
import {getHotList} from '../../store/storeActions'
class Header extends Component{
    constructor(props){
        super(props);
       /*  this.state={
            focus:false,
        }
        this.handleFocus=this.handleFocus.bind(this);
        this.handleBlur=this.handleBlur.bind(this); */
    }

    componentWillMount(){
        this.props.getHotList();
    }
    render(props){
        const {placeholder,focus,list,handleFocus,handleBlur}=this.props;
        console.log('this.props',this.props)
        return (
            <HeaderWrapper>
               <Logo></Logo>
               <Nav>
                   <NavItem className='left tab active'>首页</NavItem>
                   <NavItem className='left tab'>下载</NavItem>
                   <WrapperSearch focused={focus}>
                        <NavSearch placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></NavSearch>
                        <i className='iconfont'>&#xe614;</i>
                        <WrapperSearchTrending focused={focus}> 
                            <SearchTrending>
                                    <SearchTrendingHeader>热门搜索</SearchTrendingHeader>
                                    <SearchUl>
                                            { list.map( (item,key)=>
                                                <SearchUlItem key={item}>{item}</SearchUlItem>
                                                )
                                            } 

                                    </SearchUl>
                            </SearchTrending>
                        </WrapperSearchTrending>
                   </WrapperSearch>
                    
                
                   <NavItem className='right Aa '><i className='iconfont'>&#xe636;</i></NavItem>
                   <NavItem className='right login-btn'>登陆</NavItem>
               </Nav>
                <Adition>
                    <Btn className='write-btn'><i className='iconfont'>&#xe624;</i>写作</Btn>
                    <Btn className='sign-up'>注册</Btn>
                </Adition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
       // focus:state.header.focused,
     //  focus:state.header.get('focused'), //不使用redux-immutable
        focus:state.get('header').get('focused'),//==state.getIn(['header','focused']);
        placeholder:state.get('header').get('placeholder'),
        list:state.get('header').get('list')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getHotList(){
            const action=getHotList();
            dispatch(action)
        },
        handleFocus(){
            const action=changeFocusedAction(true);
            dispatch(action);//dispatch 时候不区分？
    },
    handleBlur(){
        const action=changeFocusedAction(false);
        dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);