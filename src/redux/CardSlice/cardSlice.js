import { createSlice, nanoid } from '@reduxjs/toolkit';

export const frameworkList = [
  {
    id: nanoid(),
    name: 'Angular',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/angularjs.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'React',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/react.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'Babel',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/babel.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'Bluebird',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/bluebird.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'Coffescript',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/coffeescript.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'd3',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/d3.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'ember',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/ember.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'ionic',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/ionic.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'gulp',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/gulp.png?raw=true',
  },
  {
    id: nanoid(),
    name: 'next',
    flipped: false,
    image:
      'https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/next.js.png?raw=true',
  },
];

const initialState = {
  gameOver: false,
  score: 100,
  flippedCardsList: [],
  solvedCardList: [],
  cardList: [],
};
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addFrameworks: (state, action) => {
      if (state.cardList.length === 0) {
        state.cardList = action.payload;
      }
    },
    select: (state, action) => {
      const card = action.payload.card;
      if (
        state.flippedCardsList.length < 2 &&
        !state.solvedCardList.includes(card) &&
        !state.flippedCardsList.includes(card)
      ) {
        state.flippedCardsList.push(card);
      }
    },
    compare: (state, action) => {
      if (state.flippedCardsList[0].name === state.flippedCardsList[1].name) {
        /// add cards to solvedCardList
        state.solvedCardList.push(state.flippedCardsList[0]);
        state.solvedCardList.push(state.flippedCardsList[1]);
        //empty flipped cards array
        state.flippedCardsList = [];
        // set score
        state.score += 50;
      } else {
        state.flippedCardsList = [];
        state.score -= 10;
      }
    },

    toggleGameOver: (state) => {
      state.gameOver = !state.gameOver;
    },
    reload: (state) => {
      state.flippedCardsList = [];
      state.solvedCardList = [];
      state.score = 100;
      state.gameOver = false;
      state.cardList = state.cardList.sort(() => Math.random() - 0.5);
    },
  },
});

export const { toggleGameOver, select, compare, addFrameworks, reload } =
  cardSlice.actions;

export const selectCard = (state) => state.card;

export default cardSlice.reducer;
