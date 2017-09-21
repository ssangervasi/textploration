import React from 'react';

export default function StepList({ steps }) {
  const stepChildren = steps.map((step, index) => {
    const className = [
      ['step-list__step', true],
      ['step-list__step--active', step.active],
      ['step-list__step--done', step.done],
    ]
      .map(([k, v]) => (v ? k : undefined))
      .filter(v => v)
      .join(' ');
    return (
      <li key={index} className={className}>
        {step.title}
      </li>
    );
  });
  return <ol className="step-list">{stepChildren}</ol>;
}
