import { Container, Grid } from "@mui/material";
import {
  BaseRecord,
  TLShapeId,
  TLUiOverrides,
  Tldraw,
  createTLStore,
  defaultShapeUtils,
} from "@tldraw/tldraw";
import React, { useState } from "react";

const myOverrides: TLUiOverrides = {
  actions(editor, actions) {
    // You can delete actions, but remember to
    // also delete the menu items that reference them!
    delete actions["insert-embed"];

    // Create a new action or replace an existing one
    actions["my-new-action"] = {
      id: "my-new-action",
      label: "My new action" as any,
      readonlyOk: true,
      kbd: "$u",
      onSelect(source: any) {
        // Whatever you want to happen when the action is run
        window.alert("My new action just happened!");
      },
    };
    return actions;
  },
};
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
interface TLBaseShape<Type extends string, Props extends object>
  extends BaseRecord<"shape", TLShapeId> {}

// type CardShape = TLBaseShape<'card', { w: number; h: number }>
// export default function () {
// 	const [store] = useState(() => {
// 		// Create the store
// 		const newStore = createTLStore({
// 			shapeUtils: defaultShapeUtils,
// 		})

// 		// Get the snapshot
// 		const stringified = localStorage.getItem('my-editor-snapshot')
// 		const snapshot = JSON.parse(stringified)

// 		// Load the snapshot
// 		newStore.loadSnapshot(snapshot)

// 		return newStore
// 	})

// 	return <Tldraw persistenceKey="my-persistence-key" store={store} />
// }

interface SerializedSchema {
  recordVersions: Record<
    string,
    | {
        version: number;
        subTypeVersions: Record<string, number>;
        subTypeKey: string;
      }
    | {
        version: number;
      }
  >;
}


const TldrawWrapper = () => {
  const [store, setStore] = useState(() => {
    // Create the store
    const newStore = createTLStore({
      shapeUtils: defaultShapeUtils,
    });
  
    // Get the snapshot
    const stringified = localStorage.getItem("my-editor-snapshot");
    const snapshot = JSON.parse(stringified as any);
    if (snapshot) {
      // Load the snapshot
      newStore?.loadSnapshot(snapshot);
    }
  
    return newStore;
  });

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
    </div>
  );
};

export default TldrawWrapper;
