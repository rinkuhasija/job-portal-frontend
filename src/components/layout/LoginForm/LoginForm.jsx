import styles from './loginForm.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        props.onLogin(true);
        // console.log('LoginForm login state:', login);

        if(!email || !password) {
            alert("Please enter email and password");
        } else {

        try {
            let res = await fetch("https://job-portal-m46l.onrender.com/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            let resJson = await res.json();

            if (res.status === 200) {
                setEmail("");
                setPassword("");
                alert(`Hello ${email.slice(0, (email.length-10))} . You are successfully Logged in`)
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
    }


    return (
        <>
            <div className={styles.loginForm}>
                <div className={styles.formContainer}>

                    <h2> Already have an account?</h2>
                    <p>Your personal job finder is here</p> <br />

                    <form className={styles.formGroup} >
                        <input type="email" value={email} name='email' placeholder='Email' id={styles.email} onChange={(e) => setEmail(e.target.value)} /> <br />
                        <input type="password" value={password} name='password' placeholder='Password' id={styles.password} onChange={(e) => setPassword(e.target.value)} />

                    </form> <br />

                    <button onClick={handleSubmit}>  <span> Sign in </span> </button>
                    <p>Don't have an account? <Link to='/register'>Sign Up </Link> </p>
                    <Link to={"/home"}>Home</Link>
                </div>
            </div >
        </>
    )
}

export default LoginForm