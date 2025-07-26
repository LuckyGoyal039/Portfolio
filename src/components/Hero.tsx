import Image from "next/image";
import { motion } from "framer-motion";
import LuckyGoyalImage from ""
const Hero = () => {
  const delay = (val: number) => ({
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: val },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 max-sm:order-3 max-sm:mt-8">
          <div className="flex flex-col items-center sm:ml-9 lg:items-start">
            <motion.h1
              variants={delay(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="pb-8 text-4xl sm:text-6xl font-thin max-sm:text-center tracking-tight lg:mt-16"
            >
              Lucky Goyal
            </motion.h1>
            <motion.span
              variants={delay(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={delay(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Hi, I&#39;m Lucky Goyal, a web developer with a knack
              for crafting captivating frontend experiences. I&#39;ve honed my
              skills during my tenure at Adani Digital Labs, where I learned
              from the best. Beyond the office, I&#39;m all about pushing
              boundaries, whether it&#39;s through open-source contributions or
              personal projects. Always striving for self-improvement, I&#39;m on a
              perpetual journey of growth and innovation.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center order-2 items-center w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex justify-center"
          >
            <Image src="/luckyGoyal.jpg" alt="" className="rounded-2xl" width={300} height={300} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
