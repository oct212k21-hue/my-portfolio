import React from 'react';
import { Code2, Database, Wrench, Globe } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  color: string;
  textColor?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, color, textColor = 'text-gray-300' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-2 rounded-lg border ${color} ${textColor} text-sm font-medium transition-all duration-200 hover:scale-105`}>
      {name}
    </span>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; color: string; textColor?: string }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="border border-purple-500/30 rounded-lg p-6 bg-slate-800/50 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge 
            key={index} 
            name={skill.name} 
            color={skill.color}
            textColor={skill.textColor}
          />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const backendSkills = [
    { name: 'Java', color: 'border-orange-500 bg-orange-500/10', textColor: 'text-orange-300' },
    { name: 'Spring', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
    { name: 'Spring Boot', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
    { name: 'Spring MVC', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
    { name: 'JPA', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
   
   
  
    { name: 'MySQL', color: 'border-orange-500 bg-orange-500/10', textColor: 'text-orange-300' },
    { name: 'MongoDB', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
  ];

  const frontendSkills = [
    { name: 'HTML', color: 'border-orange-500 bg-orange-500/10', textColor: 'text-orange-300' },
    { name: 'CSS', color: 'border-blue-500 bg-blue-500/10', textColor: 'text-blue-300' },
    { name: 'JavaScript', color: 'border-yellow-500 bg-yellow-500/10', textColor: 'text-yellow-300' },
   
    
    { name: 'Bootstrap', color: 'border-purple-500 bg-purple-500/10', textColor: 'text-purple-300' },
  ];

  const otherSkills = [
   
   
    { name: 'Rest API', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
		
    { name: 'Microservices', color: 'border-indigo-500 bg-indigo-500/10', textColor: 'text-indigo-300' },
		{ name: 'Docker', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
		{ name: 'Kubernetes', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
		{ name: 'CI/CD', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
    { name: 'TDD', color: 'border-gray-500 bg-gray-500/10', textColor: 'text-gray-300' },
    { name: 'Unit Testing', color: 'border-gray-500 bg-gray-500/10', textColor: 'text-gray-300' },
    { name: 'UAT', color: 'border-orange-500 bg-orange-500/10', textColor: 'text-orange-300' },
    { name: 'XML', color: 'border-purple-500 bg-purple-500/10', textColor: 'text-purple-300' },
    { name: 'JSON', color: 'border-gray-500 bg-gray-500/10', textColor: 'text-gray-300' },
    { name: 'Agile Development', color: 'border-blue-500 bg-blue-500/10', textColor: 'text-blue-300' },
		 { name: 'Amdocs Catalog', color: 'border-blue-500 bg-blue-500/10', textColor: 'text-blue-300' },
  ];

  const toolsSkills = [
    { name: 'Git', color: 'border-red-500 bg-red-500/10', textColor: 'text-red-300' },
    { name: 'Github', color: 'border-gray-500 bg-gray-500/10', textColor: 'text-gray-300' },
    { name: 'JIRA', color: 'border-blue-500 bg-blue-500/10', textColor: 'text-blue-300' },
    { name: 'VS Code', color: 'border-cyan-500 bg-cyan-500/10', textColor: 'text-cyan-300' },
    { name: 'Postman', color: 'border-orange-500 bg-orange-500/10', textColor: 'text-orange-300' },
    { name: 'Swagger', color: 'border-green-500 bg-green-500/10', textColor: 'text-green-300' },
    { name: 'Eclipse', color: 'border-orange-500 bg-orange-500/10', textColor: 'text-orange-300' },
    { name: 'IntelliJ', color: 'border-blue-500 bg-blue-500/10', textColor: 'text-blue-300' },
    { name: 'Oracle SQL Developer', color: 'border-gray-500 bg-gray-500/10', textColor: 'text-gray-300' },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-16 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my skills on which I have been working on for the past 3 years.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCategory
            title="Backend"
            icon={<Database className="w-6 h-6 text-purple-400" />}
            skills={backendSkills}
          />
          
          <SkillCategory
            title="Frontend"
            icon={<Globe className="w-6 h-6 text-purple-400" />}
            skills={frontendSkills}
          />
          
          <SkillCategory
            title="Others"
            icon={<Code2 className="w-6 h-6 text-purple-400" />}
            skills={otherSkills}
          />
          
          <SkillCategory
            title="Tools"
            icon={<Wrench className="w-6 h-6 text-purple-400" />}
            skills={toolsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
