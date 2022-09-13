import React, { lazy,  Suspense} from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Loading from '../components/Loading'
import Redirect from './Redirect' 
const Movie = lazy(() => import('../views/Movie'))
const Mine = lazy(() => import('../views/Mine'))
const Cinema = lazy(() => import('../views/Cinema'))
const ComingSoon = lazy(() => import('../components/ComingSoon')) 
const NowPlaying = lazy(()=> import('../components/NowPlaying'))
const Detail = lazy(() => import('../views/Movie/Detail'))
const TicketBuy = lazy(() => import("../views/TicketBuy"))
const City = lazy(() => import("../components/City"))

export default function MRoute() {
  return (
    <Suspense fallback={<Loading />}>
          <Routes>
            {/* 嵌套路由组件 */}
            <Route path="/movie" element={<Movie />}>
              <Route index element={<NowPlaying />}></Route>
              <Route path="nowplaying" element={<NowPlaying />}></Route>
              <Route path="comingsoon" element={<ComingSoon />}></Route>
              <Route path="city" element={<City />}></Route>
            </Route>
            {/* <Route path="/" element={<Movie />}></Route> */}
            {/* index嵌套路由，仅匹配父路径时，设置渲染组件 */}
            {/* <Route index element={<Movie />}></Route> */}
            <Route path="/cinema" element={<Cinema />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            {/* 动态路由 /detail/---  
            /detail/:myid/:xx    /detail/---/--- */}
            <Route path="/detail/:myid" element={<Detail />}></Route>
            
            {/* 路由拦截  光用三元运算符不会token后不会刷新，因为没有触发render重新进行判断，用个组件包裹*/}
            {/* <Route path="/center" element={isAuthor() ? <TicketBuy /> : <Redirect to="/mine" />}></Route> */}
            <Route path="/center" element={
            <AuthorComponent>
              {/* 中间子组件可以动态输入 */}
              <TicketBuy /> 
            </AuthorComponent>}></Route>
            
            
            {/* 重定向 */}
            <Route path="*" element={<Navigate to="/movie"/>}></Route>
            {/* 函数式useEffect */}
            <Route path="*" element={<Redirect to="/NotFinding"/>}></Route>
          </Routes>
        </Suspense>
  )
}

// function isAuthor() {
//   let token = localStorage.getItem("token");
//   return Boolean(token)
// }
function AuthorComponent({children}){
  const token = localStorage.getItem("token")
  return token ? children : <Redirect to="mine"/>
}
