import React, { createContext, useState, useContext } from 'react';
import skillTreeData from '../data/skillTreeData'; // Import skill data from your existing file

// Create the context
const SkillContext = createContext();

// Create the provider component
export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState(skillTreeData); // Use the imported data
  const unlockNextSkill = (skillId) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === skillId
          ? { ...skill, status: 'completed' }
          : skill.prerequisites.includes(skillId) && skill.status === 'locked'
          ? { ...skill, status: 'unlocked' }
          : skill
      )
    );
  };
  const addSkill = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };
  
  return (
    <SkillContext.Provider value={{ skills, setSkills,unlockNextSkill ,addSkill}}>
      {children}
    </SkillContext.Provider>
  );
};

// Create a custom hook to use the skill context
export const useSkills = () => {
  return useContext(SkillContext);
};
