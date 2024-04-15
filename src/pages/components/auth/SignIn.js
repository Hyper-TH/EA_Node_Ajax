import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const SignIn = () => {
    const navigate = useNavigate();

    const guestDirect = () => {
        navigate('index');
    };

    return (
        <>
        <div className='sub_container'>
            <div className='sign_in_container'>
                <h1 className='sign_in_title'>
                    Sign in to your account
                </h1>

                <button className='guest_btn' onClick={guestDirect}>
                    Login as guest
                </button>
            </div>
        </div>
        </>
    )
};