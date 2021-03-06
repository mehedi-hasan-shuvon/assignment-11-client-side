import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import authImg from '../../../Images/auth.png'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId == 'password' && !user.emailVerified) {
        return <div className='text-center'>
            <div>
                <div className='container py-2'>
                    <img className='question-img' src={authImg} alt="" />
                </div>
                <h2 className='text-center text-danger'>Your Email is not Verified!!</h2>
                <h2 className='text-center text-success'>Please verify your email address!!</h2>
                <h2 className='test-center text-info'>After verify please refresh the page</h2>
            </div>

            <button
                className='btn btn-primary mb-3'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                send Verification email again
            </button>
            <ToastContainer />
        </div>
    }


    return children;
};

export default RequireAuth;