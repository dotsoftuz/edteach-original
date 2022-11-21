import React from 'react';
import { Footer, Navbar, Loader } from '../../components';
import { useUserContext } from '../../context/userContext';
import App from '../../app';
import Registration from '../../app/layout/index';


function Dashboard(props) {
    const { user, loading } = useUserContext();
    if (loading) {
        return <Loader />
    }
    return (
        <div>

            {loading ? <Loader /> : <> {user ? <App /> : <Registration />}</>}
        </div>
    );
}

export default Dashboard;