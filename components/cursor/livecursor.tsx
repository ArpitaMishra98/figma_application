import { LiveCursorProps } from '@/Typescript/interfaces/type';
import React from 'react'
import Cursor from './cursor';
import { COLORS } from '@/constants';


const LiveCursor = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {

    console.log(presence, connectionId);
    if (presence == null || !presence?.cursor) {
      return null;
    }

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};

export default LiveCursor


