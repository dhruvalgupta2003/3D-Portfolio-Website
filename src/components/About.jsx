import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index ,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45 ,
          scale: 1 ,
          speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">

          <img  src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Welcome to my portfolio website! I am a skilled and versatile software
        developer with expertise in various areas of technology including web
        development, blockchain, web 3, and machine learning. With a strong
        proficiency in popular frameworks such as React, Three.js, Node, Flask,
        and Django, I am committed to creating practical, scalable, and
        user-friendly solutions to solve real-world problems. Whether you are
        looking to develop a complex web application or explore the
        possibilities of emerging technologies, I am eager to collaborate with
        you and bring your ideas to life. Take a look at my portfolio to see
        some of my past work and projects. Let's connect and discuss how we can
        work together to achieve your goals.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

      
    </>
  );
};

export default SectionWrapper(About, "about");
