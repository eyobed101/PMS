import React from "react";
// import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import  styles from '../style'
import { github} from "../assets";
// import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-[#0d586f] hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 ss:max-w-[350px] max-w-[90%] rounded-[15px]">
      
        <div className='flex justify-center mt-10 w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-[80%] h-[80%] object-cover rounded-2xl'
          />

          
        </div>

        <div className='mt-0'>
          <h3 className='text-white text-center font-bold text-[24px]'>{name}</h3>
          <p className='text-center text-white text-[17px] m-5 leading-7'>{description}</p>
        </div>

        
      {/* </Tilt> */}
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex justify-center items-center mt-10">
        <p className={`${styles.heading2} text-center max-w-[800px] `}>There’s no such thing as a slow day in property management</p>
        </div>
      </motion.div>
      <div className="flex justify-center items-center mt-10">
      
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.paragraph} flex text-center max-w-[900px] text-black mt-3 text-[18px]  leading-[30px]`}
        >
         No matter what the day brings, Neway’s simple, unified property management platform is there to help you – and your business – be at your best.
        </motion.p>
      
        </div>
      <div className='mt-20 flex justify-center flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Services;
