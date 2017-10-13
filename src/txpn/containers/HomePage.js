import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <section>
    <p>Welcome to Textploration, the sandbox for text-based adventures.</p>
    <p>
      Many features are in development, but why don't you try your first{' '}
      <Link to="/adventure/start">adventure</Link>?
    </p>
    <p>
      Or, start <Link to="/create/help">creating</Link>.
    </p>
  </section>
);

export default (HomePage);
