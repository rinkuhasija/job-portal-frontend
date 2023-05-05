import { Link } from "react-router-dom"
import JobCard from "../../layout/JobCard/JobCard"
import styles from './allJobsPage.module.css'
import { useEffect, useState } from "react"

function AllJobsPage() {

  //make useState variables for about_company, company_name, job_description, job_position, job_type, location, logo_url, salary, skills_req
  const [about_company, setAboutCompany] = useState(null)
  const [company_name, setCompanyName] = useState(null)
  const [job_description, setJobDescription] = useState(null)
  const [job_position, setJobPosition] = useState(null)
  const [job_type, setJobType] = useState(null)
  const [location, setLocation] = useState(null)
  const [logo_url, setLogoUrl] = useState(null)
  const [salary, setSalary] = useState(null)
  const [skills_req, setSkillsReq] = useState(null)

  const [resData, setResData] = useState([]);


  useEffect(() => {

    const data = async () => {

      const result = await fetch(`https://job-portal-m46l.onrender.com/allJobs`).then(async (data) => await data.json())

      setResData(result)
      
      setAboutCompany(result[0].about_company)
      setCompanyName(result[0].company_name)
      setJobDescription(result[0].job_description)
      setJobPosition(result[0].job_position)

      //result is an array. Loop over it and set all values for useState

      // for (let i = 0; i < result.length; i++) {
      //   setAboutCompany(result[i].about_company)
      //   setCompanyName(result[i].company_name)
      //   setJobDescription(result[i].job_description)
      //   setJobPosition(result[i].job_position)
      //   setJobType(result[i].job_type)
      //   setLocation(result[i].location)
      //   setLogoUrl(result[i].logo_url)
      //   setSalary(result[i].salary)
      //   setSkillsReq(result[i].skills_req)
      // }

      console.log(result);
      console.log(result[0].job_position);
    }

    data();

  }, [])


  return (
    <>

      <div className={styles.navBar}>
        <h2>Jobfinder</h2>

        <div>

          <button > <span id="login">  <Link to={"/login"}> Login </Link>  </span> </button>
          <button ><span id="register"> <Link to={"/register"}> Register </Link>   </span> </button>

        </div>

      </div>


      <>

        {resData.map((job, i) => {
          return <JobCard key={i} job_position={job_position} />
        })}

      </>
    </>
  )
}

export default AllJobsPage