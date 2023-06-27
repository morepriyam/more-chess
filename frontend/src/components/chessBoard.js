import React from "react";
import "./chessBoard.css"

const hRanks = ["1","2","3","4","5","6","7","8"]
const vFiles = ["a","b","c","d","e","f","g","h"]


export default function ChessBoard() {
    let board = [];
    for (let j = hRanks.length - 1; j >= 0; j--){
        for (let i = 0; i < vFiles.length; i++) {
            const number = i + j + 2 ;
            if (number % 2 === 0) {
                board.push(<div className = "white-tile" >[{vFiles[i]}{hRanks[j]}]</div>)
            }else{
                board.push(<div className = "black-tile" >[{vFiles[i]}{hRanks[j]}]</div>)
            }
    }
}
    return <div id = "chessboard">{board}</div>
}
