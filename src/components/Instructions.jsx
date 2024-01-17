import { creatures } from '../constants';

export default function Instructions() {
  return (
    <section className="text-center relative w-full max-w-screen-md before:left-circle after:right-circle">
      <div className="text-Secondary-100 text-sm mb-3">STEP 1 OF 3</div>
      <h1 className="text-white text-4xl">SELECT CREATURE</h1>
      <h3 className="text-Primary-100 text-xl mb-3">
        Select Creature(s) to transform, don&apos;t worry you&apos;ll still have
        the original
      </h3>
      <p className="text-Primary-200">you have {creatures.length} creatures</p>
    </section>
  );
}
