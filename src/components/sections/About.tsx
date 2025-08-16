import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code, Brain, Award, Target, Lightbulb, Rocket } from "lucide-react"
import { useState, useEffect } from "react"

const skills = {
  programming: ["Python", "React", "Next.js", "C++", "Java", "R", "JavaScript", "TypeScript"],
  ai: ["Machine Learning", "Deep Learning",  "Data Science", "Computer Vision"],
  tools: ["Git", "MongoDB", "PostgreSQL"],
  soft: ["Problem Solving", "Communication", "Team Leadership", "Critical Thinking"]
}

const achievements = [
  { icon: Award, title: "AI Innovation Award", description: "Recognition for outstanding AI project" },
  { icon: Target, title: "Project Success Rate", description: "95% client satisfaction rate" },
  { icon: Lightbulb, title: "Creative Solutions", description: "50+ innovative implementations" },
  { icon: Rocket, title: "Deliver Project Of Client", description: "Always ahead of deadlines" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function About() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const originalImageUrl = "/lovable-uploads/naveenphoto.jpg";

  useEffect(() => {
    setImageUrl(originalImageUrl);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passionate learner and Frontend Developer with a strong foundation in 
            computer science and a vision for innovative technological solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <motion.div 
                  className="w-full h-80 rounded-lg overflow-hidden mb-6 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={imageUrl} 
                    alt="Naveen Rajpoot" 
                    className="w-full h-full object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-4 gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Naveen Rajpoot
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Founder Of Euronx, passionate about leveraging artificial intelligence 
                  to solve real-world problems and create meaningful impact through technology.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:glow-effect transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mr-4"
                  >
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  <strong> Cyber Security Analyst  (Artificial Intelligence Lerner)</strong><br />
                  Dream collage Indian Institute of Technology Bombay<br />
                  Expected Graduation: 2030
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:glow-effect transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mr-4"
                  >
                    <Briefcase className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <p className="text-muted-foreground">
                  Founder Of Euronx  · Freelance Frontend Developer · Working in Digiwill 
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:glow-effect transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mr-4"
                  >
                    <Code className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-semibold">Technical Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.concat(skills.ai, skills.tools).map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="badge bg-primary text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      style={{
                        background: hoveredSkill === skill ? 
                          'linear-gradient(45deg, #8B5CF6, #EC4899)' : 
                          'hsl(var(--primary))'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:glow-effect transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mr-4"
                  >
                    <Brain className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-semibold">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="badge bg-secondary text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Key <span className="gradient-text">Achievements</span>
          </h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="p-6 hover:glow-effect transition-all duration-300 group">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <achievement.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
            { number: "95%", label: "Client Satisfaction", color: "from-blue-500 to-cyan-500" },
            { number: "3+", label: "Years Experience", color: "from-green-500 to-emerald-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <Card className="p-8 hover:glow-effect transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
