import React from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  ImageList,
  ImageListItem,
} from "@mui/material";

const ContentItem = ({ title, description, img, swap }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4, lg: 5, xl: 8 },
        display: "flex",
        flexDirection: { xs: "column", sm: swap ? "row-reverse" : "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 8 },
        bgcolor: swap && "#fff",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            color: "#734950",
            fontSize: { lg: 32, md: 28, sm: 24, xs: 20 },
          }}
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            maxWidth: "600px",
            fontSize: { lg: 24, md: 20, sm: 16, xs: 14 },
          }}
        >
          {description}
        </Typography>
      </Box>
      <ImageList sx={{ width: "100%", maxWidth: "800px" }} cols={1}>
        <ImageListItem>
          <img
            src={img}
            alt={title}
            loading="lazy"
            style={{
              borderRadius: 20,
            }}
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default ContentItem;
