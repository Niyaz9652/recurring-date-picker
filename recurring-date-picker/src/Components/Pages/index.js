import React from 'react';
import RecurringDatePicker from '../../Components/RecurringDatePicker';
import '../../app/globals.css'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RecurringDatePicker/>
    </div>
  );
}
