import React, { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DateRangePicker from './DateRangePicker';
import DaySelection from './DaySelection';
import MiniCalendar from './MiniCalendar';

const RecurringDatePicker = () => {
  const [recurrence, setRecurrence] = useState('daily');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [days, setDays] = useState([]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Recurring Date Picker</h2>
      <RecurrenceOptions recurrence={recurrence} setRecurrence={setRecurrence} />
      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
      {recurrence === 'weekly' && <DaySelection days={days} setDays={setDays} />}
      <MiniCalendar recurrence={recurrence} dateRange={dateRange} days={days} />
    </div>
  );
};

export default RecurringDatePicker;
