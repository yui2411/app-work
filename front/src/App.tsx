// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { useState, useEffect, useContext } from "react";
import { getMonth } from "./util";
import { CalendarHeader } from "../src/modules/app/calendar_comp/Calendarheader";
import { Month } from "../src/modules/app/calendar_comp/Month";
import { GlobalContext } from "../src/modules/app/calendar_contx/GlobalContext";
import { EventModal } from "../src/modules/app/calendar_comp/EventModal";
import { Input } from "./modules/app/calendar_comp/input";
import { CalenderPage } from "./pages/CalenderPage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/top" element={<TopPage />} />
        {/* カレンダーページ */}
        <Route path="/" element={<CalenderPage />} />
        {/* app-inputページ */}
        <Route path="/input" element={<Input />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  },
};
