import React from 'react';
import { Link } from 'react-router-dom';

const Badge = () => (
  <Link to="/">
    <h2 className="title">
      Textploration
      <br />
      <small>A game</small>
    </h2>
  </Link>
);

export default Badge;
