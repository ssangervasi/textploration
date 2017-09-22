import React from 'react';
import PropTypes from 'prop-types';

import classy from 'txpn/components/HOCs/classy';

const Section = classy('grid-parent grid-100')('section');
const H3 = classy('grid-10 tablet-grid-100')('h3');
const DL = classy('dl-unstyled grid-parent grid-90 tablet-grid-100')('dl');
const DT = classy('grid-10 tablet-grid-15 mobile-grid-20')('dt');
const DD = classy('grid-90 tablet-grid-85 mobile-grid-80')('dd');

export default function Overview({ explorer, world, region }) {
  return (
    <Section className="adventure-overview">
      <H3>Overview</H3>
      <DL>
        <DT>Explorer:</DT>
        <DD>{explorer}</DD>
        <DT>World:</DT>
        <DD>{world} </DD>
        <DT>Region:</DT>
        <DD>{region}</DD>
      </DL>
    </Section>
  );
}

Overview.propTypes = {
  explorer: PropTypes.string.isRequired,
  world: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};
