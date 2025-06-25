import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Linkedin, Github, Instagram, MapPin, Send, MessageCircle, Calendar, Clock } from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Click To Mail Me",
    href: "mailto:naveenrajpoot157@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/naveen-singh-rajpoot/",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View My Code",
    href: "https://github.com/naveenhacks",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "Follow Me",
    href: "https://www.instagram.com/naveen_singh.rajpoot/",
    color: "from-pink-500 to-purple-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttar Pradesh, India",
    href: null,
    color: "from-green-500 to-emerald-600"
  }
]

const quickActions = [
  { icon: MessageCircle, label: "Quick Chat", description: "15-min consultation" },
  { icon: Calendar, label: "Schedule Meeting", description: "Book a detailed discussion" },
  { icon: Send, label: "Send Message", description: "Get in touch instantly" }
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for your message. I'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to collaborate or have a project in mind? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <Card className="p-6 hover:glow-effect transition-all duration-300 cursor-pointer group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  <action.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{action.label}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-4 flex items-center">
                  <Send className="h-6 w-6 mr-2 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="focus:ring-primary focus:border-primary transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="focus:ring-primary focus:border-primary transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                      className="focus:ring-primary focus:border-primary resize-none transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full glow-effect hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send className="h-5 w-5" />
                          </motion.div>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 glow-effect">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Contact Information
              </h3>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.label} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div 
                      className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Card>

            <Card className="p-6 glow-effect">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium text-green-500">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Timezone</span>
                  <span className="font-medium">IST (UTC+5:30)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Preferred Contact</span>
                  <span className="font-medium">Email / LinkedIn</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-primary/20">
              <motion.h3 
                className="text-xl font-semibold mb-2 gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                Ready to Start a Project?
              </motion.h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss your ideas and turn them into reality with cutting-edge AI and development solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="glow-effect group">
                  Schedule a Call
                  <Calendar className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}