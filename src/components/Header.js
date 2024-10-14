import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reload, selectCard } from '../redux/CardSlice/cardSlice';

const Header = () => {
  const card = useSelector(selectCard);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <nav className="navbar">
        <h2>Memory Game</h2>
      </nav>

      <p>
        Match the cards and win <span className="win">50 points</span>! If the
        cards do not match you will lose <span className="lose">10 points</span>
        !
      </p>
      <div className="info">
        <span className="score">
          <strong>Score:</strong> {card.score}
        </span>
        <button onClick={() => dispatch(reload())} className="reset">
          Reset
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.section`
  text-align: center;
  margin-top: 6rem;
  .win {
    color: #4e9f3d;
    font-weight: bold;
  }
  .lose {
    font-weight: bold;
    color: #c13131;
  }
  .info {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 0.3rem auto;
    padding: 0 0.25rem;
  }
  .score {
    font-size: 1.1rem;
  }
  .reset {
    border-radius: 0.5rem;
    background: #da0037;
    color: white;
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
  }
  .navbar {
    width: 100%;
    height: 4rem;
    font-weight: 600;
    background-color: white;
    border-bottom: 1px solid #d3d6da;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  @media (prefers-color-scheme: dark) {
    .navbar {
      background-color: #242424;
      border-bottom: 1px solid #3a3a3c;
    }
  }
`;
