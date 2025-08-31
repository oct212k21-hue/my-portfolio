import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface EducationItemProps {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  institution, 
  degree, 
  duration, 
  grade, 
  description, 
  icon,
  isLast = false 
}) => {
  return (
    <div className="relative flex">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-slate-900 z-10"></div>
        {!isLast && <div className="w-0.5 h-full bg-purple-500/30 mt-2"></div>}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="border border-purple-500/30 rounded-lg p-6 bg-slate-800/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">{institution}</h3>
              <p className="text-purple-400 font-medium mb-1">{degree}</p>
              <p className="text-gray-400 text-sm">{duration}</p>
            </div>
          </div>

          {/* Grade */}
          <div className="mb-4">
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Grade: </span>
              <span className="text-white">{grade}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationData = [
    {
      institution: "VIT University, Chennai",
      degree: "Bachelor of Technology in Computer Science and Engineering with Specialization in Cyber Physical Systems",
      duration: "July 2019 - Apr 2023",
      grade: "8.01 CGPA",
      description: "I completed B.Tech in CSE with spl in Cyber Physical Systems at VIT University, Chennai. I have taken courses in Data Structures, Algorithms, Object Oriented Programming, Software Architecture and Design, Database Management System (DBMS), Web Technologies, Problem Solving, Project...",
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />
    },
    {
      institution: "Sri Chaitanya Junior College , AP",
      degree: "BIEAP(XII), Science with Computer",
      duration: "Apr 2015 - Apr 2016",
      grade: "96.1%",
      description: "I completed my class 12 high school education at Sri Chaitanya JR College, Vijayawada, where I did my majors in Maths , Physics and Chemistry",
      icon: <School className="w-6 h-6 text-purple-400" />
    },
    {
      institution: "Sri Chaitanya Public School , AP",
      degree: "BSEAP(X)",
      duration: "Apr 2015 - Apr 2016",
      grade: "97%",
      description: "I completed my class 10 education at Sri Chaitanya Public School , Chirala",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-16 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              duration={edu.duration}
              grade={edu.grade}
              description={edu.description}
              icon={edu.icon}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
