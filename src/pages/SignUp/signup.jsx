import React from 'react';
import { useSignUp } from './useSignUp';
import SignUpView from './SignUpView';

const SignUp = () => {
    const logic = useSignUp();
    return <SignUpView {...logic} />;
};

export default SignUp;