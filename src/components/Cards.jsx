import { creatures } from '../constants';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CharactersContext } from '../../contexts';

function Card({ creature, index, handleCLick, isSelected, isTransformed }) {
  const getCurrentStyle = () => {
    return index > 2 ? 'filter-brightness' : '';
  };
  return (
    <div
      className={`w-[225px] rounded-md cursor-pointer ${getCurrentStyle()} ${
        isTransformed ? 'pointer-events-none' : '' //prevent selecting transformed item
      }`}
      onClick={handleCLick}
    >
      <div className="relative">
        <div className="hover:hover-shadow absolute inset-0 z-10 rounded-md" />
        <img
          src={creature.image}
          alt="Creature image"
          className="w-[100%] rounded-md"
        />
        <div
          className={` absolute bottom-1 left-1 rounded-full bg-black px-4 text-white ${
            isSelected ? 'block' : 'hidden' //render based on item selection
          }`}
        >
          Selected
        </div>
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-center items-center bg-[rgba(0,0,0,.6)] ${
            isTransformed ? 'block' : 'hidden'
          }`}
        >
          <h1 className="text-white text-3xl">Unavailable</h1>
          <p className="text-white text-xs">Character Transformed</p>
        </div>
      </div>
      <div className="text-white text-center pt-2">{creature.name}</div>
    </div>
  );
}

Card.propTypes = {
  creature: PropTypes.object,
  index: PropTypes.number,
  handleCLick: PropTypes.func,
  isSelected: PropTypes.bool,
  isTransformed: PropTypes.bool,
};

export default function Cards() {
  const { selected, setSelected, transformed } = useContext(CharactersContext);

  function handleClick(id, isSelected) {
    setSelected((prevSelected) => {
      if (isSelected) {
        // Deselect the creature
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        // Select the creature
        return [...prevSelected, id];
      }
    });
  }
  return (
    <section className=" max-w-screen-lg flex flex-wrap justify-center gap-4 px-10">
      {creatures.map((creature, index) => (
        <Card
          key={creature.id}
          creature={creature}
          index={index}
          handleCLick={() =>
            handleClick(creature.id, selected.includes(creature.id))
          }
          isSelected={selected.includes(creature.id)}
          isTransformed={transformed.includes(creature.id)}
        ></Card>
      ))}
    </section>
  );
}
