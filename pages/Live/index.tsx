"use client";
import LiveCursor from '@/components/cursor/livecursor';
import { useMyPresence, useOthers } from '@/liveblocks.config'
import React, { useCallback, useState } from 'react'
import { Box} from "@mui/material";
import dynamic from "next/dynamic";

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

type Props ={
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}


const Live = ({ canvasRef}:Props) => {


const [drawing, setDrawing] = useState<CanvasDrawImage | null>(null);
 const others = useOthers();
const [{ cursor }, updateMyPresence] = useMyPresence() as any;
const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({cursor:{x, y}});

  }, [])

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    

    updateMyPresence({cursor:null, message:null});
  }, [])


  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({cursor:{ x, y }});
  }, [])

  return (
    <Box 
    onPointerMove={handlePointerMove}
    onPointerLeave={handlePointerLeave}
    onPointerDown={handlePointerDown}
    id="canvas"
    sx={{
      height:"100vh",
      width:"100vw"
    }}
    className="cursorlive"

    >
    <canvas ref={canvasRef}/>
    <TldrawWrapper />
      <LiveCursor others={others} />
         
    </Box>
  )
}

export default Live
