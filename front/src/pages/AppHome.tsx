// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Monthly } from "../modules/app/calendar/Monthly";
import { Weekly } from "../modules/app/calendar/Weekly";
import { Achieved } from "../modules/app/task/Achieved";
import { Not_achieved } from "../modules/app/task/Not_achieved";
import { Search } from "../modules/app/Search";

// サンプルページのメインの実装
export const AppHome = () => {
  return (
    <Box className="AppHome" sx={sx}>
      <Monthly />
      <Weekly />
      <Achieved />
      <Not_achieved />
      <Search />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.SamplePage": {
    width: "100%",
  },
};
