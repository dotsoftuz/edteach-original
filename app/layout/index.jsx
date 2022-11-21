import React from 'react';
import { Footer, Navbar } from '../../components';
import { useUserContext } from '../../context/userContext';
import SignIn from '../../components';
import SignUp from '../../components';

function Registration(props) {
    const { registry } = useUserContext();
    return (
        <div>
            <Navbar />
            {registry ? <SignUp /> : <SignIn />}
            <Footer />
        </div>
    );
}

export default Registration;