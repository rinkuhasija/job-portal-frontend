import { Link } from 'react-router-dom'
import styles from './registerForm.module.css'
import { useState } from 'react';

function RegisterForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();
        // props.onLogin(true);

        try {
            let res = await fetch("https://job-portal-m46l.onrender.com/register", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                }),
            });
            let resJson = await res.json();

            if (res.status === 201) {
                setEmail("");
                setPassword("");
                setFirstName("");
                setLastName("");
                alert("SignUp successful. You can login Now.")
                // handleLogin(true);
                //redirect to home
                // window.location.href = "/home";
                // console.log(resJson);
            } else {
                console.log("Error occurred");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className={styles.registerForm}>
                <div className={styles.formContainer}>

                    <h2 id={styles.heading}> Create an Account</h2>
                    <p>Your personal job finder is here</p> <br />

                    <form className={styles.formGroup}>

                        <input type="text" name='name' value={firstName} placeholder='FirstName' id={styles.name} onChange={(e) => setFirstName(e.target.value)} /> <br />
                        <input type="text" name='lastName' value={lastName} placeholder='LastName' id={styles.mobile} onChange={(e) => setLastName(e.target.value)} /> <br />
                        <input type="email" name='email' value={email} placeholder='Email' id={styles.email} onChange={(e) => setEmail(e.target.value)} /> <br />
                        <input type="password" name='password' value={password} placeholder='Password' id={styles.password} onChange={(e) => setPassword(e.target.value)} />

                    </form> <br />

                    <div className={styles.checkboxDiv}>
                        <input type="checkbox" name='checkbox' id={styles.checkbox} />
                        <label htmlFor='checkbox' id={styles.label}> By creating an account, you agree to our terms of use and privacy policy </label> <br /> <br />
                    </div>

                    <button onClick={handleSubmit}>  <span> Create Account </span> </button>
                    <p>Already have an account? <Link to='/login'>Sign In</Link> </p>
                </div>
            </div >
        </>
    )
}

export default RegisterForm