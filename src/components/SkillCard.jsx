import React from 'react';
import { useSkills } from '../context/SkillContext';

const SkillCard = ({ skill }) => {
  const { unlockNextSkill, resetSkills, skills } = useSkills();

  const handleCompletion = () => {
    unlockNextSkill(skill.id);
  };

  const handleReset = () => {
    resetSkills(skill.id);
  };

  const prereqNames = skill.prerequisites
    ? skill.prerequisites
        .map((prereqId) => skills.find((s) => s.id === prereqId)?.name)
        .filter(Boolean)
        .join(', ')
    : 'None';

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">{skill.name}</h2>
      <p className="text-sm text-gray-500">Level: {skill.level}</p>
      <p className="text-sm text-gray-500">Prerequisites: {prereqNames}</p>
      <div className="mt-2">
        <p
          className={`text-sm font-semibold ${
            skill.status === 'completed'
              ? 'text-green-500'
              : skill.status === 'unlocked'
              ? 'text-yellow-500'
              : 'text-gray-500'
          }`}
        >
          Status: {skill.status}
          
        </p>
      </div>

      {/* Show Mark as Completed */}
      {skill.status === 'unlocked' && (
        <button
          onClick={handleCompletion}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Mark as Completed
        </button>
      )}

      {/* Show Reset Skill */}
      {skill.status === 'completed' && (
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Reset Skill
        </button>
      )}

      {skill.status === 'completed' && (
        <p className="mt-4 text-green-500">Skill Completed!</p>
      )}
    </div>
  );
};

export default SkillCard;
