import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';

// import auth from '../../../firebase.init';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password.length < 7) {
            toast("password  must be greater then 7 characters")
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            // console.log(user);
            toast('Updated profile');
            navigate('/home');
        }
        // const agree = event.target.terms.checked;



    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log("user found", user);
        // navigate('/home');
    }

    return (
        <div className='register-page'>
            <PageTitle title={"Register"}></PageTitle>
            <div className='register-form'>
                <h2 className='register-header please-please py-2' style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? ' ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms"> Accepts Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className=' btn btn-primary w-50 mx-auto mt-2 register-button'
                        type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;