import { Link } from 'react-router-dom';

export default function TicTacToe() {
  return (
    <section className="my-container">
      {/* <div ref={fireworkContainer} className="absolute top-0 left-0 right-0 bottom-0"></div> */}
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
      <h1 className="mt-24 mx-auto text-5xl bg-gradient-to-r from-gray-800 via-blue-800 to-black bg-clip-text text-transparent w-fit font-bold">
        Tic Tac Toe
      </h1>

      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
