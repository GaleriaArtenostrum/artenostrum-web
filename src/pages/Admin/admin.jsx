import React from 'react';
import { useAdmin } from './useAdmin';
import AdminView from './AdminView';

const Admin = () => {
    const logic = useAdmin();
    return <AdminView {...logic} />;
};

export default Admin;