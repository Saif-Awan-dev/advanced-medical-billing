"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    zipCode: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // Form validation
  //     if (!formData.firstName || !formData.lastName || !formData.email || 
  //         !formData.company || !formData.zipCode) {
  //       alert('Please fill in all required fields');
  //       return;
  //     }

  //     // Email validation
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailPattern.test(formData.email)) {
  //       alert('Please enter a valid email address');
  //       return;
  //     }

  //     // In a real application, you would submit the form data to your backend here
  //     console.log('Form submitted:', formData);

  //     // Show success message
  //     setIsSubmitted(true);

  //     // Reset form after 3 seconds
  //     setTimeout(() => {
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //         company: '',
  //         phone: '',
  //         zipCode: '',
  //         message: ''
  //       });
  //       setIsSubmitted(false);
  //     }, 3000);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const res = await fetch("https://procuresolutions.org/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          zipCode: '',
          message: ''
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-background rounded-xl shadow-md overflow-hidden border my-10">
      <div className="bg-[#731644] text-primary-foreground p-6 text-center">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-2">We'd love to hear from you. Please fill out the form below.</p>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <div className="relative">
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <div className="absolute right-3 top-3 text-muted-foreground">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <div className="relative">
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <div className="absolute right-3 top-3 text-muted-foreground">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <div className="relative">
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="absolute right-3 top-3 text-muted-foreground">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <div className="relative">
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <div className="absolute right-3 top-3 text-muted-foreground">
                <i className="fas fa-building"></i>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="absolute right-3 top-3 text-muted-foreground">
                  <i className="fas fa-phone"></i>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code *</Label>
              <div className="relative">
                <Input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
                <div className="absolute right-3 top-3 text-muted-foreground">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us how we can help you..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#731644] cursor-pointer"
          >
            <i className="fas fa-paper-plane mr-2"></i>
            Send Message
          </Button>

          {isSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              <i className="fas fa-check-circle mr-2"></i>
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;