import LoginRightImg from '../../layout/LoginRightImg/LoginRightImg'
import RegisterForm from '../../layout/RegisterForm/RegisterForm'
import styles from './register.module.css'

function Register() {
  return (
    <div className={styles.register}>

        <RegisterForm />
        <LoginRightImg /> 
           
    </div>
  )
}

export default Register