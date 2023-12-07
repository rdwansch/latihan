import { FormEvent, useEffect, useRef, useState } from 'react';
import { Fireworks } from 'fireworks-js';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const words = ['Apple', 'Beach', 'Cloud', 'Dance', 'Guitar', 'Happy', 'Lemon', 'Ocean', 'Puzzle', 'Smile'].sort(
  () => Math.random() - 0.5
);

export default function Word() {
  const [answer, setAnswer] = useState('');
  const [scrambledWord, setScrambledWord] = useState(['']);
  const [currentLevel, setCurrentLevel] = useState(0);
  const fireworkContainer = useRef(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleCheckingAnswer = (e: FormEvent) => {
    e.preventDefault();

    if (answer.toLowerCase() == words[currentLevel].toLowerCase()) {
      setCurrentLevel(prev => prev + 1);
      setAnswer('');
      toast.success('Correct!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.error('Wrong!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const winnerAlert = () => {
    if (!fireworkContainer.current) {
      return;
    }
    setIsFinished(true);
    setScrambledWord('Congrats'.split(''));

    const fireworks = new Fireworks(fireworkContainer.current);
    fireworks.start();
  };

  const getRandomizedWords = (words: string[]) => words[currentLevel].split('').sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (currentLevel == words.length) {
      winnerAlert();
      return;
    }

    const w = getRandomizedWords(words);

    setScrambledWord(w);

    //eslint-disable-next-line
  }, [currentLevel]);

  return (
    <section className="my-container">
      <div ref={fireworkContainer} className="absolute top-0 left-0 right-0 bottom-0"></div>
      <Link to="/" className="underline flex items-center gap-1 w-fit absolute z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        Back
      </Link>
      <h1 className="mt-24 mx-auto text-6xl bg-gradient-to-r from-violet-500 via-red-500  to-pink-500 bg-clip-text text-transparent w-fit font-bold">
        World Scramble
      </h1>

      <div className="flex gap-10 justify-center mt-20">
        {scrambledWord.map((alphabet, idx) => (
          <div
            key={alphabet + idx}
            className={`bg-gray-100 px-7 py-4 text-3xl transition-all shadow`}
            style={{ rotate: isFinished ? '' : Math.floor(Math.random() * 60) + 'deg' }}
          >
            {alphabet}
          </div>
        ))}
      </div>

      <div className="mt-20 mx-auto w-fit border-2 relative" hidden={isFinished}>
        <form onSubmit={handleCheckingAnswer}>
          <input
            type="text"
            className="rounded-lg  outline-none px-4 py-2 w-96"
            value={answer}
            autoFocus
            onChange={e => setAnswer(e.target.value)}
          />
          <span className=" absolute h-full w-0.5 bg-gray-200"></span>
          <button className="px-4 py-2 bg-violet-200" type="submit">
            Check
          </button>
        </form>
      </div>

      <div className="mt-20">
        <h2 className={`${isFinished && 'text-2xl'} text-center`}>
          {isFinished && 'Final '}Score:{' '}
          <span className={`${isFinished ? 'text-4xl' : 'text-2xl'}  font-bold`}>
            {currentLevel}
            {currentLevel !== 0 && '0'}
          </span>
        </h2>
      </div>
    </section>
  );
}
