import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Image
              className="rounded-2xl"
              src="/pic.jfif"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I specialize in leveraging the power of Next.js and the MERN stack
              to build dynamic, interactive web applications that redefine user
              experiences. Recently, while working at Adani Digital Labs, I
              focused on enhancing their ecosystem&#39;s user experience by
              designing and implementing significant changes to their frontend.
              I implemented Google Tag Manager events for improved analytics and
              data-driven insights and additionally, I optimized their Image
              component which significantly reduced the Largest Contentful Paint
              duration. In my previous internship, I contributed to the
              development and maintenance of an Employee Onboarding/Offboarding
              application. I also created an influencer-management website for
              Instagram marketing campaigns, Executed the development of a
              financing program for subscription and invoicing, and worked on
              Robotic Process Automation (RPA) to automate workflow processes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default About;
