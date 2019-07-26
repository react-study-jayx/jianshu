import styled from 'styled-components'
export const RecommendWrapper=styled.div`
        line-height:20px;
        margin-top:30px;
        margin-bottom: 20px;
        padding-top: 0;
        font-size: 13px;
        text-align: center;
        .title{
            font-size: 14px;
            color: #969696;
            text-align: left;
        }
        .page-change{
            float:right;
            display: inline-block;
            font-size: 14px;
            color: #969696;
        }
        .list {
                margin: 0 0 20px;
                text-align: left;
                list-style: none;
        }
        a{text-decoration:none; color:#333;}
`
export const RecommendListItem=styled.li`
    margin-top: 15px;
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor:pointer;
    }
    p{
        font-size: 12px;
        color: #969696;
        margin: 0 0 10px;
        margin-top: 2px;
    }

     .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
`