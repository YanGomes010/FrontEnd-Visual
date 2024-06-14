import Navbar from "../CompsDashBoard/NavBar"
import styles from "./Delivery.module.css"
import DashDelivery from "../CompsDelivery/DashDelivery"
import Budget from "../CompsDelivery/Budget"
import Motorbike from "../../images/motorbike.svg"
import Button from "../CompsDashBoard/ButtonDefault"
import Accept from "../../images/accept.svg"
import Close from "../../images/close_black_24dp.svg"
import ButtonDelivery from "../CompsDelivery/ButtonDelivery"
import Timeline from "../CompsDelivery/TimeLine"


export default function Delivery(){
    return(
        <div className={styles.containerAllDelivery}>
            <Navbar to="/dashboard" text="Nova entrega"/>
           <DashDelivery text="Tempo Estimado" text_2="Número de ID" time="30 Min" ident="#6789"/>
           <Budget price="R$ 13,75"  textPrice="Valor da Entrega"/>
           <ButtonDelivery src={Motorbike} title="Entrega" text="Percurso Total: 8km"/>
           <Timeline/>
            <Button href="/"  src={Accept} className={styles.accept}  text="Aceitar"/>
            <Button href="/"  src={Close} className={styles.close} text="Rejeitar"/>
        </div>
    )
}
