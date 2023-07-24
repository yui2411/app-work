import { Box, SxProps, Theme } from "@mui/material";

export const Theme_color = () => {
  return (
    <Box className="Theme_color" sx={sx}>
      theme_color
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Theme_color": {
    width: "100%",
  },
};
