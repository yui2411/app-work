import { Box, SxProps, Theme, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Setting = () => {
  return (
    <Box className="Setting" sx={sx}>
      Setting
      <Button component={Link} to="/app-fonts">
        🅰️
      </Button>
      <Button component={Link} to="/app-theme_color">
        🎨
      </Button>
      <Button component={Link} to="/app-week_start">
        週の始め
      </Button>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Setting": {
    width: "100%",
  },
};
