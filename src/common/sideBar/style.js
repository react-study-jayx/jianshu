import styled from 'styled-components';
export const SideWrapper=styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040; 
`
export const SideList=styled.ul`

`

export const SideListItem=styled.li`
    border: 1px solid #dcdcdc;
    border-bottom: none;
    background-color: #fff;
    transition: .1s ease-in;
    box-sizing:border-box;
    a{  

        cursor: pointer;
        line-height:50px;
        width: 50px;
        height: 50px;
        text-align: center;
        display: block;
        opacity:0.5;
        :hover{
            opacity:1;
        }
    }
    &:last-child{
        border-bottom: 1px solid #dcdcdc;
    }
`