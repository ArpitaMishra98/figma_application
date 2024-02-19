"use client";
import React, { useEffect, useRef } from 'react'
import Live from '../Live'
import { Room } from '../Room';
import { CollaborativeApp } from '../CollaborativeApp';
import dynamic from "next/dynamic";
import { useState } from "react";
import { Canvas, TLUiOverrides } from "@tldraw/tldraw";
import Drawing from "@tldraw/tldraw";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { handleCanvasMouseDown, handleCanvasMouseUp, handleCanvaseMouseMove, handleResize, initializeFabric } from '@/lib/canvas';
import { useMutation, useStorage } from '@/liveblocks.config';

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
const index = () => {

  const [drawing, setDrawing] = useState<CanvasDrawImage | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const inDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>('rectangle');
  const activeObjectRef = useRef<fabric.Object | null>
  const canvasObjects = useStorage((root) => root.canvasObjects)
  const syncShapeInStorage = useMutation(({ storage }, object) => {
    if (!object) return;

    const { objectId } = object;

    const shapeData = object.toJSON();
    shapeData.objectId = objectId;

    const canvasObjects = storage.get('canvasObjects');

    canvasObjects.set(objectId, shapeData);

  }, []);
  // const saveDrawingToFirebase = async () => {
  //   if (!drawing) return;

  //   const drawingRef = storageRef(storage, "drawings/drawing.png");
  // };

  // const [image, setImage] = useState<string[] | {}>();
  // useEffect(() => {
  //   const canvas = initializeFabric({ canvasRef, fabricRef })


  //   canvas.on("mouse:down", (options) => {
  //     handleCanvasMouseDown({
  //       options,
  //       canvas,
  //       inDrawing,
  //       shapeRef,
  //       selectedShapeRef,
  //     })
  //   })

  //   canvas.on("mouse:move", (options) => {
  //     handleCanvaseMouseMove({
  //       options,
  //       canvas,
  //       inDrawing,
  //       shapeRef,
  //       selectedShapeRef,
  //       syncShapeInStorage
  //     })
  //   })

  //   canvas.on("mouse:up", (options) => {
  //     handleCanvasMouseUp({
  //       canvas,
  //       inDrawing,
  //       shapeRef,
  //       activeObjectRef,
  //       selectedShapeRef,
  //       syncShapeInStorage

  //     })
  //   })
  //   // window.addEventListener("resize", () => {
  //   //   handleResize({ fabricRef })
  //   // })
  // }, [])

  return (
    <>

      <Room>
        <CollaborativeApp />
        <h4>This is the Figma webApplication</h4>
        <Live canvasRef={canvasRef} />

        {/* <TldrawWrapper /> */}


      </Room>
    </>
  )
}

export default index
