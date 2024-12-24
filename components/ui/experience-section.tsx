"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  type: string;
  date: string;
  description: string;
  skills?: string[];
  degree?: string;
}

const experiences: TimelineItem[] = [
  {
    title: "Graduate Research Assistant",
    organization: "Syracuse university",
    location: "Syracuse, NY",
    type: "On-site",
    date: "June 2024 - Present",
    description: "Developing a Java-based backend for a student shuttle service using AWS EKS, S3, and Lambda, boosting service management efficiency while collaborating on a ReactJS and NodeJS frontend to enhance usability, driving higher user satisfaction. Implemented real-time monitoring capabilities using Kafka for student shuttle operations, improving service delivery efficiency and increasing customer satisfaction.",
    skills: ["Amazon Sagemaker", "AWS Beanstalk", "Flask", "Python"],
  },
  {
    title: "Software Engineer",
    organization: "FIS Global",
    location: "Boston, MA",
    type: "Remote",
    date: "June 2023 - May 2024",
    description: "I maintained and enhanced code for the Ambit Asset Finance product, serving clients like Toyota, and BMW, while achieving 80% code coverage with NUnit tests and ensuring high-quality deliverables through code reviews and cross-functional collaboration. I executed SQL queries to manage datasets exceeding 100k records, resolved client-specific issues through JIRA, and gained valuable expertise in fintech software. Additionally, I developed and implemented a CI/CD pipeline using Jenkins, integrated ETL processes, and optimized microservices to enhance the scalability and performance of web applications.",
    skills: ["AWS", "CI/CD", "NUnit", "SQL", "Jenkins", "Microservices"],
  },
  {
    title: "Software Developer Intern",
    organization: "TechR",
    location: "Remote",
    type: "Remote",
    date: "March 2020 - June 2020",
    description: "Developed a city guide app using Java and Android SDK, integrating RESTful APIs for real-time data and optimizing performance with caching strategies, reducing load times by 30%. Designed scalable backend solutions with Firebase, adhered to agile practices, and enhanced user experience through Material Design",
    skills: ["Java", "Android SDK", "RESTful APIs", "Firebase", "Material Design"],
  }
];

const education: TimelineItem[] = [
  {
    title: "Master of Science in Computer Science",
    organization: "Syracuse University",
    location: "Syracuse, NY",
    type: "GPA: 3.73/4",
    date: "Aug 2022 - May 2024",
    description: "",
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    organization: "Pune University",
    location: "Pune, India",
    type: "GPA: 8.82/10",
    date: "Jul 2017 - Jul 2021",
    description: "",
    degree: "BE in Computer Science"
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const items = activeTab === 'experience' ? experiences : education;

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('experience')}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                activeTab === 'experience' 
                  ? "bg-slate-800 text-white" 
                  : "text-slate-400 hover:text-white"
              )}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                activeTab === 'education' 
                  ? "bg-slate-800 text-white" 
                  : "text-slate-400 hover:text-white"
              )}
            >
              Education
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line with responsive positioning */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 lg:transform lg:-translate-x-1/2" />
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 blur-sm lg:transform lg:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex items-start",
                  "flex-col ml-12 lg:ml-0", // Mobile: vertical layout with margin-left
                  "lg:flex-row lg:items-center lg:justify-between", // Desktop: horizontal layout
                  index % 2 === 1 && "lg:flex-row-reverse" // Alternate sides only on desktop
                )}
              >
                {/* Timeline dot with responsive positioning */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-sm" />
                  <div className="relative w-full h-full rounded-full bg-slate-800 border-2 border-indigo-500" />
                </div>

                {/* Content card with responsive width */}
                <div className="group relative w-full lg:w-5/12">
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70" />
                  <div className="relative p-4 sm:p-6 rounded-xl bg-slate-900 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-indigo-400">{item.organization}</p>
                      </div>
                      <span className="text-sm text-slate-400 whitespace-nowrap">{item.date}</span>
                    </div>
                    
                    {/* GPA Display */}
                    {activeTab === 'education' && (
                      <div className="mt-4 relative inline-block">
                        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-sm" />
                        <div className="relative px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/50">
                          <div className="flex items-center gap-2">
                            <svg 
                              className="w-4 h-4 text-indigo-400" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4">
                      {item.description.split('\n').map((point, i) => (
                        <p key={i} className="text-sm text-slate-300 mb-2">{point}</p>
                      ))}
                    </div>

                    {/* Skills tags */}
                    {item.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
