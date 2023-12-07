import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Word from './pages/Word';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word" element={<Word />} />
      </Routes>
    </BrowserRouter>
  );
}
