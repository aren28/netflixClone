import { useContext } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

// モジュール
import TopMovieContext from "../TopMovieContext";

function PrevArrow() {
  const { currentViewX, setCurrentViewX, prevView } = useContext(
    TopMovieContext
  ) as {
    currentViewX: number;
    setCurrentViewX: (params: number) => void;
    prevView: boolean;
  };

  const handlePrevView = (e: any) => {
    e.preventDefault();
    if (currentViewX != 0) {
      setCurrentViewX(0);
    }
  };

  return (
    <div>
      {prevView && (
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 4,
            top: "85px",
            left: "0px",
            width: "5rem",
            height: "20rem",
            borderRadius: "0px",
            background: "black",
          }}
          color="primary"
          onClick={handlePrevView}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}

export default PrevArrow;
