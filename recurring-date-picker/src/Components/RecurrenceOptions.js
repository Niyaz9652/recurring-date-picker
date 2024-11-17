import React from 'react';

const RecurrenceOptions = ({ recurrence, setRecurrence }) => {
  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2">Recurrence Options</h3>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setRecurrence(option)}
            className={`px-3 py-1 rounded ${
              recurrence === option ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecurrenceOptions;
