import React from 'react';
import { Building2 } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  duration, 
  description, 
  skills, 
  isLast = false 
}) => {
  return (
    <div className="relative flex">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-900 z-10"></div>
        {!isLast && <div className="w-0.5 h-full bg-blue-500/30 mt-2"></div>}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="border border-blue-500/30 rounded-lg p-6 bg-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
              <p className="text-blue-400 font-medium">{company}</p>
              <p className="text-gray-400 text-sm">{duration}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-4">
            {description}
          </p>

          {/* Skills */}
          <div className="border-t border-slate-700 pt-4">
            <p className="text-sm font-medium text-gray-400 mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-slate-700/50 text-gray-300 rounded border border-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Experienced Software Developer",
      company: "Amdocs",
      duration: "July 2025 - present",
      description: "Led the design and implementation of a framework to automate the conversion of business Excel data into JSONs for the Amdocs Catalog, eliminating manual processes and reducing effort by 80%. Took ownership of the end-to-end technical design, guiding the team to deliver a reliable, scalable solution that minimized errors and significantly improved operational efficiency.",
      skills: [
        "Java", "Spring Boot", "Microservices", "RESTAPI Development", "CI/CD",
				"AWS", "Docker", "Kubernetes", "Couchbase"
      ]
    },
    {
      title: "Software Developer",
      company: "Amdocs",
      duration: "August 2023 - July 2025",
      description: "I have experience implementing telecom product offers, discounts, pricing models, and campaigns using the Amdocs Catalog Suite to ensure seamless fulfillment. By aligning configurations with TM Forum models and Open APIs, I accelerated product launches and improved agility. Leveraging Jira and Confluence, I helped boost team productivity by 15% while delivering high-value solutions efficiently.",
      skills: [
        "Java","Microservices", "linux", "Couchbase", "REST API", "Unit Testing", "UAT",
        
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-16 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My work experience as a software engineer and working on different companies and projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              skills={exp.skills}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
