import { Box } from "@mui/material";

// スタイル
import { detailsButton } from "../FirstViewStyle";

import MovieButton from "./MovieButton";
import DetailsButton from "./DetailsButton";

function ButtonParts() {
  return (
    <div>
      <Box component="div" sx={detailsButton}>
        <MovieButton />
        <DetailsButton />
      </Box>
    </div>
  );
}

export default ButtonParts;
