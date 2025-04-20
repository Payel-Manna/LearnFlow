

import React, { createContext, useState, useContext, useEffect } from 'react';
import skillTreeData from '../data/skillTreeData'; 


const SkillContext = createContext();


export const SkillProvider = ({ children }) => {
  
  
  const initializeSkills = (data) => {
    const savedSkills = JSON.parse(localStorage.getItem('skills'));
  
    if (savedSkills) {
      // Merge new skills (in data but not in saved) into savedSkills
      const savedSkillIds = savedSkills.map((s) => s.id);
      const newSkills = data
        .filter((d) => !savedSkillIds.includes(d.id))
        .map((skill) => {
          if (skill.prerequisites.length === 0) {
            return { ...skill, status: 'unlocked' };
          }
          return { ...skill, status: 'locked' };
        });
  
      return [...savedSkills, ...newSkills];
    }
  
    // First time load – initialize based on prerequisites
    return data.map((skill) => {
      if (skill.status === 'completed') return skill;
      if (skill.prerequisites.length === 0) {
        return { ...skill, status: 'unlocked' };
      }
      return { ...skill, status: 'locked' };
    });
  };
  
  const [skills, setSkills] = useState(() => initializeSkills(skillTreeData));

  
  useEffect(() => {
    if (skills.length > 0) {
      localStorage.setItem('skills', JSON.stringify(skills));
    }
  }, [skills]);

  const unlockNextSkill = (skillId) => {
    setSkills((prevSkills) => {
      const updatedSkills = prevSkills.map((skill) =>
        skill.id === skillId ? { ...skill, status: 'completed' } : skill
      );
  
      return updatedSkills.map((skill) => {
        if (skill.status === 'locked' && skill.prerequisites.length > 0) {
          const allPrereqsCompleted = skill.prerequisites.every((prereqId) => {
            const prereq = updatedSkills.find((s) => s.id === prereqId);
            return prereq && prereq.status === 'completed';
          });
  
          if (allPrereqsCompleted) {
            return { ...skill, status: 'unlocked' };
          }
        }
        return skill;
      });
    });
  };
  
  
 
   const resetSkills = (skillId) => {
    setSkills((prevSkills) => {
      // Step 1: Lock the skill
      let updatedSkills = prevSkills.map((skill) => {
        if (skill.id === skillId) {
          return { ...skill, status: 'locked' };
        }
        return skill;
      });
  
      // Step 2: Lock skills that depend on it
      updatedSkills = updatedSkills.map((skill) => {
        if (
          skill.prerequisites.includes(skillId) &&
          skill.status !== 'locked'
        ) {
          return { ...skill, status: 'locked' };
        }
        return skill;
      });
  
      // Step 3: Recalculate unlock status (including this one)
      updatedSkills = updatedSkills.map((skill) => {
        if (
          skill.status === 'locked' &&
          skill.prerequisites.length > 0
        ) {
          const allPrereqsCompleted = skill.prerequisites.every((prereqId) => {
            const prereq = updatedSkills.find((s) => s.id === prereqId);
            return prereq && prereq.status === 'completed';
          });
  
          if (allPrereqsCompleted) {
            return { ...skill, status: 'unlocked' };
          }
        }
        return skill;
      });
      // Step 4: Unlock root skills with no prerequisites
      updatedSkills = updatedSkills.map((skill) => {
       if (skill.prerequisites.length === 0 && skill.status === 'locked') {
        return { ...skill, status: 'unlocked' };
       }
       return skill;
       });

  
      return updatedSkills;
    });
  };
  

  const addSkill = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };
  
  return (
    <SkillContext.Provider value={{ skills, setSkills,unlockNextSkill ,addSkill,resetSkills}}>
      {children}
    </SkillContext.Provider>
  );
};


export const useSkills = () => {
  return useContext(SkillContext);
};
