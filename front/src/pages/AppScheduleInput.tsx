// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Schedule_input } from "../modules/app/calendar_input/Schedule_input";

// サンプルページのメインの実装
export const AppScheduleInput = () => {
  return (
    <Box className="AppScheduleInput" sx={sx}>
      <Schedule_input />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppScheduleInput": {
    width: "100%",
  },
};
