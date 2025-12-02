import { useState } from "react";
import { Send } from "lucide-react";
import SectionWrapper from "./layout/SectionWrapper";
import { CONTACT_INFO, SOCIAL_ICONS } from "../constants/data";
import { FORM_SUBMIT_DELAY, SUCCESS_RESET_DELAY } from "../constants/config";
import type { FormData, FormStatus } from "../constants/types";

// Simple validation utility
const validateForm = (data: FormData): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email format";
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) errors.message = "Message is required";
  
  return { valid: Object.keys(errors).length === 0, errors };
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const { valid, errors } = validateForm(formData);
    if (!valid) {
      setValidationErrors(errors);
      return;
    }
    
    setStatus("sending");
    setValidationErrors({});
    
    // Simulate form submission
    setTimeout(() => {
      // In production, send to backend/email service here
      console.warn("Form submission mock - in production, integrate with email service");
      setStatus("success");
      setFormData({ 
        name: "", 
        email: "", 
        subject: "", 
        message: ""
      });
      
      setTimeout(() => setStatus("idle"), SUCCESS_RESET_DELAY);
    }, FORM_SUBMIT_DELAY);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out! I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border border-border hover:border-primary transition-all hover:text-primary`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="p-8 rounded-lg border bg-card shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    validationErrors.name ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Your name"
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    validationErrors.email ? "border-red-500" : "border-border"
                  }`}
                  placeholder="your.email@example.com"
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    validationErrors.subject ? "border-red-500" : "border-border"
                  }`}
                  placeholder="What's this about?"
                />
                {validationErrors.subject && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.subject}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                    validationErrors.message ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Your message..."
                />
                {validationErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <span className="text-lg">✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center">
                  Thank you! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;