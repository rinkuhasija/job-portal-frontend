import JobCard from "../../layout/JobCard/JobCard"
import styles from './allJobsPage.module.css'

function AllJobsPage() {

    const data = ["", "", "", "", ""]
  return (
    <>
    
    <div className={styles.navBar}>
        <h2>Jobfinder</h2>

        <button>Login</button>
        <button>Register</button>
        
    </div>


    <>
        
        {data.map( (job, i) => {
            return <JobCard key={i} />
        })}
        
    </>
    </>
  )
}

export default AllJobsPage