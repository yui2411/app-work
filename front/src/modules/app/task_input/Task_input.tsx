import { Box, SxProps, Theme } from "@mui/material";

export const Task_input = () => {
  return (
    <Box className="Task_input" sx={sx}>
      task_input
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Task_input": {
    width: "100%",
  },
};
