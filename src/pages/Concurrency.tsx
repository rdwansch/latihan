import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

type ExchangeRates = {
  [key: string]: number;
};

const C: ExchangeRates = {
  IDR: 15512.0,
  GBP: 0.79,
  EUR: 0.93,
  USD: 1.0,
};

export default function Concurrency() {
  const [amount, setAmount] = useState(0);
  const [fromConcurrency, setFromConcurrency] = useState('USD');
  const [toConcurrency, setToConcurrency] = useState('USD');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const res = C[fromConcurrency] * C['USD'] * C[toConcurrency];
    console.log(amount);
    console.log(res);
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

      <h1 className="mt-10 text-center text-3xl">Concurrency Converter</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-10 justify-center mt-20">
          <div className="relative">
            <input
              type="text"
              className="outline-none  px-2 py-2 text-5xl w-72"
              placeholder="0"
              pattern="[0-9]*"
              onChange={e => {
                e.target.value = e.target.value
                  .replace(/[^0-9.]/g, '')
                  .replace(/(\..*?)\..*/g, '$1')
                  .replace(/^0[^.]/, '0');

                setAmount(Number(e.target.value));
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-gradient-to-r from-green-500  to-blue-500 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <select
                className="text-xl bg-gradient-to-r from-green-500  to-blue-500 bg-clip-text text-transparent font-bold"
                onChange={e => setFromConcurrency(e.target.value)}
              >
                <option value="USD">$USD</option>
                <option value="GBP">￡GBP</option>
                <option value="EUR">€EUR</option>
                <option value="IDR">IDR</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
              <select
                className="text-xl bg-gradient-to-r from-green-500  to-blue-500 bg-clip-text text-transparent font-bold"
                onChange={e => setToConcurrency(e.target.value)}
              >
                <option value="USD">$USD</option>
                <option value="GBP">￡GBP</option>
                <option value="EUR">€EUR</option>
                <option value="IDR">IDR</option>
              </select>
            </div>

            <button className="bg-gradient-to-r bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 font-bold rounded-lg">
              Convert
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
