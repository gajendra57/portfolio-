import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-purple-400" size={24} />,
      skills: ['Python', 'JavaScript', 'C++'],
      color: 'purple'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database className="text-blue-400" size={24} />,
      skills: ['React.js', 'Node.js', 'Django', 'Flask'],
      color: 'blue'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-green-400" size={24} />,
      skills: ['Git', 'Docker', 'Linux', 'VSCode'],
      color: 'green'
    },
    {
      title: 'AI/ML Skills',
      icon: <Brain className="text-pink-400" size={24} />,
      skills: ['TensorFlow', 'scikit-learn', 'OpenAI APIs'],
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
      blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
      green: 'from-green-500/20 to-green-600/20 border-green-500/30',
      pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getSkillColor = (color: string) => {
    const colors = {
      purple: 'text-purple-300',
      blue: 'text-blue-300',
      green: 'text-green-300',
      pink: 'text-pink-300'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${getColorClasses(category.color)} p-8 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-transform duration-300 group`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-gray-700/50 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className={`text-lg ${getSkillColor(category.color)} font-medium`}>
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < (skillIndex === 0 ? 5 : skillIndex === 1 ? 4 : 3)
                                ? category.color === 'purple' ? 'bg-purple-400' :
                                  category.color === 'blue' ? 'bg-blue-400' :
                                  category.color === 'green' ? 'bg-green-400' : 'bg-pink-400'
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Visualization */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'Python', 'Django', 'TensorFlow', 'Docker', 'Git', 'JavaScript', 'C++', 'Linux'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;