import { Outlet } from 'react-router-dom'
import style from '../style/main.module.css'
import Left from './Left'
import Top from './Top'
import { useDispatch, useSelector } from 'react-redux'
import { toogle } from './Stor'
export default function Root(){
    const dispatch=useDispatch()
    if(window.screen.width<344){
        dispatch(toogle(false))
    }
    const toggle=useSelector((state)=>(state.button))
    return(
        <div className={style.main}>
         <Top></Top>
         <div className={style.bottom}>
            {toggle?<Left></Left>:null}
            <Outlet></Outlet>
         </div>
        </div>
    )
}