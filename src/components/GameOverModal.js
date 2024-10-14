import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  toggleGameOver,
  reload,
  selectCard,
} from '../redux/CardSlice/cardSlice';

const GameOverModal = () => {
  const cards = useSelector(selectCard);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal">
        <p>Game Over!</p>
        <p>
          Your score: <strong>{cards.score}</strong>!{' '}
        </p>
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(reload());
            }}
          >
            Play Again
          </button>
          <button
            onClick={() => {
              dispatch(toggleGameOver());
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default GameOverModal;
const Wrapper = styled.div`
  background-color: var(--modalOverlay);
  z-index: 1;
  position: fixed;
  color: var(--modalFontcolor);
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background: var(--modalBackground);
    padding: 1rem;
    border-radius: 1rem;
    width: 350px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
