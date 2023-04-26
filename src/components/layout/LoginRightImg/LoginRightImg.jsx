import { Link } from 'react-router-dom';
import styles from './loginRightImg.module.css'

function LoginRightImg() {
    return (
        <>
            <div className={styles.loginRightImg}>
                <span> Your Personal Job Finder </span>
            </div>
            <Link to={"/login"}>Login</Link>
        </>
    )
}

export default LoginRightImg;