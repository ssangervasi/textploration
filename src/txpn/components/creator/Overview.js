import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview({ user }) {
  const worlds = user.createdWorlds;
  const regions = user.createdRegions;
  return (
    <section>
      <h3>My Adventures</h3>
      <section>
        <h4>Worlds</h4>
        <WorldsTable worlds={worlds} />
      </section>
      <section>
        <h4>Regions</h4>
        <RegionsTable regions={regions} />
      </section>
      <section>
        <h4>Rooms</h4>
      </section>
    </section>
  );
}

function WorldsTable({ worlds }) {
  const worldRows = worlds.map(world => {
    return (
      <tr id={`id-world-row-${world.id}`} key={world.id}>
        <td><Link to={`/create/world/${world.id}`}>{world.name}</Link></td>
        <td>{world.regions.length}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td># Regions</td>
        </tr>
      </thead>
      <tbody>
        {worldRows}
      </tbody>
    </table>
  );
}

function RegionsTable({ regions }) {
  const regionRows = regions.map(region => {
    return (
      <tr id={`id-region-row-${region.id}`} key={region.id}>
        <td>{region.name}</td>
        <td>{region.rooms.length}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td># Rooms</td>
        </tr>
      </thead>
      <tbody>
        {regionRows}
      </tbody>
    </table>
  );
}
