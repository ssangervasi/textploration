import React from 'react';

function Anchor({ to, children }) {
  return <a href={`#${to}`}>{children}</a>;
}

export default function Help(props) {
  return (
    <section>
      <h2>How to Create Adventures</h2>
      <section>
        <h3 id="worlds">Worlds</h3>
        <p>A world contains an ever-expanding set of regions to explore.</p>
        <p>Join an existing world, or create a new one!</p>
        <p>
          When a world is brand-new, there isn't much to do in it. Add some{' '}
          <Anchor to="regions">regions</Anchor> to a world to create exciting
          adventures.
        </p>
      </section>
      <section>
        <h3 id="regions">Regions</h3>
        <p>
          A region is simply a set of interconnected{' '}
          <Anchor to="rooms">rooms</Anchor>. Imagine a building, a dungeon, or
          even a whole town!
        </p>
        <p>
          While working on a region, only you can see it. It's not connected to
          a world, and you can save it and continue working on it later.
        </p>
        <p>
          Once you're done creating your region, you'll have to show that it's
          possible to explore your region from start to finish. Pass this test
          and you can show your region to the rest of the world!
        </p>
        <p>
          You can connect a region to one of the worlds that you have explored.
          The more you explore, the more places you'll be able to build.
        </p>
      </section>
      <section>
        <h3 id="rooms">Rooms</h3>
        <p>
          Rooms are where your adventure takes place. Explorers enter a room,
          read its description, then decide which door to take next.
        </p>
      </section>
    </section>
  );
}
