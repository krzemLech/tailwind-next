const colContent = ["First", "Second", "Third", "Fourth"];
const colColors = ["sky", "green", "red", "purple"];

export default function Grid() {
  return (
    <div className="home m-4">
      <header>Header</header>
      <section className="grid grid-cols-4 gap-2 mb-2">
        <div className="bg-sky-500 col-start-2 col-span-1 row-span-1">1</div>
        <div className="bg-sky-500 col-span-2 row-span-2">2</div>
        <div className="bg-sky-500 col-span-2 row-span-3">3</div>
        <div className="bg-sky-500 col-span-2 row-span-2">4</div>
        <div className="bg-sky-500 col-span-2 row-span-1">5</div>
        <div className="bg-sky-500 col-span-2 row-span-2">6</div>
      </section>
      <hr />
      <h2 className="font-semibold mt-4">Grid auto cols</h2>
      <section className="grid grid-flow-col auto-cols-auto mb-4">
        {/* it shrinks only to the minumum of content, here to the longest word width */}
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, suscipit.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, suscipit.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, suscipit.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, suscipit.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, suscipit.
        </div>
      </section>
      <hr />
      <h2 className="font-semibold mt-4">Grid rows</h2>
      <section className="grid grid-rows-4 grid-flow-col gap-2 mb-2 mt-2">
        <div className="bg-green-500 row-span-2">1</div>
        <div className="bg-green-500">2</div>
        <div className="bg-green-500">3</div>
        <div className="bg-green-500">4</div>
        <div className="bg-green-500">5</div>
        <div className="bg-green-500">6</div>
        <div className="bg-green-500">7</div>
        <div className="bg-green-500">8</div>
        <div className="bg-green-500 row-span-3">9</div>
      </section>
      <hr />
      {/* grid-flow-dense will switch grid item's places to fill gaps automatically - here it swithced item 2 with item 3*/}
      <h2 className="font-semibold mt-4">Grid flow row DENSE</h2>
      <section className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 mt-2 mb-2">
        <div className="bg-purple-500 col-span-2">1</div>
        <div className="bg-purple-500  col-span-2">2</div>
        <div className="bg-purple-500">3</div>
        <div className="bg-purple-500">4</div>
        <div className="bg-purple-500">5</div>
        <div className="bg-purple-500 col-span-2">6</div>
        <div className="bg-purple-500">7</div>
        <div className="bg-purple-500 col-span-2">8</div>
        <div className="bg-purple-500 row-span-3">9</div>
      </section>
    </div>
  );
}
