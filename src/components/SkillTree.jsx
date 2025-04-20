import React, { useState } from 'react';
import { useSkills } from '../context/SkillContext';
import SkillCard from './SkillCard';
import AddSkillForm from './AddSkillForm';
import BadgeProgress from './BadgeProgress'; 

const SkillTree = () => {
  const { skills, unlockNextSkill } = useSkills();
  const [showForm, setShowForm] = useState(false); // state for showing AddSkillForm
  
  const levelStyles = {
    Beginner: 'bg-blue-50',
    Intermediate: 'bg-yellow-50',
    Advanced: 'bg-red-50',
  };

  // const ResetButton = () => {
  //   const { resetSkills } = useSkills();
  // }

  return (
    <div className="p-6 flex flex-col h-screen">
      {/* Skill Tree and Progress Bar at the top */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">🌳 Skill Tree</h1>
        <BadgeProgress skills={skills} />
      </div>

      {/* Skill Levels displayed side by side */}
      <div className="flex space-x-6">
        {['Beginner', 'Intermediate', 'Advanced'].map(level => (
          <div key={level} className={`p-6 rounded-xl ${levelStyles[level]} shadow-lg flex-1`}>
            <h3 className="text-xl font-semibold mb-2">{level}</h3>
            <div className="space-y-4">
              {skills
                .filter(skill => skill.level === level)
                .map(skill => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    unlockNextSkill={unlockNextSkill}
                    skills={skills}
                  />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Button to add a new skill at the bottom */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        ➕ Add Skill
      </button>

      {/* Modal for AddSkillForm */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-auto">
            <AddSkillForm />
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;

