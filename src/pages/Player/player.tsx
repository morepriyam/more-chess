
import './player.css';
import Player1 from '../../components/Player1/Player1'
import Player2 from '../../components/Player2/Player2';
import WithMoveValidation from '../../components/Chessboard/Chessbrd';

const Player = () => {
  return (
    <div className='multiplayer'>
    <div className='player1'><Player1/></div>
    <div className='chessboard'><WithMoveValidation/></div>
    <div className='player2'><Player2/></div>
    </div>
  );
};

export default Player;