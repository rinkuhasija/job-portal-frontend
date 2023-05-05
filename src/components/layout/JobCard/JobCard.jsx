import styles from './jobCard.module.css'
import logo_url from '../../../assets/first-job-img.png'
import userSvg from '../../../assets/user.png'
import india from '../../../assets/india.png'

function JobCard({job_position}) {

    const data = {
        job_title: 'Software Engineer',
        company_name: 'Google',
        salary: '50,000',
        location: 'Bangalore',
        job_type: 'Full Time',
        skills: ["css", "React", "JavaScript", "ES6"]
    }

    return (
        <div className={styles.jobCard}>

            <div className={styles.companyImg}>
                <img src={logo_url} alt="company_image" />
            </div>

            <div className={styles.jobData}>

                <h3>{job_position}</h3>

                <div id={styles.flex1}>

                    <p> <img style={{ marginLeft: '17px'}} src={userSvg} alt="" /> 11-50</p>
                    <p>{data.salary}</p>
                    <img src={india} alt="" /> 
                    <p id={styles.location}> {data.location}</p>

                </div>

                <div className={styles.flex2}>

                    <p className={styles.jobType}>{data.job_type}</p>
                    <p className={styles.jobType}> Remote </p>

                </div>

            </div>

            <div className={styles.skills}>

                <div id={styles.tags}>
                    
                    <pre>{data.skills[0]}</pre>
                    <pre>{data.skills[1]}</pre>
                    <pre>{data.skills[2]} </pre>
                    <pre>   {data.skills[3]} </pre>

                </div>

                <button><span> View details </span>  </button>

            </div>

        </div>
    )
}

export default JobCard