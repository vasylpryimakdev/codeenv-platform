import React, { useState } from "react";
import {
  Drawer,
  ListItemButton,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item, i) => (
            <ListItemButton key={i} onClick={() => setOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ ml: "auto" }} onClick={() => setOpen(true)}>
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
