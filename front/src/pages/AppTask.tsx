import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Task_input } from "../modules/app/task_input/Task_input";

// サンプルページのメインの実装
export const AppTask = () => {
  return (
    <Box className="AppTask" sx={sx}>
      <Task_input />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.AppTask": {
    width: "100%",
  },
};
