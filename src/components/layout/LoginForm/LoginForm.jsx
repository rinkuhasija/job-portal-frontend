import styles from './loginForm.module.css'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginRightImg from '../LoginRightImg/LoginRightImg';

function LoginForm(props) {

    const navigate = useNavigate();

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
                const token = resJson;
                localStorage.setItem("token", token)
                // handleLogin(true);
                //redirect to home
                // window.location.href = "/home";

                navigate("/");
                
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
        <div className={styles.containerLoginForm}>
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
                    <Link to={"/home"}>Home</Link> <br />
                    <Link to={"/addjob"}>AddJob</Link>
                </div>
            </div >

            <LoginRightImg />
        </div>
    )
}

export default LoginForm