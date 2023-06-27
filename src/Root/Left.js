import { NavLink } from 'react-router-dom'
import style from '../style/left.module.css'
import { useDispatch } from 'react-redux'
import { toogle } from './Stor'
export default function Left(){
  const dispatch=useDispatch()
    return (
        <div className={style.main}>
          <div>
          <NavLink to='/' className={({isActive})=>(isActive?style.active:style.inactive)}><h1>Home</h1></NavLink>
          <NavLink to='/guide' className={({isActive})=>(isActive?style.active:style.inactive)}><h1>Guide</h1></NavLink>
          <NavLink to='/info' className={({isActive})=>(isActive?style.active:style.inactive)}><h1>Info</h1></NavLink>
          <NavLink to='/contact' className={({isActive})=>(isActive?style.active:style.inactive)}><h1>Contact</h1></NavLink>
          
          </div>
          <div>
            <button
            onClick={()=>{
             dispatch(toogle(false))
             
            }}
            >&#10005;</button>
          </div>
        </div>
    )
}