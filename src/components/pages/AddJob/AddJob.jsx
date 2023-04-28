import styles from './addJob.module.css'
import { useState } from 'react';

function AddJob() {

    const [company_name, setCompanyName] = useState("");
    const [logo_url, setLogoUrl] = useState("");
    const [job_position, setJobPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [job_type, setJobType] = useState("");
    const [location, setLocation] = useState("");
    const [job_description, setJobDescription] = useState("");
    const [about_company, setAboutCompany] = useState("");
    const [skills, setSkills] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        const token = localStorage.getItem("token");
        // console.log(token);

        if ( !(company_name || logo_url || job_position || salary || job_type || location || job_description || about_company || skills)) {
            alert("Please enter all the fields");
            return;
        } else {

            try {
                let res = await fetch("https://job-portal-m46l.onrender.com/addJob", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        company_name: company_name,
                        logo_url: logo_url,
                        job_position: job_position,
                        salary: salary,
                        job_type: job_type,
                        location: location,
                        job_description: job_description,
                        about_company: about_company,
                        skills_req: skills,
                        token: token
                    }),
                });
                let resJson = JSON.stringify(res.body);
                console.log(resJson);
                // console.log(resJson.status);
                if (resJson.status === "success") {
                    alert("JOb posted");
                } 
                else if (resJson.status === "error") {
                    alert("Error occurred");
                } 
                else if (resJson.status === "unauthorized") {
                    alert("Unauthorized access");
                }
                

                if (res.status === 201) {
                    setCompanyName("");
                    setLogoUrl("");
                    setJobPosition("");
                    setSalary("");
                    setJobType("");
                    setLocation("");
                    setJobDescription("");
                    setAboutCompany("");
                    setSkills("");
                    alert("Job submitted successfully ")
                    // handleLogin(true);
                    //redirect to home
                    // window.location.href = "/home";
                    // console.log(resJson);
                } else {
                    console.log("Error occurred");
                }
            } catch (err) {
                alert(err)
                console.error(`Error Msg => ${err}`)
            }
        };
    };
    return (
        <div className={styles.addJob}>
            <div className={styles.addJobForm}>
                <h2 id={styles.heading}>Add job description</h2>

                <form className={styles.form} >

                    <label htmlFor="company_name">Company Name</label>
                    <input name='company_name' value={company_name} type="text" placeholder='Enter your company name here ' onChange={(e) => setCompanyName( e.target.value ) } /> <br /> <br />

                    <label htmlFor="logo_url">Add logo URL</label>
                    <input name='logo_url' value={logo_url} type="text" placeholder='Enter the link' onChange={(e) => setLogoUrl( e.target.value ) } /> <br /> <br />


                    <label htmlFor="job_position">Job position </label>
                    <input name='job_position' value={job_position} type="text" placeholder='Enter job position' onChange={(e) => setJobPosition( e.target.value ) } /> <br /> <br />

                    <label htmlFor="salary">Monthly Salary</label>
                    <input name='salary' type="text" value={salary} placeholder='Enter amount in rupees' onChange={(e) => setSalary( e.target.value ) } /> <br /> <br />

                    <label htmlFor="job_type">Job Type</label>
                    <input name='job_type' type="text" value={job_type} placeholder='Enter you company name here' onChange={(e) => setJobType( e.target.value ) } /> <br /> <br />

                    <label htmlFor="location">Enter location </label>
                    <input name='location' type="text" value={location} placeholder='Enter location' onChange={(e) => setLocation( e.target.value ) }/> <br /> <br />

                    <label htmlFor="job_description">Job Description</label>
                    <input name='job_description' type="text" value={job_description} placeholder='Type the job description' onChange={(e) => setJobDescription( e.target.value ) } /> <br /> <br />

                    <label htmlFor="about_company">About Company </label>
                    <input name='about_company' type="text" value={about_company} placeholder='Type about your company' onChange={(e) => setAboutCompany( e.target.value ) } /> <br /> <br />

                    <label htmlFor="skills">Skills Required</label>
                    <input name='skills' type="text" value={skills} placeholder='Enter the must have skills' onChange={(e) => setSkills( e.target.value ) } /> <br /> <br />


                </form>

                <div className={styles.buttons}>

                    <button id={styles.cancelBtn}><span> Cancel </span> </button>
                    <button id={styles.addJobBtn} onClick={handleSubmit}><span>  + Add Job </span></button>
                </div>
            </div>

            <div className={styles.rightImg}>
                <span> Recruiter add job details here </span>
            </div>

        </div>
    )
}

export default AddJob