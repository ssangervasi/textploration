import React from 'react';
import PropTypes from 'prop-types';

export default function Overview({ explorer, world, region }) {
  return (
    <section>
      <h3>Overview</h3>
      <dl>
        <dt>Explorer</dt>
        <dd>{explorer}</dd>
        <dt>World</dt>
        <dd>{world} </dd>
        <dt>Region</dt>
        <dd>{region}</dd>
      </dl>
    </section>
  );
}

Overview.propTypes = {
  explorer: PropTypes.string.isRequired,
  world: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};
