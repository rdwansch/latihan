import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Word from './pages/Word';
import Countdown from './pages/Countdown';
import Concurrency from './pages/Concurrency';
import Salary from './pages/Salary';
import MobileLegend from './pages/MobileLegend';
import TicTacToe from './pages/TicTacToe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word" element={<Word />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/concurrency" element={<Concurrency />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/mobile-legend" element={<MobileLegend />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}
