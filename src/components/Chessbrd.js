import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";

const HumanVsHuman = ({ children }) => {
  const [fen, setFen] = useState("start");
  const [dropSquareStyle, setDropSquareStyle] = useState({});
  const [squareStyles, setSquareStyles] = useState({});
  const [pieceSquare, setPieceSquare] = useState("");
  const [history, setHistory] = useState([]);
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(new Chess());
  }, []);

  const removeHighlightSquare = () => {
    setSquareStyles(squareStyling({ pieceSquare, history }));
  };

  const highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, #CEF7F7 20%, transparent 10%)",
              borderRadius: "50%",
            },
          },
          ...squareStyling({
            history,
            pieceSquare,
          }),
        };
      },
      {}
    );

    setSquareStyles((prevStyles) => ({ ...prevStyles, ...highlightStyles }));
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    try {
      let move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      if (move === null) {
        throw new Error("Illegal move");
      }

      if (game.isCheckmate()) {
        console.log("Checkmate!");
      }

      setFen(game.fen());
      setHistory(game.history({ verbose: true }));
      removeHighlightSquare();
    } catch (error) {
      setFen(game.fen());
      setHistory((prevHistory) => prevHistory.slice(0, -1));
      removeHighlightSquare();
    }
  };

  const onMouseOverSquare = (square) => {
    let moves = game.moves({
      square: square,
      verbose: true,
    });

    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    highlightSquare(square, squaresToHighlight);
  };

  const onMouseOutSquare = () => removeHighlightSquare();

  const onDragOverSquare = (square) => {
    setDropSquareStyle(
      square === "e4" || square === "d4" || square === "e5" || square === "d5"
        ? { backgroundColor: "cornFlowerBlue" }
        : { boxShadow: "inset 0 0 1px 3px rgb(0, 255, 0)" }
    );
  };

  const onSquareClick = (clickedSquare) => {
    setSquareStyles(squareStyling({ pieceSquare: clickedSquare, history }));
    setPieceSquare(clickedSquare);

    let move = game.move({
      from: pieceSquare,
      to: clickedSquare,
      promotion: "q",
    });

    if (move !== null) {
      setFen(game.fen());
      setHistory(game.history({ verbose: true }));
      setPieceSquare("");
    }
  };

  const onSquareRightClick = (clickedSquare) => {
    setSquareStyles({ [clickedSquare]: { backgroundColor: "deepPink" } });
  };

  return children({
    squareStyles,
    position: fen,
    onMouseOverSquare,
    onMouseOutSquare,
    onDrop,
    dropSquareStyle,
    onDragOverSquare,
    onSquareClick,
    onSquareRightClick,
  });
};

HumanVsHuman.propTypes = {
  children: PropTypes.func,
};

const WithMoveValidation = () => {
  return (
    <div>
      <HumanVsHuman>
        {({
          position,
          onDrop,
          onMouseOverSquare,
          onMouseOutSquare,
          squareStyles,
          dropSquareStyle,
          onDragOverSquare,
          onSquareClick,
          onSquareRightClick,
        }) => (
          <Chessboard
            id="humanVsHuman"
            width={400}
            position={position}
            onDrop={onDrop}
            onMouseOverSquare={onMouseOverSquare}
            onMouseOutSquare={onMouseOutSquare}
            boardStyle={{
              borderRadius: "5px",
              boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
            }}
            squareStyles={squareStyles}
            dropSquareStyle={dropSquareStyle}
            onDragOverSquare={onDragOverSquare}
            onSquareClick={onSquareClick}
            onSquareRightClick={onSquareRightClick}
            darkSquareStyle={{ backgroundColor: "rgb(93,193,229)" }}
            lightSquareStyle={{ backgroundColor: "rgb(255,251,253)" }}
          />
        )}
      </HumanVsHuman>
    </div>
  );
};

const squareStyling = ({ pieceSquare, history }) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: "rgba(255, 255, 0, 0.4)",
      },
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "rgba(255, 255, 0, 0.4)",
      },
    }),
  };
};

export default WithMoveValidation;
