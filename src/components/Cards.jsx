import { creatures } from '../constants';
import PropTypes from 'prop-types';

function Card({ creature }) {
  return (
    <div className="w-[225px] rounded-md cursor-pointer">
      <div className="relative">
        <div className="hover:hover-shadow absolute inset-0 z-10 rounded-md" />
        <img
          src={creature.image}
          alt="Creature image"
          className="w-[100%] rounded-md"
        />
      </div>
      <div className="text-white text-center pt-2">{creature.name}</div>
    </div>
  );
}

Card.propTypes = {
  creature: PropTypes.object,
};

export default function Cards() {
  return (
    <section className=" max-w-screen-lg flex flex-wrap justify-center gap-4 px-10">
      {creatures.map((creature) => (
        <Card key={creature.id} creature={creature} />
      ))}
    </section>
  );
}
