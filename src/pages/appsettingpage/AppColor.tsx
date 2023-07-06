import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Theme_color } from "../../modules/app/settings/Theme_color";

// サンプルページのメインの実装
export const AppColor = () => {
  return (
    <Box className="AppColor" sx={sx}>
      <Theme_color />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppColor": {
    width: "100%",
  },
};
