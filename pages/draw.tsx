// import TldrawWrapper from "@/components/Tldraw/TldrawWrapper";
import { Box, Button, Card, Container, Grid, TextField } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import dynamic from "next/dynamic";
import { auth, storage } from "@/firebase";
// import firebase from 'firebase/app';
import { useState } from "react";
import { Canvas, TLUiOverrides } from "@tldraw/tldraw";
import Drawing from "@tldraw/tldraw";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const TldrawWrapper = dynamic(
  () => import("@/components/Tldraw/TldrawWrapper"),
  {
    ssr: false,
  }
);

export function toBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
    });
  });
}

const Draw = () => {
  const [drawing, setDrawing] = useState<CanvasDrawImage | null>(null);

  const saveDrawingToFirebase = async () => {
    if (!drawing) return;

    const drawingRef = storageRef(storage, "drawings/drawing.png");

  };
  const [image, setImage] = useState<string[] | {}>();

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button>Save</Button>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <TldrawWrapper />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Button>Load</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Draw;
