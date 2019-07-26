import React from 'react'
import {RecommendWrapper} from './style'
class Recommend extends  React.Component{
    render(){
        return (
            <RecommendWrapper>
                <a target="_blank" href="/mobile/club"><img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Banner s club"></img></a>
                <a utm_medium="index-banner-s" target="_blank" href="/mobile/books?category_id=284"><img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7"></img></a>
                <a utm_medium="index-banner-s" target="_blank" href="/publications"><img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5"></img></a>
                <a target="_blank" href="/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop"><img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6"></img></a>
            </RecommendWrapper>
        )
    }
}
export default Recommend