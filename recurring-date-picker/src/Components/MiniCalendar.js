import React from 'react';

const MiniCalendar = ({ recurrence, dateRange, days }) => {
  const { start, end } = dateRange;

  const renderPreview = () => {
    if (!start) return 'Select a start date to preview recurrence.';
    if (recurrence === 'daily') return `Daily from ${start} to ${end || 'ongoing'}`;
    if (recurrence === 'weekly')
      return `Weekly on ${days.length ? days.join(', ') : 'no days selected'} from ${start} to ${
        end || 'ongoing'
      }`;
    if (recurrence === 'monthly') return `Monthly from ${start} to ${end || 'ongoing'}`;
    if (recurrence === 'yearly') return `Yearly from ${start} to ${end || 'ongoing'}`;
  };

  return (
    <div className="p-4 border rounded bg-gray-100">
      <h3 className="text-md font-semibold mb-2">Recurrence Preview</h3>
      <p>{renderPreview()}</p>
    </div>
  );
};

export default MiniCalendar;
