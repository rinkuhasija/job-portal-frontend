import LoginForm from '../../layout/LoginForm/LoginForm'
import LoginRightImg from '../../layout/LoginRightImg/LoginRightImg'
import styles from './login.module.css'

function Login() {
  return (
    <div className={styles.login}>

        <LoginForm />
        <LoginRightImg />     
           
    </div>
  )
}

export default Login