"use client";
import { SparklesCore } from "./sparkles";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAngular, FaAws, FaGitAlt, FaDocker, FaJira, FaConfluence } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpringboot, SiNextdotjs, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiFirebase, SiGooglecloud, SiKubernetes, SiJenkins, SiPostman, SiRedis, SiGraphql, SiApachekafka, SiApachehadoop, SiOpencv, SiDotnet, SiSharp } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useTheme } from "next-themes";
import { skillsData } from "@/lib/metadata";

const skills = {
  row1: [
    { title: "HTML", icon: FaHtml5, color: "#E34F26" },
    { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { title: "Python", icon: FaPython, color: "#3776AB" },
    { title: "C++", icon: SiCplusplus, color: "#00599C" },
    { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { title: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { title: "Java", icon: FaJava, color: "#007396" },
    { title: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { title: "React", icon: FaReact, color: "#61DAFB" },
    { title: "Node.js", icon: FaNodeJs, color: "#339933" },
  ],
  row2: [
    { title: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
    { title: "Express", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
    { title: "Angular", icon: FaAngular, color: "#DD0031" },
    { title: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { title: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { title: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { title: "MySQL", icon: SiMysql, color: "#4479A1" },
    { title: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { title: "Docker", icon: FaDocker, color: "#2496ED" },
    { title: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  ],
  row3: [
    { title: "AWS", icon: FaAws, color: "#FF9900" },
    { title: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { title: "Git", icon: FaGitAlt, color: "#F05032" },
    { title: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { title: "JIRA", icon: FaJira, color: "#0052CC" },
    { title: "Kafka", icon: SiApachekafka, color: "#231F20" },
    { title: "Hadoop", icon: SiApachehadoop, color: "#FF652F" },
    { title: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    { title: ".NET", icon: SiDotnet, color: "#512BD4" },
    { title: "C#", icon: SiSharp, color: "#239120" },
  ]
};


const SkillIcon = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative flex items-center justify-center h-24 w-24 rounded-xl bg-[rgba(255,255,255,0.08)] transition-all duration-300 transform group-hover:scale-110 border border-transparent group-hover:border-white/20">
        <skill.icon 
          className="h-14 w-14 transition-colors duration-200"
          style={{ 
            color: skill.color
          }}
        />
        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-sm text-white font-medium">{skill.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-[#e5e7eb] mb-12 text-center">Technologies I work with</p>

        <div className="flex flex-col items-center gap-12">
          {Object.values(skills).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                "flex flex-wrap justify-center gap-8",
                rowIndex === 1 && "ml-10" // Offset second row for pyramid effect
              )}
            >
              {row.map((skill, index) => (
                <SkillIcon key={skill.title} skill={skill} index={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 