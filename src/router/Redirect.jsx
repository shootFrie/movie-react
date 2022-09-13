import  { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Redirect(to) {
  const navigate = useNavigate() // useNavigate可以用来跳转传值
  useEffect(()=> {
    navigate(to, {replace: true})
  })
  return null;
}
