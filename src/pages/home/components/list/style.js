import styled from 'styled-components'
export const ListUl=styled.ul`

`
export const ListItem=styled.li`
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        min-height: 140px;
        line-height:20px;
        a{
            color: #333;
            text-decoration:none;
        }
        .content{
            padding-right: 165px;
        }
         .wrap-img {
            position: absolute;
            top: 50%;
            margin-top: -60px;
            right: 0;
            width: 125px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
                border: 1px solid #f0f0f0;

            }
        }
         .title{
            margin: -7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
        }
        .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        }
        .meta {
            padding-right: 0!important;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
        }
        .jsd-meta {
                color: #ea6f5a!important;
            }
        .nickname{
            margin-right: 10px;
                color: #b4b4b4;
            }

`