import { Box, SxProps, Theme } from "@mui/material";

export const Schedule_edit = () => {
  return (
    <Box className="Schedule_edit" sx={sx}>
      schedule_edit
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Schedule_edit": {
    width: "100%",
  },
};
