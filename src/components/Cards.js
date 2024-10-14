import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  addFrameworks,
  frameworkList,
  selectCard,
  toggleGameOver,
  select,
  compare,
} from '../redux/CardSlice/cardSlice';

import Card from './Card';
const Cards = () => {
  const cards = useSelector(selectCard);
  const dispatch = useDispatch();

  const flippedCards = cards.flippedCardsList;
  const solvedCards = cards.solvedCardList;

  // add cardList to state
  useEffect(() => {
    const duplicatedFrameworkList = [...frameworkList, ...frameworkList].sort(
      () => Math.random() - 0.5
    );
    dispatch(
      addFrameworks(
        duplicatedFrameworkList.map((framework) => {
          return {
            ...framework,
            id: nanoid(),
          };
        })
      )
    );
  }, [dispatch]);

  //game logic
  useEffect(() => {
    //check flipped cards and set score
    if (flippedCards.length === 2) {
      setTimeout(() => {
        dispatch(compare());
      }, 700);
    }

    //if every card has been solved finish the game
    if (solvedCards.length === 20) {
      setTimeout(() => {
        dispatch(toggleGameOver());
      }, 1000);
    }
  }, [flippedCards, solvedCards, dispatch]);

  return (
    <Wrapper>
      {cards?.cardList.map((card) => {
        return (
          <Card
            onClickFunc={() => {
              if (
                // flip the card
                flippedCards.length < 2 &&
                !solvedCards.includes(card) &&
                !flippedCards.includes(card)
              ) {
                dispatch(select({ card }));
              }
            }}
            flipped={flippedCards.includes(card)}
            solved={solvedCards.includes(card)}
            card={card}
            key={card.id}
          />
        );
      })}
    </Wrapper>
  );
};

export default Cards;
const Wrapper = styled.div`
  perspective: 950px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.25rem;
  place-content: center;

  @media (max-width: 500px) {
    gap: 0.7rem;
  }
`;
