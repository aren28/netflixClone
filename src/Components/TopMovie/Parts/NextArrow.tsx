import { useContext } from "react";
import { IconButton } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

// モジュール
import TopMovieContext from "../TopMovieContext";

function NextArrow() {
  const {
    currentViewX,
    setCurrentViewX,
    nextView,
    currentViewMovieCount,
    currentWidth,
  } = useContext(TopMovieContext) as {
    currentViewX: number;
    setCurrentViewX: (params: number) => void;
    nextView: boolean;
    currentViewMovieCount: number;
    currentWidth: number;
  };

  const handleNextView = (e: any) => {
    e.preventDefault();
    if (currentViewX == 0) {
      setCurrentViewX(-(currentViewMovieCount * 500 - 100));
    } else {
      setCurrentViewX(-(currentViewX + (currentWidth - currentViewX)));
    }
  };

  return (
    <div>
      {nextView && (
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 4,
            top: "85px",
            right: "0px",
            width: "5rem",
            height: "20rem",
            borderRadius: "0px",
            background: "black",
          }}
          color="primary"
          onClick={handleNextView}
        >
          <NavigateNext fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}

export default NextArrow;
