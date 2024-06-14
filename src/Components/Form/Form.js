import styles from "./Form.module.css";
import Input from "./Input";
import ShowPassword from "../../images/eye.svg";
import HidePassword from "../../images/eye_hide.svg"
import { Link } from "react-router-dom";
import { useState } from "react"
export default function Form() {

  const [type, setType]= useState("password")
  const [icon, setIcon]= useState(ShowPassword)

const handleToggle=()=>{
  if(type==="password"){
    setType("text")
    setIcon(HidePassword)
  }else{
    setType("password")
    setIcon(ShowPassword)
  }
}

  return (
    <div className={styles.container_form}>
      <form>
        <span className={styles.span_title_form}>Login</span>
        <Input
          text="Email ou Telefone"
          name="user"
          id="email_user"
          placeholder="example@.com.br"
          type="email"
          src=""
        />
        <Input
          text="Senha"
          name="password"
          id="password_user"
          placeholder="********"
          type={type}
          src={icon}
          onClick={handleToggle}
        />
        <div className={styles.containerForgot}>
        <a className={styles.forgot} href="/">Esqueci minha senha</a>
        </div>
        <Link style={{textDecoration:"none"}} to="/dashboard"> <Input  type="submit" value="Entrar" src="" /></Link>
       
        <div className={styles.container_create_account}>
          <span className={styles.span_account}>
            Não tem uma Conta? <a href="/"> Criar agora!</a>
          </span>
        </div>
        <div className={styles.login_google}>
        <span>Entrar com</span>

        <a href="/">Continuar com o google</a>
      </div>
      </form>
    
    </div>
  );
}
