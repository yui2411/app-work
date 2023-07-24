// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { SamplePage } from "./pages/SamplePage";
import { AppHome } from "./pages/AppHome";
import { AppScheduleInput } from "./pages/AppScheduleInput";
import { AppSetting } from "./pages/AppSetting";
import { AppTask } from "./pages/AppTask";
import { AppColor } from "./pages/appsettingpage/AppColor";
import { AppFonts } from "./pages/appsettingpage/AppFonts";
import { AppWeeks } from "./pages/appsettingpage/AppWeeks";
import { Navigation_bottom } from "./modules/app/Navigation_bottom";
import { Input } from "./modules/app/calendar_comp/input";
import { CalenderPage } from "./pages/CalenderPage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/" element={<TopPage />} />
        {/* カレンダーページ */}
        <Route path="/app" element={<CalenderPage />} />
        {/* app-inputページ */}
        <Route path="/app-input" element={<Input />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  },
};
