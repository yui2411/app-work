import { Box, SxProps, Theme } from "@mui/material";

export const Fonts = () => {
  return (
    <Box className="Fonts" sx={sx}>
      fonts
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Fonts": {
    width: "100%",
  },
};
