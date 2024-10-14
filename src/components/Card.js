import styled from 'styled-components';

const Card = ({ card, flipped, onClickFunc, solved }) => {
  return (
    <Wrapper solved={solved} logo={card.image}>
      <div
        className={`card ${(flipped || solved) && 'is-flipped'} `}
        onClick={(e) => {
          onClickFunc();
        }}
      >
        <div className="card-face card-face--front"></div>
        <div className="card-face card-face--back"></div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  --cardSize: 100px;
  opacity: ${(props) => (props.solved ? '0.4' : '1.0')};
  transition: all 1s;
  width: 100%;
  height: var(--cardSize);
  .card {
    position: relative;
    /* width: 100%; */
    height: var(--cardSize);
    transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform-style: preserve-3d;
  }
  .card-face {
    border-radius: 1rem;
    box-shadow: var(--shadow-3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .card-face--front {
    /* background: red; */
  }
  .card-face--front:after {
    content: '?';
    font-size: 3rem;
    position: absolute;
    inset: 40%;
  }
  .card-face--back {
    background-color: aliceblue;
    display: grid;
    place-content: center;
    transform: rotateY(180deg);
  }
  .card-face--back:before {
    content: '';
    display: inline;
    height: var(--cardSize);
    width: var(--cardSize);
    background: url(${(props) => props.logo});
    background-position: center;
    background-size: 80% 80%;
    background-repeat: no-repeat;
  }
  .logo {
    max-width: 80px;
    object-fit: contain;
  }
  .is-flipped {
    transform: rotateY(180deg);
  }
  @media (max-width: 450px) {
    --cardSize: 60px;
  }

  @media (max-width: 500px) {
    /* --cardSize: 150px; */

    .card-face--front:after {
      inset: 36%;
      font-size: 1.8rem;
    }
    .card-face--back:before {
      background-size: 60% 60%;
    }
  }
  @media (min-width: 700px) {
    --cardSize: 105px;
  }
`;
