
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Server error. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to get in touch with me for collaboration, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-tech-dark text-tech-neon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:bhar22005.cd@rmkec.ac.in" 
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    bharathserman@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-tech-dark text-tech-neon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+917200030913" 
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    +91 7200030913
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-tech-dark text-tech-neon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
              <a 
                href="https://github.com/Bharath-serman"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-tech-dark text-white 
                          hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(255,102,0,0.9)]
                          transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bharath-serman-r-7999b8262/"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-tech-dark text-white 
                          hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(255,102,0,0.9)]
                          transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.duolingo.com/profile/TA_SPIDEY"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-tech-dark text-white 
                          hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(255,102,0,0.9)]
                          transition-all duration-300"
                aria-label="Duolingo"
              >
                <img
                  src="/icons/Duolingoicon.png"
                  alt="Duolingo"
                  className="w-5 h-5"
                /> 
              </a>
            </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-xl overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-tech-blue-dark/50 border border-tech-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-neon text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-tech-blue-dark/50 border border-tech-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-neon text-white"
                      placeholder="Your Email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-tech-blue-dark/50 border border-tech-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-neon text-white"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-tech-blue-dark/50 border border-tech-purple/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-neon text-white resize-none"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-orange-400 hover:bg-orange-500 rounded-lg text-white font-medium inline-flex items-center justify-center transition-all duration-300 disabled:opacity-70"

                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          Send Message
                          <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
