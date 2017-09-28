import React from 'react';
import { Link } from 'react-router-dom';

export default function Help(props) {
  return (
    <section>
      <h2>Adventure Creator</h2>
      <section>
        <h3>Worlds</h3>
        <p>A world contains an ever-expanding set of regions to explore.</p>
        <p>Join an existing world, or create a new one!</p>
        <p>
          When a world is brand-new, there isn't much to do in it. Add some{' '}
          <a href="#id-regions">regions</a> to a world to give people
          something to adventure.
        </p>
      </section>
      <section>
        <h3 id="id-regions">Regions</h3>
        <p>
          A region is simply a set of interconnected{' '}
          <a href="#id-rooms">rooms</a>. Imagine a building, a dungeon, or
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
        <h3 id="id-rooms">Rooms</h3>
        <p>These are rooms.</p>
      </section>
    </section>
  );
}
