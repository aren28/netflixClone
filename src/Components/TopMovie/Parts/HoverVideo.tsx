import { useContext } from "react";
import {
  Paper,
  CardContent,
  Box,
  ListItemIcon,
  CardActions,
  Button,
} from "@mui/material";
import { PlayCircle, Add, ThumbUpOffAlt } from "@mui/icons-material";
import { motion } from "framer-motion";

import { TopMovieVideo } from "@database/TopMovieDetails/TopMovieDetails";

// モジュール
import TopMovieContext from "../TopMovieContext";

function HoverVideo(MovieHoverStatusImg: any, id: number) {
  const { setOpenVideo, setVideo } = useContext(TopMovieContext) as {
    setOpenVideo: (params: boolean) => void;
    setVideo: (params: string) => void;
  };

  const handleOpenVideo = (e: any) => {
    setOpenVideo(true);
    setVideo(TopMovieVideo[e.target.id].videoUrl);
  };

  return (
    <div>
      <Paper
        id={id.toString()}
        component={motion.div}
        initial={{ scale: 0, opacity: 0, translateX: 0 }}
        animate={{ scale: 1.25, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "30px",
          position: "absolute",
          right: "0px",
          top: "40px",
          zIndex: 4,
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
        onClick={(e) => {
          handleOpenVideo(e);
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Box
            component="img"
            id={id.toString()}
            src={MovieHoverStatusImg.MovieHoverStatusImg}
            sx={{
              width: "100%",
              borderTopLeftRadius: "35px",
              borderTopRightRadius: "35px",
            }}
          ></Box>
          <ListItemIcon sx={{ mt: 2, ml: 1 }}>
            <PlayCircle color="primary" />
            <Add color="primary" />
            <ThumbUpOffAlt color="primary" />
          </ListItemIcon>
        </CardContent>
        <CardActions>
          <Button size="small">種類：ドラマー、恋愛、SLICE OF LIFE</Button>
        </CardActions>
      </Paper>
    </div>
  );
}

export default HoverVideo;
