import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 bg-hero-pattern bg-hero z-10">
        <StarsCanvas className="absolute inset-0 z-20" />
      </div>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-30`}
      >
        

        <div className="mt-20 flex flex-wrap justify-center gap-3">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Manisha.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I extract insights from data through <br className="sm:block hidden" />
            predictive analytics and machine learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;