import * as React from "react";
import { Box, SxProps, Theme, Button } from "@mui/material";
import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

export const Navigation_bottom = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="Nav_size" sx={sx}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      >
        <BottomNavigationAction
          tabIndex={0}
          className="Nav_border_item"
          label="月"
        />
        <BottomNavigationAction
          tabIndex={1}
          className="Nav_border_item"
          label="週"
        />
        <BottomNavigationAction
          tabIndex={2}
          className="Nav_border_item"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          tabIndex={3}
          className="Nav_border_item"
          label="todo"
        />
      </BottomNavigation>
      <IconButton className="Nav+">
        <AddCircleIcon className="icon_button" />
      </IconButton>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Nav_size": {
    width: "100%",
    display: "flex",
  },
  ".Nav_border": {
    width: "100%",
    backgroundColor: "#e7e7ed",
  },
  ".Nav_border_item": {
    justifyContent: "center",
    borderLeft: "1px solid #c1c1c1",
    color: "#414141",
    backgroundColor: "#e7e7ed",
    width: "calc(100% / 4)",
    borderRadius: "17px",
    maxWidth: "initial",
  },
  ".MuiBottomNavigationAction-label": {
    fontSize: "20px",
  },
  ".MuiBottomNavigation-root": {
    width: "100%",
    maxWidth: "initial",
  },
  ".Nav+": {},
  ".icon_button": {
    color: "#d3d",
    width: "50px",
    height: "50px",
  },
};
