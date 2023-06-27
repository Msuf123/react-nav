import { useSelector } from 'react-redux'
import style from '../style/top.module.css'
import NavButton from './NavButton'
export default function Top(){
    const val=useSelector((state)=>(state.button))
    console.log(val)
    
    return(
        <div className={style.main}>
            <NavButton></NavButton>
            <h1>Job Freaks</h1>
        </div>
    )
}