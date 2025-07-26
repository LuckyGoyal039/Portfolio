import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      timeline: "January, 2023 – July, 2023",
      company: "Adani Digital Labs",
      post: "Software Developer Intern",
      description:
        "Designed and implemented a customized datepicker component with broad applicability across the Adani ecosystem contributing to enhanced user experience. Achieved optimization of image sizes, resulting in reduction of Largest Contentful Paint duration from 6s to 2.5s. Executed the implementation of Google Tag Manager (GTM) events throughout the entire website, contributing to enhanced analytics capabilities and bolstering data-driven insights. Addressed code smells, bug fixes and UI/SASS upgrades to elevate overall system performance.",
      tags: ["Next.js", "TypeScript"],
    },
    {
      timeline: "May, 2021 – February, 2022",
      company: "NetArt",
      post: "React Developer Intern",
      description:
        "Worked on building and maintenance of the Employee Onboarding/Offboarding program. Created an influencer management website to manage Instagram marketing campaigns with Instagram influencers. Created the financing program for subscription and invoicing. Created Robotic Process Automation(RPA) programs to automate workflow.",
      tags: ["React.js", "RPA", "Node.js", "MySQL"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.timeline}
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.post} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.tags.map((tag, i) => (
                <span
                  key={i}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
