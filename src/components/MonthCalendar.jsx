import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const MonthCalendar = ({ rows, columns }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      disableColumnMenu={true}
      disableRowSelectionOnClick={true}
      hideFooterPagination={true}
      hideFooter={true}
      showCellVerticalBorder={true}
      getCellClassName={(params: GridCellParams<any, any, number>) => {
        if (params.value == null) {
          return "";
        }
        return params.value >= "pto" ? "hot" : "";
      }}
      sx={{
        "& .MuiDataGrid-columnSeparator--sideRight": {
          display: "none",
        },
      }}
    />
  );
};

export default MonthCalendar;
