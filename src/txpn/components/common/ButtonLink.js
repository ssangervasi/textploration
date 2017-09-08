import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLink({
  to,
  replace,
  linkProps = {},
  ...buttonProps
}) {
  return (
    <Link to={to} aria-hidden="true" {...linkProps}>
      <button {...buttonProps} />
    </Link>
  );
}
