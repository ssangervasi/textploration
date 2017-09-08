import React from 'react';
import ButtonLink from 'txpn/components/common/ButtonLink';

export default function AdventureChoices({ match, canContinue = false }) {
  return (
    <section className="adventure-choices">
      <h2>Choose Your Adventure</h2>
      <p>
        <ButtonLink
          to={`${match.url}/start`}
          className="button"
          id="adventure-start-link"
        >
          New
        </ButtonLink>
        <label htmlFor="adventure-start-link" className="label--right">
          Start a new adventure
        </label>
      </p>
      <p>
        <ButtonLink
          to={`${match.url}/continue`}
          disabled={!canContinue}
          className="button"
          id="adventure-continue-link"
        >
          Continue
        </ButtonLink>
        <label htmlFor="adventure-continue-link" className="label--right">
          {canContinue ? (
            <span>Continue previous adventure</span>
          ) : (
            <i>No adventure to continue</i>
          )}
        </label>
      </p>
    </section>
  );
}
