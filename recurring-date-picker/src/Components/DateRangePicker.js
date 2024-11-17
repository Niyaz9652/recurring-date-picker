import React from 'react';

const DateRangePicker = ({ dateRange, setDateRange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2">Date Range</h3>
      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
