import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List, ListItem, Box } from "@mui/material";
import { TopMovieDetails } from "@database/TopMovieDetails/TopMovieDetails";

import MoviePlayer from "../MoviePlayer/MoviePlayer";
import "./css/topmovie.css";

// モジュール
import { TopMovieContextValueProvider } from "./TopMovieContext";
import LeftArrow from "./Parts/PrevArrow";
import NextArrow from "./Parts/NextArrow";
import HoverVideo from "./Parts/HoverVideo";
import PlainVideo from "./Parts/PlainVideo";

interface HoverState {
  [key: number]: boolean;
}

interface newHoverState {
  [key: number]: boolean;
}

const Card = (MovieHoverStatusImg: any, id: number) => {
  return <HoverVideo MovieHoverStatusImg={MovieHoverStatusImg} id={id} />;
};

const Initial = (rankingNumber: any, rankingBackground: string) => {
  return (
    <PlainVideo
      rankingNumber={rankingNumber}
      rankingBackground={rankingBackground}
    />
  );
};

function TopMovie() {
  const [openVideo, setOpenVideo] = useState(false);
  const [video, setVideo] = useState<string>("");
  const [hoverId, setHoverId] = useState(0);
  const [hoverIdArray, setHoverIdArray] = useState<HoverState>(
    Array(TopMovieDetails.length).fill(false)
  );

  const handleCloseVideo = () => setOpenVideo(false);

  const setId = (id: number, e: any) => {
    e.preventDefault();
    setHoverId(id);
    setHoverIdArray((prevState: any) => {
      const newList: newHoverState = [...prevState];
      newList[`${id}`] = true;
      return newList;
    });
  };

  const removeId = (e: any) => {
    e.preventDefault();
    setHoverIdArray((prevState: any) => {
      const newList: newHoverState = [...prevState];
      newList[`${hoverId}`] = false;
      return newList;
    });
  };

  const handleHover = () => {
    return TopMovieDetails.map((_data, index) => (
      <ListItem
        key={index}
        id={`${index}`}
        sx={containerMovieItem}
        component={motion.div}
        onMouseEnter={(e) => {
          const target = e.target as any;
          setId(target.id, e);
        }}
        onMouseLeave={(e) => {
          removeId(e);
        }}
        className="movieHover"
      >
        {hoverIdArray[index]
          ? Card(TopMovieDetails[index].MovieHoverStatusImg, index)
          : Initial(
              TopMovieDetails[index].rankingImg,
              TopMovieDetails[index].rankingBackground
            )}
      </ListItem>
    ));
  };

  const [currentViewX, setCurrentViewX] = useState(0);
  const currentViewMovieCount = Math.floor(window.innerWidth / 500);
  const currentWidth = 500 * 10;

  const [nextView, setNextView] = useState(true);
  const [prevView, setPrevView] = useState(false);

  useEffect(() => {
    if (currentViewX != 0) {
      setPrevView(true);
    } else {
      setPrevView(false);
    }

    if (currentViewX == 0) {
      setNextView(true);
    } else {
      setNextView(false);
    }
  }, [currentViewX]);

  return (
    <div>
      <TopMovieContextValueProvider
        value={{
          setVideo,
          setOpenVideo,
          currentViewX,
          setCurrentViewX,
          nextView,
          prevView,
          currentViewMovieCount,
          currentWidth,
        }}
      >
        <Box component={motion.div} className="container" sx={containerMovie}>
          <LeftArrow />
          <List
            component={motion.div}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "5000px",
              height: "500px",
              marginLeft: 5,
              overflowX: "visible",
              position: "relative",
              zIndex: 3,
            }}
            animate={{ x: currentViewX }}
            transition={{ duration: 0.8 }}
          >
            {handleHover()}
          </List>
          <NextArrow />
          <MoviePlayer
            onOpen={openVideo}
            onClose={handleCloseVideo}
            video={video}
          />
        </Box>
      </TopMovieContextValueProvider>
    </div>
  );
}

const containerMovie = {
  overflow: "hidden",
  position: "relative",
  top: "-150px",
  marginLeft: 2,
};

const containerMovieItem = {
  position: "relative",
  zIndex: "3",
  width: "450px",
  justifyContent: "flex-end",
  paddingLeft: "70px",
  marginRight: "35px",
};

export default TopMovie;
