import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../constants/data";
import { ANIMATION_DURATION } from "../constants/config";
import SectionWrapper from "./layout/SectionWrapper";

const Skills = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_DURATION.normal
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: ANIMATION_DURATION.fast
      }
    }
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
    >
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {SKILL_CATEGORIES.map((item) => (
          <motion.div
            key={item.category}
            variants={itemVariants}
            className="group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {item.category}
              </h3>
            </div>

            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
              variants={containerVariants}
            >
              {item.skills.map((skill, _) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="px-4 py-3 border border-border rounded-lg text-sm text-center font-medium text-foreground bg-card hover:bg-accent hover:border-primary/50 transition-all duration-200 cursor-default shadow-sm hover:shadow-md">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="mt-8 border-b border-border/30" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;