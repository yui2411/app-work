import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Setting } from "../modules/app/settings/Setting";

// サンプルページのメインの実装
export const AppSetting = () => {
  return (
    <Box className="AppSetting" sx={sx}>
      <Setting />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppSetting": {
    width: "100%",
  },
};
