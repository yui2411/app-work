import { Box, SxProps, Theme, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Monthly = () => {
  return (
    <Box className="Monthly" sx={sx}>
      monthly
      <br />
      <Button component={Link} to="/app-schedule_input">
        予定を入力する
      </Button>
      <Button component={Link} to="/app-schedule_edit">
        予定を編集する
      </Button>
      <Button component={Link} to="/app-setting">
        ⚙️🔧
      </Button>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Monthly": {
    width: "100%",
  },
};
