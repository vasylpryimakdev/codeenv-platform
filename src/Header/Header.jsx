import React from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  Typography,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: "none" }}>
              {links.map((link, i) => {
                return (
                  <Tab
                    key={i}
                    label={link}
                    sx={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",

                        textUnderlineOffset: "5px",
                      },
                    }}
                  ></Tab>
                );
              })}
            </Tabs>
          </Box>
          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <Button sx={{ mr: 2 }} variant="outlined">
              Talk To Us
            </Button>
            <Button sx={{ ml: 2 }} variant="contained">
              Try For Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <video
          width={"100%"}
          height={"70%"}
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4"
        ></video>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              margin: "auto",
              color: "black",
              textAlign: "center",
            }}
          >
            Build Your Software Hassle Free And With Top Notch Quality
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: 5,
          }}
        >
          <Button variant="outlined" sx={{ mr: 3 }}>
            Signup With Email
          </Button>
          <Button sx={{ ml: 3 }} variant="contained">
            Signup With Google
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
