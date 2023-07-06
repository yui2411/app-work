import { Box, SxProps, Theme, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Achieved = () => {
  return (
    <Box className="Achieved" sx={sx}>
      achieved
      <Button component={Link} to="/app-task">
        タスクを入力する
      </Button>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Achieved": {
    width: "100%",
  },
};
