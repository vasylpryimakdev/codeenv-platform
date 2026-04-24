import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ paddingTop: 10, textAlign: "center" }}>
        Ready For Any Team Size
      </Typography>

      <Typography variant="div" sx={{ textAlign: "center", padding: 4 }}>
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
        <Button variant="contained">Try CodeEnv For Free</Button>
        <Button variant="outlined">Talk To Sales</Button>
      </Box>
    </Box>
  );
};

export default Footer;
