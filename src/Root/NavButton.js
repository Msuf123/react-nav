import { useDispatch } from 'react-redux'
import style from '../style/navbutton.module.css'
import { toogle } from './Stor'
export default function NavButton(){
    const dispatch=useDispatch()
    return(
        <div className={style.main} tabIndex={1}
        onClick={()=>{
            dispatch(toogle(true))
        }}
        >
            <div className={style.one}></div>
            <div></div>
            <div></div>
        </div>
    )
}