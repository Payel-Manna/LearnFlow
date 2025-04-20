
import React, { useState, useContext } from 'react';
import { useSkills } from '../context/SkillContext';
import { v4 as uuidv4 } from 'uuid';

const AddSkillForm = () => {
  const { skills, addSkill } = useSkills()

  const [name, setName] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [selectedPrereqs, setSelectedPrereqs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSkill = {
      id: uuidv4(),
      name,
      level,
      prerequisites: selectedPrereqs,
      status: selectedPrereqs.length === 0 ? 'unlocked' : 'locked',
    };
    if (skills.some(skill => skill.name.toLowerCase() === name.toLowerCase())) {
      alert('Skill with this name already exists!');
      return;
    }
    
    addSkill(newSkill);
    
   
    setName('');
    setLevel('Beginner');
    setSelectedPrereqs([]);
  };

  const handleCheckboxChange = (id) => {
    if (selectedPrereqs.includes(id)) {
      setSelectedPrereqs(selectedPrereqs.filter(pid => pid !== id));
    } else {
      setSelectedPrereqs([...selectedPrereqs, id]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow mb-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">➕ Add a New Skill</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Skill Name</label>
        <input
          type="text"
          className="w-full border rounded-xl px-4 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Level</label>
        <select
          className="w-full border rounded-xl px-4 py-2"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Prerequisites</label>
        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
          {skills.map(skill => (
            <label key={skill.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedPrereqs.includes(skill.id)}
                onChange={() => handleCheckboxChange(skill.id)}
              />
              <span>{skill.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
      >
        Add Skill
      </button>
    </form>
  );
};

export default AddSkillForm;
