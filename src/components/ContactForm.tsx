
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours to schedule your consultation.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
      budget: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-cerny-light-gray py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-cerny-navy font-montserrat">
              Get Your Free Quote
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to transform your home? Contact us today for a personalized consultation and detailed project estimate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-cerny-orange text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-cerny-navy">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-cerny-orange text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-cerny-navy">Email</h3>
                  <p className="text-gray-600">info@cernyremodeling.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-cerny-orange text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-cerny-navy">Service Area</h3>
                  <p className="text-gray-600">Northern Virginia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-cerny-navy">Request Your Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Remodel</option>
                      <option value="addition">Home Addition</option>
                      <option value="outdoor">Outdoor Living</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select budget</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-cerny-orange hover:bg-cerny-orange-dark text-white py-3 text-lg font-semibold"
                >
                  Get My Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
