import { Box, SxProps, Theme } from "@mui/material";

export const TopPage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      トップページ
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",
  },
};
