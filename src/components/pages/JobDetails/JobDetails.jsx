import styles from './jobDetails.module.css'
import { Link } from 'react-router-dom'

function JobDetails() {
    return (
        <div className={styles.jobDetails}>

            <div className={styles.navBar}>
                <h2>Jobfinder</h2>

                <div>

                    <button > <span id="login">  <Link to={"/login"}> Login </Link>  </span> </button>
                    <button ><span id="register"> <Link to={"/register"}> Register </Link>   </span> </button>

                </div>

            </div>


        </div>
    )
}

export default JobDetails