import React from 'react';

const BadgeProgress = ({ skills }) => {
  
  const completedSkills = skills.filter(skill => skill.status === 'completed').length;
  const totalSkills = skills.length;
  const progressPercentage = totalSkills === 0 ? 0 : (completedSkills / totalSkills) * 100;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Progress: {completedSkills}/{totalSkills}</h2>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">Completion: {progressPercentage.toFixed(0)}%</p>
    </div>
  );
};

export default BadgeProgress;
