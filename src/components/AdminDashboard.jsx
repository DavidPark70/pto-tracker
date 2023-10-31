import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const AdminDashboard = () => {

    const getDaysInMonth = (year, month) => {
        let date = new Date(year, month, 0);
        return date.getDate();
    }

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const columnLenght = getDaysInMonth(todayYear, todayMonth+1);

    let days = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }
    let columns = [];
    let rows = [
        {}
    ];

    for (var i = 1; i <= columnLenght; i++) {
        let tempDate = new Date(todayYear, todayMonth, i);
        console.log(tempDate);
        columns.push({
            field: String(i) + ' ' + days[tempDate.getDay()],
            sortable: false
        })
    }

    let testCol = [
        {field: '1', sortable: false},
        {field: '2', sortable: false},
        {field: '3', sortable: false},
        {field: '4', sortable: false},
        {field: '5', sortable: false},
    ]
    let testRow = [
        {id: 1, 1: 'y'}
    ]
    return (
        <DataGrid 
            rows={testRow} 
            columns={columns} 
            disableColumnMenu={true}    
            disableRowSelectionOnClick={true}
            hideFooterPagination={true}
            hideFooter={true}
        />
    )
}

export default AdminDashboard;