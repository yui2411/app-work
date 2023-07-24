// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Schedule_edit } from "../modules/app/calendar_input/Schedule_edit";

// サンプルページのメインの実装
export const AppScheduleEdit = () => {
  return (
    <Box className="AppScheduleEdit" sx={sx}>
      <Schedule_edit />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppScheduleEdit": {
    width: "100%",
  },
};
