import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] mx-auto flex flex-col">
      <div
        className={`${styles.paddingX} max-h-[900px] relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Luis</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a skilled and dedicated software engineer with expertise in
            React, JavaScript, <br className="sm:block hidden" /> TypeScript,
            Web Development, CSS, and HTML and more. With a strong educational
            background in computer science and a passion for creating intuitive
            and visually appealing web applications, I have made significant
            contributions to various projects.
          </p>
        </div>

        <div className="w-[150px] min-h-[250px]  flex flex-col justify-center">
          <div className="w-[200px] h-[350px]">
            <ComputersCanvas />
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center mt-[150px]">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
