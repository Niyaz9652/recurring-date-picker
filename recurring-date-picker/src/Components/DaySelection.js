import React from 'react';

const DaySelection = ({ days, setDays }) => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const toggleDay = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2">Select Days</h3>
      <div className="flex gap-2">
        {weekDays.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-3 py-1 rounded ${
              days.includes(day) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelection;
