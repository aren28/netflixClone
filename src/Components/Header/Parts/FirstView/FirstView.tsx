import { Box, Container } from "@mui/material";
// イメージ
import IMAGES from "@components/Header/Images/HeaderImages";
// スタイル
import { backGroundBanner, backGroundBannerDetailsBox } from "./FirstViewStyle";
import ButtonParts from "./Button/ButtonParts";
import DetailText from "./DetailText/DetailText";

function FirstView() {
  return (
    <div>
      <Container
        sx={{ mt: 1, maxWidth: "100vw!important", position: "relative" }}
      >
        <Box component="img" src={IMAGES.movie_two} sx={backGroundBanner}></Box>
        <Box component="div" sx={backGroundBannerDetailsBox}>
          <DetailText />
          <ButtonParts />
        </Box>
      </Container>
    </div>
  );
}

export default FirstView;
