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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import DrawerComp from "./DrawerComp";

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, position: "sticky" }}>
      {isMatch ? (
        <Box sx={{ display: "flex" }}>
          <ApiIcon sx={{ color: "black", padding: 1 }} />
          <Typography
            variant="h6"
            sx={{ fontFamily: "fantasy", color: "black", padding: 0.5 }}
          >
            CodeEnv
          </Typography>
          <DrawerComp links={links} />
        </Box>
      ) : (
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ApiIcon sx={{ color: "black" }} />
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
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="outlined">Talk To Us</Button>
              <Button variant="contained">Try For Free</Button>
            </Box>
          </Box>
        </Toolbar>
      )}
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
