import React from "react";

import { Box, Typography } from "@mui/material";

const ContentItem = ({ title, description, img, swap }) => {
  return (
    <Box
      sx={{
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: swap ? "row-reverse" : "row",
        bgcolor: swap && "#fff",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#734950",
            padding: 3,
            fontSize: { lg: 32, md: 28, sm: 24, xs: 20 },
          }}
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          sx={{ padding: 3, fontSize: { lg: 24, md: 20, sm: 16, xs: 14 } }}
          variant="caption"
        >
          {description}
        </Typography>
      </Box>
      <img
        src={img}
        alt={title}
        loading="lazy"
        style={{
          boxShadow: "10px 10px 20px #ccc",
          borderRadius: 20,
          height: "40%",
          width: "40%",
        }}
      />
    </Box>
  );
};

export default ContentItem;
