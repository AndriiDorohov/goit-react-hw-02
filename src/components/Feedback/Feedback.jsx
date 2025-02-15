import React from 'react';

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div>
      <ul>
        {Object.entries(feedback).map(([key, value]) => (
          <li key={key}>
            {key.replace(/(?:^\w|[A-Z]|\b\w|\s+\w)/g, c => c.toUpperCase())}:{' '}
            {value}
          </li>
        ))}
      </ul>
      {total > 0 && (
        <div className="summary">
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
