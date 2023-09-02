import { Box, SxProps, Theme, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Input: React.FC = () => {
  const sx: SxProps<Theme> = {
    // ここにSxPropsのスタイルプロパティを定義
  };

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
