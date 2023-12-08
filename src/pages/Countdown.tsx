import { useState } from 'react';
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import { toast } from 'react-toastify';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Countdown() {
  const [date, setDate] = useState<Value>();
  const [isLoading, setIsLoading] = useState(false);
  const [idInterval, setIdInterval] = useState(0);
  const [diffDate, setDiffDate] = useState<ValuePiece>();

  const handleCountingDate = () => {
    if (!date) {
      return;
    }

    clearInterval(idInterval);
    setIsLoading(true);
    const onComingVal = new Date(date.toLocaleString()).valueOf();
    const currentDate = new Date().valueOf();

    if (currentDate > onComingVal) {
      toast.error('Date cannot be negative.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setIsLoading(false);
      return;
    }

    const id = setInterval(() => {
      const currentDate = new Date().valueOf();
      const diff = onComingVal - currentDate;

      setDiffDate(new Date(diff));
    }, 1000);
    setIdInterval(id);
  };

  const handleResetCounter = () => {
    clearInterval(idInterval);
    setDate(null);
    setDiffDate(null);
    setIsLoading(false);
  };

  return (
    <section className="my-container">
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

      <h1 className="mt-10 text-center text-3xl">Countdown Time</h1>

      <div className="flex justify-center gap-5 mt-10">
        <DateTimePicker onChange={e => setDate(e)} value={date} disableClock disabled={isLoading} />
        <button
          className={`${isLoading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}  text-white px-10 py-1 rounded-lg`}
          disabled={isLoading}
          onClick={handleCountingDate}
        >
          {isLoading ? 'counting...' : 'start'}
        </button>
        <button className="bg-red-600 hover:bg-red-700  text-white px-10 py-1 rounded-lg" onClick={handleResetCounter}>
          Reset
        </button>
      </div>

      <div className="w-96 h-0.5 bg-red-500 mx-auto mt-10"></div>

      {diffDate && (
        <div className="mt-10 flex gap-14 justify-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-6xl text-red-600">{diffDate.getDate() - 1}</h2>
            <p className="text-sm text-center text-gray-500">Days</p>
          </div>
          <span className="text-4xl">:</span>
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-6xl text-red-600">{diffDate.getUTCHours()}</h2>
            <p className="text-sm text-center text-gray-500">Hours</p>
          </div>
          <span className="text-4xl">:</span>
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-6xl text-red-600">{diffDate.getUTCMinutes()}</h2>
            <p className="text-sm text-center text-gray-500">Minutes</p>
          </div>
          <span className="text-4xl">:</span>
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-6xl text-red-600">{diffDate.getUTCSeconds()}</h2>
            <p className="text-sm text-center text-gray-500">Seconds</p>
          </div>
        </div>
      )}
    </section>
  );
}
