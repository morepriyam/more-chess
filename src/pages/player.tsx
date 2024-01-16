import WithMoveValidation from '../components/Chessbrd';

const Player = () => {
  return (
    <div className='multiplayer'>
    <div className='player1'></div>
    <div className='chessboard'><WithMoveValidation/></div>
    <div className='player2'></div>
    </div>
  );
};

export default Player;