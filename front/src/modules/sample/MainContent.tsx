import { Box, SxProps, Theme } from "@mui/material";

export const MainContent = () => {
  return (
    <Box className="MainContent" sx={sx}>
      コンテンツ
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.MainContent" : {
    width: "100%",
  },
};
