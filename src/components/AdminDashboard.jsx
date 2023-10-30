import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const AdminDashboard = () => {

    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const remainingDays = Math.ceil((lastDayOfMonth - today) / (1000 * 60 * 60 * 24));
    const monthViewDays = 23;

    console.log(remainingDays);

    let columns = [
        {field: '30'},
        {field: '31'}
    ]

    let rows = [
        {}
    ]

    return (
        <div>AdminDashboard</div>
    )
}

export default AdminDashboard