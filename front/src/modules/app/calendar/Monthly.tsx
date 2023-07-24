import { Box, SxProps, Theme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="monthly" />
      </LocalizationProvider>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Monthly": {
    width: "100%",
  },
  ".monthly": {
    backgroundColor: "#ffd6ea",
  },
};
