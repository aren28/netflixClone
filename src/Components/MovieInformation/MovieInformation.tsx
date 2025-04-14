import { useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material/";
import CancelIcon from "@mui/icons-material/Cancel";
import pic1 from "@database/ModalDetails/MovieOne/pic1.webp";

interface ModalProps {
  closeModal: (params: any) => void;
  openModal: boolean;
}

const MovieInformation: React.FC<ModalProps> = ({ closeModal, openModal }) => {
  const descriptionElementRef = useRef<HTMLElement>(null);

  return (
    <>
      <Dialog
        open={openModal}
        onClose={closeModal}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{ background: "black", color: "white" }}
        >
          Movie Title
        </DialogTitle>
        <DialogActions sx={{ background: "black", color: "white" }}>
          <Button
            onClick={closeModal}
            sx={{ position: "absolute", top: "20px", right: "20px" }}
          >
            <CancelIcon fontSize={"large"} color="primary" />
          </Button>
        </DialogActions>
        <DialogContent sx={{ background: "black", color: "white" }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
          >
            <Box component="img" src={pic1} />
          </DialogContentText>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            sx={{ color: "white" }}
          >
            Two orphans raised as brothers become rivals as they vie for the
            title of Wizard King, the highest magical rank in the land.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieInformation;
