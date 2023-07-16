import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";
import React, { useState } from "react";

export const Chessbrd = () => {
  const [position, setPosition] = useState("start");
  return (
    <div>
      <Chessboard position={position} />
    </div>
  );
};

export default Chessbrd;
