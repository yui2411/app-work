// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/sample/Header";
import { Mainvisual } from "../modules/sample/Mainvisual";
import { MainContent } from "../modules/sample/MainContent";
import { Footer } from "../modules/sample/Footer";

// サンプルページのメインの実装
export const SamplePage = () => {
  return (
    <Box className="SamplePage" sx={sx}>
      <Header />
      <Mainvisual />
      <MainContent />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.SamplePage": {
    width: "100%",    
  }
};
