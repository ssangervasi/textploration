import React from 'react';
import PropTypes from 'prop-types';

const DT = props => <dt className="grid-10 tablet-grid-15 mobile-grid-20" {...props} />;
const DD = props => <dd className="grid-90 tablet-grid-85 mobile-grid-80" {...props} />;

export default function Overview({ explorer, world, region }) {
  return (
    <section className="adventure-overview grid-parent grid-100">
      <h3 className="grid-10 tablet-grid-100">Overview</h3>
      <dl className="dl-unstyled grid-parent grid-90 tablet-grid-100">
        <DT>Explorer:</DT>
        <DD>{explorer}</DD>
        <DT>World:</DT>
        <DD>{world} </DD>
        <DT>Region:</DT>
        <DD>{region}</DD>
      </dl>
    </section>
  );
}

Overview.propTypes = {
  explorer: PropTypes.string.isRequired,
  world: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};
