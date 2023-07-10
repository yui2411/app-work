// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { SamplePage } from "./pages/SamplePage";
import { AppHome } from "./pages/AppHome";
import { AppScheduleInput } from "./pages/AppScheduleInput";
import { AppScheduleEdit } from "./pages/AppScheduleEdit";
import { AppSetting } from "./pages/AppSetting";
import { AppTask } from "./pages/AppTask";
import { AppColor } from "./pages/appsettingpage/AppColor";
import { AppFonts } from "./pages/appsettingpage/AppFonts";
import { AppWeeks } from "./pages/appsettingpage/AppWeeks";
import { Navigation_bottom } from "./modules/app/Navigation_bottom";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/" element={<TopPage />} />
        {/* サンプルページ */}
        <Route path="/sample" element={<SamplePage />} />
        {/* app-homeページ */}
        <Route path="/app-home" element={<AppHome />} />
        {/* app-schedule-inputページ */}
        <Route path="/app-schedule_input" element={<AppScheduleInput />} />
        {/* app-schedule-inputページ */}
        <Route path="/app-schedule_edit" element={<AppScheduleEdit />} />
        {/* app-settingページ */}
        <Route path="/app-setting" element={<AppSetting />} />
        {/* app-taskページ */}
        <Route path="/app-task" element={<AppTask />} />
        {/* app-fontsページ */}
        <Route path="/app-fonts" element={<AppFonts />} />
        {/* app-weeksページ */}
        <Route path="/app-week_start" element={<AppWeeks />} />
        {/* app-colorページ */}
        <Route path="/app-theme_color" element={<AppColor />} />
        {/* app-naviページ */}
        <Route path="/app-navi" element={<Navigation_bottom />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  },
};
