import React, { useState, useEffect } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ReactNetflixPlayer } from "react-netflix-player";

interface ModalController {
  onOpen: boolean;
  onClose: () => void;
  video: string;
}

const MoviePlayer: React.FC<ModalController> = ({ onOpen, onClose, video }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    setTimeout(handleResize, 2000);
  }, [windowWidth, windowHeight]);

  const handleResize = (): void => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${windowWidth}px`,
    height: `${windowHeight}px`,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    background: "black",
  };

  return (
    <div>
      <Modal open={onOpen} onClose={onClose}>
        <Box sx={style}>
          <IconButton
            size="large"
            sx={{
              position: "absolute",
              right: "0px",
              top: "0px",
              zIndex: "11",
              background: "white",
            }}
            onClick={onClose}
          >
            <HighlightOffIcon
              fontSize="large"
              sx={{ background: "white", borderRadius: 10 }}
            />
          </IconButton>
          <ReactNetflixPlayer
            autoControllCloseEnabled={false}
            src={video}
            fullPlayer={false}
            autoPlay={true}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default MoviePlayer;
