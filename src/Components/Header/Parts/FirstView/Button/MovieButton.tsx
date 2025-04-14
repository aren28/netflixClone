import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// スタイル
import { ColorButton } from "../FirstViewStyle";

// モーダルコンポネント
import MoviePlayer from "@components/MoviePlayer/MoviePlayer";

function MovieButton() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div>
      <ColorButton
        variant="contained"
        startIcon={<PlayArrowIcon />}
        onClick={() => setOpenVideo(true)}
      >
        再生してみる
      </ColorButton>
      <MoviePlayer
        onOpen={openVideo}
        onClose={() => setOpenVideo(false)}
        video={
          "https://firebasestorage.googleapis.com/v0/b/netflix-clone-647e5.appspot.com/o/TransFormer-rise.mp4?alt=media&token=8a73dd8a-a8ca-4b26-af6d-297e626d16dc&_gl=1*12rq3jh*_ga*MTIwNTMzMDUxOS4xNjg0MzI1MzA3*_ga_CW55HF8NVT*MTY4NjY2NTAzOS4xMi4xLjE2ODY2NjUwODEuMC4wLjA."
        }
      />
    </div>
  );
}

export default MovieButton;
