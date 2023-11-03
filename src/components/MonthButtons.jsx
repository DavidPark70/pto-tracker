import React from "react";

import { Box, Button, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MonthButtons = ({ month }) => {
  return (
    <Box display="flex">
      <Button aria-label="left button icon">
        <NavigateBeforeIcon />
      </Button>
      <Typography
        sx={{
          p: 1,
        }}
      >
        {month}
      </Typography>
      <Button aria-label="right button icon">
        <NavigateNextIcon />
      </Button>
    </Box>
  );
};

export default MonthButtons;
