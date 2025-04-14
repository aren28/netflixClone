import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Parts/FirstView.tsx
export const backGroundBanner = {
  width: "100%",
  position: "relative",
  zIndex: "0",
  opacity: "0.6",
};

export const backGroundBannerDetailsBox = {
  position: "absolute",
  bottom: "30%",
  left: "10%",
  width: "31vw",
};

// Button/ButtonParts.tsx
export const detailsButton = {
  display: "flex",
  gap: "10px",
};

// Button/DetailsButton.tsx,  Button/MovieButton.tsx
export const ColorButton = styled(Button)<ButtonProps>(() => ({
  width: "15vw",
  height: "85px",
  backgroundColor: "black",
  color: "white",
  fontSize: 20,
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));
