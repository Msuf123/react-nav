import { Outlet } from 'react-router-dom'
import style from '../style/main.module.css'
import Left from './Left'
import Top from './Top'
import { useSelector } from 'react-redux'
export default function Root(){
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