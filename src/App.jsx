import { useState } from 'react';
import backArrow from './assets/arrow.png';
import Button from './components/Button';
import Instructions from './components/Instructions';
import Cards from './components/cards';
import { CharactersContext } from '../contexts';
import { creatures } from './constants';

export default function App() {
  const [transformed, setTransformed] = useState([creatures[4].id]);
  const [selected, setSelected] = useState([]);

  return (
    <main className="font-custom relative min-h-screen bg-black px-6 py-20 flex flex-col justify-center items-center gap-6">
      <div className="text-Primary-100 absolute top-2 left-4 flex items-center gap-3 cursor-pointer">
        <img src={backArrow} alt="back icon" className="w-5 h-4" />
        EXIT
      </div>
      <Instructions />
      <CharactersContext.Provider
        value={{ transformed, setTransformed, selected, setSelected }}
      >
        <Cards />
        <Button />
      </CharactersContext.Provider>
    </main>
  );
}
