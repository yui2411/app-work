import { Box, SxProps, Theme, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Not_achieved = () => {
  return (
    <Box className="Not_achieved" sx={sx}>
      not_achieved
      <Button component={Link} to="/app-task">
        タスクを入力する
      </Button>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Not_achieved": {
    width: "100%",
  },
};
