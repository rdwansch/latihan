import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Hero = {
  hero_id: number;
  hero_name: string;
  hero_avatar: string;
  hero_role: string;
  hero_specially: string;
};

type SearchType = 'NAME' | 'ROLE' | 'SPECIALLY';

export default function MobileLegend() {
  const [hero, setHero] = useState<Hero[]>([]);
  const [filteredHero, setFilteredHero] = useState<Hero[]>([]);
  const [type, setType] = useState<SearchType>('NAME');
  const [message, setMessage] = useState('');

  const getHero = async () => {
    const response = await fetch('https://api.dazelpro.com/mobile-legends/hero');
    const result = await response.json();

    setHero(result.hero);
  };

  const handleSearchHero = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    if (userInput == '') {
      setFilteredHero([]);
      return;
    }

    let res: Hero[] = [];

    if (type == 'NAME') {
      res = hero.filter(h => h.hero_name.toLowerCase().startsWith(userInput.toLowerCase()));
    } else if (type == 'ROLE') {
      res = hero.filter(h => h.hero_role.toLowerCase().startsWith(userInput.toLowerCase()));
    } else if (type == 'SPECIALLY') {
      res = hero.filter(h => h.hero_specially.toLowerCase().startsWith(userInput.toLowerCase()));
    }

    if (res.length == 0) {
      setMessage('Not found');
      return;
    }
    setMessage('');
    setFilteredHero(res);
  };

  useEffect(() => {
    getHero();
  }, []);

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

      <h1 className="mt-10 text-center text-3xl">Mobile Legend</h1>
      <div className="mt-10 flex gap-5 justify-center">
        <div className="relative">
          <input type="text" className="outline-none  px-2 py-2 " placeholder="Search hero..." onChange={handleSearchHero} />
          <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-gradient-to-r from-gray-500  to-gray-800 rounded-full"></div>
        </div>
        <select className="bg-transparent" onChange={e => setType(e.target.value as SearchType)}>
          <option value="NAME">Name</option>
          <option value="ROLE">Role</option>
          <option value="SPECIALLY">Specially</option>
        </select>
      </div>

      <p className="text-center text-red-500 mt-5 font-bold">{message}</p>

      <div className="flex gap-10 flex-wrap mt-20">
        {!message &&
          filteredHero.length == 0 &&
          hero.length !== 0 &&
          hero.map(h => (
            <div key={h.hero_id} className="border w-96 rounded-lg p-5 hover:shadow transition-shadow">
              <h1 className="text-xl">{h.hero_name}</h1>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-20">Role</td>
                    <td className="w-5">:</td>
                    <td className="w-20">{h.hero_role}</td>
                  </tr>
                  <tr>
                    <td>Specially</td>
                    <td>:</td>
                    <td>{h.hero_specially}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

        {!message &&
          filteredHero.length !== 0 &&
          filteredHero.map(h => (
            <div key={h.hero_id} className="border w-96 rounded-lg p-5 hover:shadow transition-shadow">
              <h1 className="text-xl">{h.hero_name}</h1>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-20">Role</td>
                    <td className="w-5">:</td>
                    <td className="w-20">{h.hero_role}</td>
                  </tr>
                  <tr>
                    <td>Specially</td>
                    <td>:</td>
                    <td>{h.hero_specially}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </section>
  );
}
