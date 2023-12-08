import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Salary() {
  const navigate = useNavigate();
  const [gajiPokok, setGajiPokok] = useState(0);
  const [tunjangan, setTunjangan] = useState(0);
  const [kewajibanPokok, setKewajibanPokok] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const res = gajiPokok + tunjangan - kewajibanPokok;
    setResult(res);
  };

  const handleReset = () => {
    navigate('/');
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

      <h1 className="mt-10 text-center text-3xl">Gaji Kalkulator</h1>

      <div className="flex gap-20 justify-center flex-row flex-wrap mt-20">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mt-3 max-w-xs">
            <label htmlFor="pokok">Gaji Pokok</label>
            <input
              type="text"
              id="pokok"
              placeholder="0"
              className={`${result && 'text-gray-500'} outline-none px-4 py-2 border rounded-lg`}
              pattern="[0-9]*"
              disabled={Boolean(result)}
              onChange={e => {
                e.target.value = e.target.value
                  .replace(/[^0-9.]/g, '')
                  .replace(/(\..*?)\..*/g, '$1')
                  .replace(/^0[^.]/, '0');

                setGajiPokok(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-2 mt-3 max-w-xs">
            <label htmlFor="tunjangan">Tunjangan</label>
            <input
              type="text"
              id="tunjangan"
              placeholder="0"
              className={`${result && 'text-gray-500'} outline-none px-4 py-2 border rounded-lg`}
              pattern="[0-9]*"
              disabled={Boolean(result)}
              onChange={e => {
                e.target.value = e.target.value
                  .replace(/[^0-9.]/g, '')
                  .replace(/(\..*?)\..*/g, '$1')
                  .replace(/^0[^.]/, '0');

                setTunjangan(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-2 mt-3 max-w-xs">
            <label htmlFor="pokok">Kewajiban Pokok</label>
            <input
              type="text"
              id="pokok"
              placeholder="0"
              className={`${result && 'text-gray-500'} outline-none px-4 py-2 border rounded-lg`}
              pattern="[0-9]*"
              disabled={Boolean(result)}
              onChange={e => {
                e.target.value = e.target.value
                  .replace(/[^0-9.]/g, '')
                  .replace(/(\..*?)\..*/g, '$1')
                  .replace(/^0[^.]/, '0');

                setKewajibanPokok(Number(e.target.value));
              }}
            />
          </div>

          <div className="flex">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 mt-5 block ml-auto"
            >
              Hitung Gaji
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-5 py-2 mt-5 block ml-auto"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="h-80 w-0.5 bg-gray-200"></div>
        <div>
          <h2 className="text-2xl">Hasil</h2>

          <table className=" w-[400px] mt-5">
            <tr>
              <td className=" max-w-2xl">Gaji Kotor</td>
              <td className=" max-w-2xl">:</td>
              <td className=" max-w-2xl font-bold text-lg">
                Rp. {result !== 0 && (gajiPokok + tunjangan).toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className=" max-w-2xl">Gaji Pokok</td>
              <td className=" max-w-2xl">:</td>
              <td className=" max-w-2xl font-bold text-lg">Rp. {result !== 0 && gajiPokok.toLocaleString()}</td>
            </tr>
            <tr>
              <td className=" max-w-2xl">Gaji Bersih</td>
              <td className=" max-w-2xl">:</td>
              <td className=" max-w-2xl font-bold text-lg">Rp. {result !== 0 && result.toLocaleString()}</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
