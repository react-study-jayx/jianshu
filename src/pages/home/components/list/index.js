import React from 'react'
import {ListUl,ListItem} from './style'
import {Link} from 'react-router-dom'
class List extends  React.Component{
    render(){
        const arr= [0,0,0,0,0,0,0,0,0,0,0];
        return (
            <ListUl>
                { arr.map((item)=>{
                       return   <ListItem>
                            <Link className="wrap-img" to='/detail'>
                                <img className="img-blur-done" src="//upload-images.jianshu.io/upload_images/15874461-33e0b1f7fc543d10?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="120"></img>
                            </Link>
                            <div className="content">
                                <a className="title" target="_blank" href="/p/47fc26287658">后人挖诸葛亮的墓，被碑上五字吓得磕了一千响头，说道：算的真准</a>
                                <p className="abstract">
                                导读：诸葛亮神算子的名声想必大家都已经有所了解了。“三顾茅庐”，“草船借箭”，“巧借东风”这些耳熟能详的典故就不用赘述了。 但许多人对刘伯温却并...
                                </p>
                                <div className="meta">
                                    <span className="jsd-meta">
                                    <i className="iconfont ic-paid1"></i> 5.9
                                    </span>
                                <a className="nickname" target="_blank" href="/u/b358515b935f">文史知识</a>
                                    <a target="_blank" href="/p/47fc26287658#comments">
                                    <i className="iconfont ic-list-comments"></i> 3
                            </a>      <span><i className="iconfont ic-list-like"></i> 45</span>
                                </div>
                            </div>
                        </ListItem>
                })}
            </ListUl>
        )
    }
}
export default List