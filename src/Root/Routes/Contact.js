import style from '../../style/Routes/contact.module.css'
export default function Contact(){
    return(
        <div className={style.main}>
            <h1>To cantact me</h1>
            <ul>
                <li>Call:+91 7404878385</li>
                <li><a href='https://github.com/Msuf123' target='blank'>Github</a></li>
            </ul>
        </div>
    )
}