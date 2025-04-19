import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md">
        <h1 className="text-2xl font-semibold text-blue-600">LearnFlow</h1>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/quiz" className="hover:text-blue-500">Quiz</Link>
          <Link to="/skillTree" className="hover:text-blue-500">Skill Tree</Link>
          <Link to="/dailyFeed" className="hover:text-blue-500">Daily Feed</Link>
        </nav>
      </header>

      
       <main className="px-6 py-16 bg-blue-50">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Unlock Your Learning Potential
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Discover your learning style, grow your skills, and get personalized content every day.
        </p>

      {/* FEATURE SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 bg-white">
        <FeatureCard
          title="🎯 Learning Style"
          description="Take a quiz to discover your learning style."
          link="/quiz"
          color="blue"
        />
        <FeatureCard
          title="🧩 Skill Tree"
          description="Track your skills like a game and unlock new abilities."
          link="/skillTree"
          color="green"
        />
        <FeatureCard
          title="📚 Daily Feed"
          description="Get daily learning content based on your goals."
          link="/dailyFeed"
          color="purple"
        />
      </section>
      </main>
      
      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-gray-100 mt-auto">
        © {new Date().getFullYear()} LearnFlow. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, link, color }) {
  const colorMap = {
    blue: 'text-blue-600 hover:text-blue-700',
    green: 'text-green-600 hover:text-green-700',
    purple: 'text-purple-600 hover:text-purple-700',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h3 className={`text-xl font-semibold mb-3 ${colorMap[color]}`}>{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <Link to={link} className={`text-sm font-medium ${colorMap[color]}`}>
        Learn More →
      </Link>
    </div>
  );
}

export default Home;
