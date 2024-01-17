import { useContext } from 'react';
import { CharactersContext } from '../../contexts';

export default function Button() {
  const { selected, setSelected, setTransformed } =
    useContext(CharactersContext);

  function handleClick() {
    // transform selected items
    setTransformed((transformed) => [...transformed, ...selected]);
    //empty selected items after transform
    setSelected([]);
  }
  return (
    <button
      className={`bg-transparent text-xl text-black font-Roboto
      inline-block px-16 py-4 border-none outline-none cursor-pointer
      bg-button bg-center bg-no-repeat bg-contain
      [text-shadow:_1px_1px_0_#D40D00_,_-1px_-1px_0_#D40D00] `}
      onClick={handleClick}
    >
      PROCEED
    </button>
  );
}
