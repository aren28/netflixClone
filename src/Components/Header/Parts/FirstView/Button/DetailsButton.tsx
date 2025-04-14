import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
// スタイル
import { ColorButton } from "../FirstViewStyle";

// モーダルコンポネント
import MovieInformation from "@components/MovieInformation/MovieInformation";

function DetailsButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ColorButton
        variant="contained"
        startIcon={<InfoIcon />}
        onClick={() => setOpenModal(true)}
      >
        詳細情報
      </ColorButton>
      <MovieInformation
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
      />
    </div>
  );
}

export default DetailsButton;
