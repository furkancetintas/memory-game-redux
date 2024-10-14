import { useSelector } from 'react-redux';
import './App.css';
import Cards from './components/Cards';
import GameOverModal from './components/GameOverModal';
import Header from './components/Header';

function App() {
  const cards = useSelector((state) => state.card);
  console.log(cards.gameOver);

  return (
    <>
      <Header />
      {cards.gameOver && <GameOverModal />}
      <Cards />
    </>
  );
}

export default App;
