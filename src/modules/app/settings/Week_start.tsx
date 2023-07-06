import { Box, SxProps, Theme } from "@mui/material";

export const Week_start = () => {
  return (
    <Box className="Week_start" sx={sx}>
      week_start
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Week_start": {
    width: "100%",
  },
};
