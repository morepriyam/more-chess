import React from 'react'



import WithMoveValidation from '../components/Chessbrd'

export const Computer = () => {
  return (
    <div className='computer'>
    <div className='player1'> </div>
    <div className='chessboard'><WithMoveValidation/></div>
  </div>
)
}


export default Computer;
