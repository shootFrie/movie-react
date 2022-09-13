import React ,{ useRef, useState, useImperativeHandle } from 'react'
import './index.css'
import BScroll from 'better-scroll'
import { useEffect } from 'react';

const Scroller = React.forwardRef((props, ref) => {
  const wrapper  = useRef();
  const [Bscroll,setBscroll] = useState()
  useEffect(() => {
    console.log("1111",wrapper, wrapper.current)
    var scroll = new BScroll(wrapper.current,{  
      // pullUpLoad: true, // 上拉加载 2.0不一样
      observeDOM:true,
      probeType: 3,
      touchEnd: true,
      scrollY:true,
      pullDownRefresh:{
          stop:0,
          threshold:40 // 顶部下拉距离决定刷新时机
      },
		});
		
		setBscroll(scroll);

    // scroll.on('pullingUp', () => {
    //   console.log("上拉加载更多") 
    // })
    // 下拉刷新
		// scroll.on('pullingDown', ()=> {
    //   // console.log("下拉刷新...")
    // })
		// scroll.on('scroll' , (pos) => {
		// 	// props.handleToScroll(pos);
    //   if(pos.y > 30){
    //     // console.log("正在更新中...")
    //   }
		// });
		
		// scroll.on('touchEnd', (pos) => {
		// 	// props.handleToTouchEnd(pos);
    //   // console.log("touchEnd...")
		// }); 
    
  }, [props])
  useImperativeHandle(ref, ()=> ({
    toScrollTop : (y)=> {
      Bscroll.scrollTo(0, y)
    }
  })) 
 
  
  return (
    <div className='wrapper' ref={wrapper}>
      {props.children}
    </div>
  )
})

export default Scroller
