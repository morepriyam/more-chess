import React from 'react'

import './computer.css'
import {Player1} from '../../components/Player1/Player1'
import WithMoveValidation from '../../components/Chessboard/Chessbrd'

export const Computer = () => {
  return (
    <div className='computer'>
    <div className='player1'><Player1/> </div>
    <div className='chessboard'><WithMoveValidation/></div>
  </div>
)
}


export default Computer;
