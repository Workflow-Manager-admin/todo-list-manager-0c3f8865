import React from 'react';

const StatusBar = ({ completedCount, totalCount }) => {
  return (
    <div className="status-bar">
      <span>Completed: {completedCount}</span>
      <span>Total: {totalCount}</span>
    </div>
  );
};

export default StatusBar;
