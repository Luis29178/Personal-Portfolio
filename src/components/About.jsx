import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../Constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w.full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] mac-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a software engineer with expertise in React, JavaScript, TypeScript, and web development. My background in computer science and passion for creating user-friendly web apps have led to significant contributions in various projects. With a keen understanding of modern web technologies, I've built interactive user interfaces and prioritize writing clean, efficient code. I excel in teamwork, possess strong communication skills, and am always eager to stay updated with industry trends and expand my knowledge.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// component wrapper is applyed to the whole section
export default SectionWrapper(About, "about");
