import { Box, SxProps, Theme } from "@mui/material";

export const Schedule_input = () => {
  return (
    <Box className="Schedule_input" sx={sx}>
      schedule_input
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Schedule_input": {
    width: "100%",
  },
};
