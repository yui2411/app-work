import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Fonts } from "../../modules/app/settings/Fonts";

// サンプルページのメインの実装
export const AppFonts = () => {
  return (
    <Box className="AppFonts" sx={sx}>
      <Fonts />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppFonts": {
    width: "100%",
  },
};
