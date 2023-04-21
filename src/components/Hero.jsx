import React from "react";
import styles from "../style";
import { building, landing } from "../assets";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col justify-between  ${styles.paddingY}`}
      >
        <motion.div variants={textVariant()}>
          <div className={`flex-1 xl:px-16 px-6 `}>
            <div className={`${styles.flexStart}`}>
              <h1
                className="flex font-poppins font-semibold sm:text-start text-center  md:text-[50px] text-[30px] text-white ss:leading-[80px]
          leading-[55px]"
              >
                Intuitive, scalable property management software
              </h1>
            </div>
            <div className={`${styles.flexStart}`}>
              <p
                className={`${styles.paragraph} flex sm:text-start text-center sm:text-[20px] text-[16px] font-poppins font-medium text-white mt-5 mb-9`}
              >End-to-end software that balances power, simplicity, and ease of
                use.
              </p>
            </div>
          </div>
          <div className={`flex xl:px-16 px-6 md:justify-start justify-center`}>
          <button className=" bg-red-500 hover:bg-red-700 mb-[5%]  text-white font-bold py-2 w-[150px] rounded-full">
            Join Now
          </button>
          </div>
        </motion.div>
        <div className="flex justify-center">
          <img
            src={building}
            className="flex md:w-full max-w-[90%] "
            alt=""
          />
          
        </div>
      </section>
    </>
  );
};

export default Hero;
