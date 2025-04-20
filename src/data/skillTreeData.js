const skillTreeData = [
    {
      id: 'html',
      name: 'HTML',
      level: 'Beginner',
      prerequisites: [],
      status: 'completed', // You might have 'completed', 'locked', 'unlocked'
    },
    {
      id: 'css',
      name: 'CSS',
      level: 'Beginner',
      prerequisites: ['html'],
      status: 'unlocked',
    },
    {
      id: 'js',
      name: 'JavaScript',
      level: 'Intermediate',
      prerequisites: ['css'],
      status: 'locked',
    },
    {
      id: 'react',
      name: 'React.js',
      level: 'Advanced',
      prerequisites: ['js'],
      status: 'locked',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      level: 'Intermediate',
      prerequisites: ['css'],
      status: 'locked',
    },
  ]

  export default skillTreeData;  