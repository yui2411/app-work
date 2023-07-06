import { Box, SxProps, Theme } from "@mui/material";

export const Search = () => {
  return (
    <Box className="Search" sx={sx}>
      search
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Search": {
    width: "100%",
  },
};
