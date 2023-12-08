import { Link } from 'react-router-dom';

const challenge = [
  {
    name: 'Count Duration',
    level: 'Medium',
    language: ['TypeScript', 'React'],
    target: 'Variable & DOM, Type Data, Conditional, Operator, Function, Date(), setInterval()',
    link: '/countdown',
  },
  {
    name: 'Salary Calculating',
    level: 'Easy',
    language: ['TypeScript', 'React'],
    target: 'Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)',
    link: '/salary',
  },
  {
    name: 'Word Scramb',
    level: 'Easy',
    language: ['TypeScript', 'React'],
    target: 'Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)',
    link: '/word',
  },
  {
    name: 'Mobile Legend',
    level: 'Hard',
    language: ['TypeScript', 'React'],
    target: 'Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)',
    link: '/mobile-legend',
  },
  {
    name: 'Tic Tac Toe',
    level: 'Hard',
    language: ['TypeScript', 'React'],
    target: 'Variable & DOM, Fetch API, Conditional, Operator, Function, Looping, Event Listener (Callback)',
    link: '/tic-tac-toe',
  },
];

export default function Home() {
  return (
    <div className="my-container">
      <div className="border-[3px] border-blue-600 rounded-lg p-10 mt-10">
        <h1 className="text-center text-3xl mb-3">Challenge on Task</h1>
        <h2 className="text-center">Select and complete the task already provided bellow</h2>

        <div className="mt-10 flex gap-5 flex-col">
          {challenge.map(c => (
            <div key={c.link} className="border rounded-lg p-5 group hover:shadow transition-shadow">
              <h2 className="text-xl mb-3">{c.name}</h2>
              <p>Level : {c.level}</p>
              <p>Language : {c.language.join(',')}</p>
              <p>{c.target}</p>

              <Link to={c.link}>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-5">Solve Challenge</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
