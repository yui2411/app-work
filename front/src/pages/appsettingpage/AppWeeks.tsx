import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Week_start } from "../../modules/app/settings/Week_start";

// サンプルページのメインの実装
export const AppWeeks = () => {
  return (
    <Box className="AppWeeks" sx={sx}>
      <Week_start />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppWeeks": {
    width: "100%",
  },
};
