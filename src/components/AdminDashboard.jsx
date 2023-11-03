import React, { useState } from "react";

import { Box } from "@mui/material";

import MonthCalendar from "./MonthCalendar";
import MonthButtons from "./MonthButtons";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

const AdminDashboard = () => {
  const [today, setToday] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    let date = new Date(year, month, 0);
    return date.getDate();
  };

  let columns = [
    {
      field: "Employee",
      sortable: false,
      width: 100,
      headerClassName: "employee-header",
    },
  ];
  let rows = [
    { id: 1, Employee: "Mai", "1 Wed": "pto" },
    { id: 2, Employee: "Emily", "6 Mon": "pto", "7 Tue": "pto" },
  ];

  let columnLenght = getDaysInMonth(today.getFullYear(), today.getMonth() + 1);
  for (var i = 1; i <= columnLenght; i++) {
    let tempDate = new Date(today.getFullYear(), today.getMonth(), i);
    columns.push({
      field: String(i) + " " + days[tempDate.getDay()],
      sortable: false,
      width: 70,
    });
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        "& .cold": {
          backgroundColor: "#b9d5ff91",
          color: "#1a3e72",
        },
        "& .hot": {
          backgroundColor: "#ff943975",
          color: "#1a3e72",
        },
        "& .employee-header": {
          borderRightWidth: "1px",
          borderRightStyle: "solid",
        },
      }}
    >
      <MonthButtons month={month[today.getMonth()]} />
      <MonthCalendar rows={rows} columns={columns} />
    </Box>
  );
};

export default AdminDashboard;
