import { Box, Typography } from "@mui/material";
// イメージ
import IMAGES from "@components/Header/Images/HeaderImages";
import CurrentRanking from "./CurrentRanking";

function DetailText() {
  return (
    <div>
      <Box
        component="img"
        src={IMAGES.movie_two_logo}
        sx={{
          mb: 5,
          position: "absolute",
          top: "-17rem",
          left: "-3rem",
          width: "670px",
        }}
      ></Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CurrentRanking />
        <Typography sx={{ fontSize: 65, fontWeight: "900", color: "#FFFFFF" }}>
          #10 トップ映画
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "white",
          fontWeight: "900",
          mb: 3,
          textShadow: "rgba(0, 0, 0, 0.45) 2px 2px 4px",
          letterSpacing: "4px",
        }}
      >
        オプティマス・プライムとオートボットたちは、これまでで最大の挑戦に挑みます。惑星全体を破壊する可能性のある新たな脅威が出現したとき、彼らは地球を救うためにマキシマルズとして知られるトランスフォーマーの強力な一派とチームを組まなければなりません。
      </Typography>
    </div>
  );
}

export default DetailText;
