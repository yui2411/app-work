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
        className="Nav_border"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Box className="nav">
          <Button className="Nav_border_item">月</Button>
          <Button className="Nav_border_item">週</Button>
          <Button className="Nav_border_item">
            <SearchIcon />
          </Button>
          <Button className="Nav_border_item">todo</Button>
        </Box>
        <BottomNavigationAction className="Nav+" icon={<AddCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Nav_size": {
    width: "500",
  },
  ".Nav_border": {
    // border: "1px solid #e7e7ed",
    // backgroundColor: "#e7e7ed",
  },
  ".nav": {
    border: "1px solid #e7e7ed",
    backgroundColor: "#e7e7ed",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".Nav_border_item + .Nav_border_item": {
    //
    //borderHeight: "60%",
  },
  ".Nav_border_item": {
    width: "calc(100% /  4 )",
    display: "flex",
    justifyContent: "center",
    borderLeft: "1px solid #c1c1c1",
    color: "#212121",
    borderRadius: "13px",
    backgroundColor: "#e7e7ed",
  },
  ".Nav+": {},
};
