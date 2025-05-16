"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SkillFilter from "@/components/skill-filter";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiJest,
} from "react-icons/si";

import { VscGithubAction } from "react-icons/vsc";

const allSkillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={24} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={24} color="#000000" /> },
      { name: "TypeScript", icon: <SiTypescript size={24} color="#3178C6" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} color="#06B6D4" />,
      },
      {
        name: "HTML/CSS",
        icon: (
          <div className="flex">
            <FaHtml5 size={24} color="#E34F26" />
            <FaCss3Alt size={24} color="#1572B6" />
          </div>
        ),
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={24} color="#339933" /> },
      { name: "Express", icon: <SiExpress size={24} color="#000000" /> },
      { name: "Python", icon: <FaPython size={24} color="#3776AB" /> },
      { name: "Django", icon: <SiDjango size={24} color="#092E20" /> },
      { name: "GraphQL", icon: <SiGraphql size={24} color="#E10098" /> },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={24} color="#4169E1" /> },
      { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
      { name: "Firebase", icon: <SiFirebase size={24} color="#FFCA28" /> },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={24} color="#F05032" /> },
      { name: "Docker", icon: <FaDocker size={24} color="#2496ED" /> },
      { name: "AWS", icon: <FaAws size={24} color="#FF9900" /> },
      { name: "CI/CD", icon: <VscGithubAction size={24} color="#2088FF" /> },
      { name: "Jest", icon: <SiJest size={24} color="#C21325" /> },
    ],
  },
];

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState(allSkillCategories);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleFilter = (query: string) => {
    if (!query) {
      setSkillCategories(allSkillCategories);
      return;
    }

    const filtered = allSkillCategories
      .map((category) => {
        const filteredSkills = category.skills.filter((skill) =>
          skill.name.toLowerCase().includes(query.toLowerCase())
        );

        return {
          ...category,
          skills: filteredSkills,
        };
      })
      .filter((category) => category.skills.length > 0);

    setSkillCategories(filtered);
  };

  return (
    <section id="skills" className="py-8 dark:bg-[#0A0A0A]">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4">
            My Skills
          </h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>

        <SkillFilter onFilter={handleFilter} />

        {skillCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="bg-accent dark:bg-[#111111] z-10 rounded-lg p-6 border h-full transition-all duration-300">
                  <h3 className="text-xl font-semibold text-primary dark:text-primary/80 mb-6 group-hover:text-muted-foreground transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 * index + 0.05 * skillIndex,
                        }}
                        className="group/skill"
                      >
                        <div className="bg-primary/5 dark:bg-[#1A1A1A] rounded-lg p-4 border transition-all duration-300">
                          <div className=" flex items-center justify-between mb-2">
                            <span className="font-medium text-primary dark:text-primary/80 group-hover/skill:text-muted-foreground transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="group-hover/skill:translate-x-2 transition-all duration-300">
                              {skill.icon}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">
              No skills found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
