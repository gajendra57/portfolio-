import React from 'react';
import { ExternalLink, Github, Bot, Globe, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Chatbot',
      description: 'Built an intelligent chatbot using Python and OpenAI API with natural language processing capabilities.',
      icon: <Bot className="text-purple-400" size={32} />,
      technologies: ['Python', 'OpenAI API', 'NLP', 'Flask'],
      gradient: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      features: [
        'Natural language understanding',
        'Context-aware responses',
        'Multi-turn conversations',
        'API integration'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a personal portfolio using React.js with modern design principles and responsive layout.',
      icon: <Globe className="text-blue-400" size={32} />,
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      gradient: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      features: [
        'Responsive design',
        'Modern UI/UX',
        'Interactive animations',
        'SEO optimized'
      ]
    },
    {
      title: 'E-commerce Backend',
      description: 'Designed REST APIs with Node.js & MongoDB for a complete e-commerce solution with authentication.',
      icon: <ShoppingCart className="text-green-400" size={32} />,
      technologies: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      gradient: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      features: [
        'RESTful API design',
        'User authentication',
        'Product management',
        'Order processing'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${project.gradient} p-8 rounded-2xl border ${project.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
              >
                {/* Project Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-gray-700/50 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 mt-auto">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors group">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors group">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="https://github.com/gajendra57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;