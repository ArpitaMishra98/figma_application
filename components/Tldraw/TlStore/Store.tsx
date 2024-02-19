// import { Tldraw, createTLStore, defaultShapeUtils } from "@tldraw/tldraw"
// import { useState } from "react"

// export default function () {
// 	const [store] = useState(() => {
// 		// Create the store
// 		const newStore = createTLStore({
// 			shapeUtils: defaultShapeUtils,
// 		})

// 		// Get the snapshot
// 		const stringified = localStorage.getItem('my-editor-snapshot')
// 		const snapshot = JSON.parse(stringified as string)

// 		// Load the snapshot
// 		newStore.loadSnapshot(snapshot)

// 		return newStore
// 	})

// 	return <Tldraw persistenceKey="my-persistence-key" store={store} />
// }

import { Container, Grid } from "@mui/material";
import {
  BaseRecord,
  TLShape,
  TLShapeId,
  TLStore,
  TLUiOverrides,
  Tldraw,
  createTLStore,
  defaultShapeUtils,
  useEditor,
} from "@tldraw/tldraw";
import React, { useState } from "react";

// const myOverrides: TLUiOverrides = {
//   actions(editor, actions) {
//     // You can delete actions, but remember to
//     // also delete the menu items that reference them!
//     delete actions['insert-embed']

//     // Create a new action or replace an existing one
//     actions['my-new-action'] = {
//       id: 'my-new-action',
//       label: 'My new action' as any,
//       readonlyOk: true,
//       kbd: '$u',
//       onSelect(source: any) {
//         // Whatever you want to happen when the action is run
//         window.alert('My new action just happened!')
//       },
//     }
//     return actions
//   },
// }
// import {
//   ColorStyle,
//   DashStyle,
//   SizeStyle,
//   Tldraw,
//   TDDocument,
//   TDShapeType,
//   TldrawApp
// } from "@tldraw/tldraw";

// const initialDocument: TDDocument = {
//   id: "doc",
//   name: "New Document",
//   version: TldrawApp.version,
//   pages: {
//     page1: {
//       id: "page1",
//       shapes: {
//         rect1: {
//           id: "rect1",
//           type: TDShapeType.Rectangle,
//           parentId: "page1",
//           name: "Rectangle",
//           childIndex: 1,
//           point: [0, 0],
//           size: [100, 100],
//           style: {
//             dash: DashStyle.Draw,
//             size: SizeStyle.Medium,
//             color: ColorStyle.Blue
//           }
//         },
//         rect2: {
//           id: "rect2",
//           parentId: "page1",
//           name: "Rectangle",
//           childIndex: 2,
//           type: TDShapeType.Rectangle,
//           point: [200, 200],
//           size: [100, 100],
//           style: {
//             dash: DashStyle.Draw,
//             size: SizeStyle.Medium,
//             color: ColorStyle.Blue
//           }
//         }
//       },
//       bindings: {}
//     }
//   },
//   pageStates: {
//     page1: {
//       id: "page1",
//       selectedIds: [],
//       camera: {
//         point: [0, 0],
//         zoom: 1
//       }
//     }
//   },
//   assets: {}
// };
// editor.setCurrentTool('draw')

// type CardShape = TLBaseShape<'card', { w: number; h: number }>

// interface TLBaseShape<Type extends string, Props extends object>
// extends BaseRecord<'shape', TLShapeId> {}

// interface drawProps {
//   parentId: "page:somePage";
//   id: "shape:someId";
//   typeName: "shape";
//   type: "geo";
//   x: 106;
//   y: 294;
//   rotation: 0;
//   index: "a28";
//   opacity: 1;
//   isLocked: false;
//   props: {
//     w: 200;
//     h: 200;
//     geo: "rectangle";
//     color: "black";
//     labelColor: "black";
//     fill: "none";
//     dash: "draw";
//     size: "m";
//     font: "draw";
//     text: "diagram";
//     align: "middle";
//     verticalAlign: "middle";
//     growY: 0;
//     url: "";
//   };
//   meta: {};
// }


// const TldrawWrapper = () => {
//   const [store] = useState(() => {
//     // Create the store
//     const newStore = createTLStore({
//       shapeUtils: defaultShapeUtils,
//     });

//     // Get the snapshot
//     const stringified = localStorage.getItem("my-editor-snapshot");
//     const snapshot = JSON.parse(stringified as any);
//     if (snapshot) {
//       // Load the snapshot
//       newStore?.loadSnapshot(snapshot);
//     }

//     return newStore;
//   });

//   function SaveButton() {
//     const editor = useEditor();
//     return (
//       <button
//         onClick={() => {
//           const snapshot = editor.store.getSnapshot();
//           const stringified = JSON.stringify(snapshot);
//           localStorage.setItem("my-editor-snapshot", stringified);
//         }}
//       >
//         Save
//       </button>
//     );
//   }
//   function LoadButton() {
//     const editor = useEditor();
//     return (
//       <button
//         onClick={() => {
//           const stringified = localStorage.getItem("my-editor-snapshot");
//           const snapshot = JSON.parse(stringified as any);
//           editor.store.loadSnapshot(snapshot);
//         }}
//       >
//         Load
//       </button>
//     );
//   }

//   return (
//     <>
//       <Container>
//         <Grid container>
//           <Grid item xs={2}>
//             <div style={{}}>{SaveButton()}</div>
//           </Grid>
//           <Grid item xs={8}>
//             <div style={{ position: "fixed" }}>
//               <Tldraw />
//             </div>
//           </Grid>
//           <Grid item xs={2}>
//             <div style={{}}>{LoadButton()}</div>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default TldrawWrapper;