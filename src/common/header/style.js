import styled from 'styled-components'
import logourl from '../../statics/images/logo.png';

export const HeaderWrapper =styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`
export const Logo=styled.div`/* 字符串模板*/
 width:100px;
 height:56px;
 background:url(${logourl});
 background-size:cover;
 position:absolute;
 left:5px; 
 top:0;
`
export const Nav=styled.div`
 width:960px;
 height:100%;
 margin:0 auto;
/*  background:#c00; */
`
export const NavItem=styled.div`
    cursor: pointer;
    box-sizing:border-box;
    height: 56px;
    line-height: 26px;
    padding: 15px;
    color: #333;
    &:hover{ background-color:hsla(0,0%,71%,.1);}
    &.active{color:#ea6f5a;}
    &.left{float:left}
    &.right{float:right;color:#969696;}
`
export const WrapperSearch=styled.div`
    float:left;
    position:relative;
    margin:8px 0 0 20px;
    padding:0 20px 0 20px;
    box-sizing:border-box;
    height:38px;
    transition:all 0.5s;
    width:${props=>props.focused?'200px':'180px'};
    border-radius:19px;
    background:#eee;
    font-size:14px;
    line-height:38px;
    > .iconfont{
        position:absolute;right:4px; top:4px; display:block; line-height:30px; cursor: pointer;
        width:30px;height:30px; text-align:center; 


        border-radius:${props=>props.focused?'30px':'0'};
            background:${props=>props.focused?'#9696A2':'none'};
            color:${props=>props.focused?'#fff':'inherit'};
    }
`
export const NavSearch=styled.input.attrs({
    placeholder:"搜索",

})`
     &::placeholder{
        color:#999; 
    }
    
    width:100%;
    padding-right:10px; box-sizing:border-box;
    height:100%;
    display:block;
     background:none;
     border:none;
     outline:none;
     
     /* margin-right:4px; */
`
export const Adition=styled.div`
    position:absolute;
    right:0;
    top:0;
`
export const Btn=styled.div`
    box-sizing:border-box;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &.write-btn{
        float: right;
        width: 100px;
        height: 40px;
        line-height: 24px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
    &.sign-up{
        float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    }
`
export const WrapperSearchTrending=styled.div`
    transition:0.5s all;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    margin-top: 9px;
    width: 250px;
    left: 0;
    top: 100%;
    visibility: ${props=>props.focused?'visible':'hidden'};
    opacity: ${props=>props.focused?1:0};
    /* visibility: hidden; */
    /* opacity: 0; */
    border-radius: 4px;  
`
export const SearchTrending=styled.div`
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
`
export const  SearchTrendingHeader=styled.div`
        line-height:20px;
        height: 20px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #96969A;
`
export const SearchUl=styled.ul`
   
`
export const SearchUlItem=styled.li`
    cursor: pointer;
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    &:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`