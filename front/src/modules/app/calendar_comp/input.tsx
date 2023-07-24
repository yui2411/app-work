import { Box, SxProps, Theme, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Input = () => {
  return (
    <Box className="Input" sx={sx}>
      input
      <br />
      <Box>予定を入力する</Box>
      <TextField />
      <Box>詳細</Box>
      <TextField />
      <Box>予定を編集する</Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Input": {
    width: "100%",
  },
  ".monthly": {
    backgroundColor: "#ffd6ea",
  },
};
