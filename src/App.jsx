import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LoginRightImg from './components/layout/LoginRightImg/LoginRightImg'
import LoginForm from './components/layout/LoginForm/LoginForm'
import RegisterForm from './components/layout/RegisterForm/RegisterForm'
import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import ErrorPage from './components/pages/ErrorPage/ErrorPage'
import AddJob from './components/pages/AddJob/AddJob';
import JobCard from './components/layout/JobCard/JobCard';
import AllJobsPage from './components/pages/AllJobsPage/AllJobsPage';
import JobDetails from './components/pages/JobDetails/JobDetails';

function App() {

  const [login, setLogin] = useState(false)

  function handleLogin(newLoginValue) {
    // console.log('handleLogin called with:', newLoginValue);
    setLogin(newLoginValue)
  }

  // console.log('ParentComponent login state:', login);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={login ? <LoginRightImg /> : <ErrorPage />} />
          <Route path='/addJob' element={<AddJob />} />
          <Route path='/' element={<AllJobsPage />} />
          <Route path='/jobdetail' element={<JobDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
