import styles from "./Footer.module.css"
import profile from "../../images/profile.svg"
import report from "../../images/report.svg"
import home from "../../images/home.svg"
import FooterCards from "./FooterCards"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <div className={styles.footer}>
           <Link to='/dashboard'><FooterCards src={report} text="Dashboard"/></Link>
           <Link to='/'><FooterCards src={home} text="Login"/></Link>
           <Link to='/delivery'><FooterCards src={profile} text="Delivery"/></Link>
        </div>
    )
}