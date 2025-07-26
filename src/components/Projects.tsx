import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      picture: "/project/dashboard.png",
      title: "E-Commerce Dashboard",
      link: "https://ecommerce-cms-jade.vercel.app/",
      description: `Developed a comprehensive Admin Dashboard to efficiently oversee and manage various aspects of an E-Commerce store,
      including categories, products, and banners.
      Functionality to create, update, and delete multiple stores, showcasing adaptability to various business requirements.
      Created a flexible product management system allowing administrators to categorize products into different categories,
      enhancing the organization and navigation of the E-Commerce platform.
      Introduced a dynamic "Billboard" feature, providing administrators with the ability to showcase highlighted products or
      promotions on the website, thereby maximizing visibility for key offerings.`,
      tags: ["Next.js", "TypeScript"],
    },
    {
      picture: "/project/store.png",
      title: "E-Commerce Store",
      link: "https://next-ecommerce-store-psi.vercel.app/",
      description: `Developed a Next.js based E-Commerce store featuring a dedicated "Featured Products" page with Dynamic Billboards,
      showcasing key offerings to attract user attention.
      Incorporated a "Related Items" feature to encourage cross-selling and up-selling.
      Created an interactive image gallery on product page, providing users with a visually engaging representation of each item.
      Implemented a streamlined "Add to Cart" functionality and Integrated secure Stripe payment processing, ensuring a reliable and user-friendly payment mechanism for seamless transactions.`,
      tags: ["React.js", "RPA"],
    },
    {
      picture: "/project/country.png",
      title: "React Countries Information",
      link: "https://bhoomaahamso.github.io/Rest-Api-Website/#/",
      description: `Developed a website displaying information
      (national flag, language, currency, population) of
      different countries of the world.
      Routing has been implemented in the project to
      navigate between pages.
      The website is optimized to use search and
      filtering features.`,
      tags: ["React.js", "RPA"],
    },
    {
      picture: "/project/covid-site.png",
      title: "React Covid Tracker",
      link: "https://bhoomaahamso.github.io/React-Covid-Tracker/",
      description: `Built a website to track Covid-19 cases worldwide.
      Fetched Data from disease.sh API to get
      information about covid related deaths, recoveries
      and total cases in the world.
      Used leaflet to display map and chart.js to show
      covid related data in graph.`,
      tags: ["React.js", "RPA"],
    },
  ];
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex items-center flex-wrap lg:justify-center gap-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1 }}
              className="w-[350px] lg:w-1/4"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  className="max-lg:mx-auto mb-6 rounded aspect-auto"
                  src={project.picture}
                  alt="project-image"
                  width={350}
                  height={350}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.tags.map((tag, i) => (
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
}
export default Projects;
