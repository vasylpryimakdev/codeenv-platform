import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        sx={{
          paddingTop: 10,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: { lg: 30, md: 24, sm: 18, xs: 14 },
        }}
      >
        Ready For Any Team Size
      </Typography>

      <Typography
        variant="div"
        sx={{
          textAlign: "center",
          padding: 4,
          fontSize: { lg: 24, md: 20, sm: 16, xs: 14 },
        }}
      >
        Optimized For Any Size
      </Typography>

      <Box
        sx={{
          display: "flex",
          maring: "auto",
          justifyContent: "center",
          padding: 5,
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{ fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
        >
          Try CodeEnv For Free
        </Button>
        <Button
          sx={{ fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant="outlined"
        >
          Talk To Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
