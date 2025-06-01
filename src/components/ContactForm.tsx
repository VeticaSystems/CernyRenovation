
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import FormFields from './FormFields';
import TrustIndicators from './TrustIndicators';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    zipCode: '',
    projectType: '',
    timeline: '',
    message: '',
    budget: '',
    hearAboutUs: '',
    preferredContact: '',
    bestTimeToCall: '',
    newsletter: false
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Sent Successfully! 🎉",
      description: "We'll contact you within 2 hours during business hours to schedule your FREE consultation.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      zipCode: '',
      projectType: '',
      timeline: '',
      message: '',
      budget: '',
      hearAboutUs: '',
      preferredContact: '',
      bestTimeToCall: '',
      newsletter: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  return (
    <section id="contact" className="bg-cerny-light-gray py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-cerny-navy font-montserrat">
            Get Your FREE Consultation & Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your vision into reality. Our experts will provide a detailed project assessment and personalized quote at no cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Contact info & Trust indicators */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-cerny-navy">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-cerny-navy">Call Now</p>
                      <a href="tel:5551234567" className="text-cerny-orange hover:underline">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-cerny-navy">Email Us</p>
                      <a href="mailto:info@cernyremodeling.com" className="text-cerny-orange hover:underline">
                        info@cernyremodeling.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-cerny-navy">Service Area</p>
                      <p className="text-gray-600">Northern Virginia</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-cerny-orange text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-cerny-navy">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
                      <p className="text-gray-600">Sat: 9AM-4PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <TrustIndicators />
            </div>
          </div>

          {/* Right side - Enhanced Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-cerny-navy to-cerny-orange text-white">
                <CardTitle className="text-2xl">Request Your FREE Quote</CardTitle>
                <CardDescription className="text-gray-100">
                  Fill out our detailed form below and receive a comprehensive quote within 24 hours. All consultations are completely free with no obligation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <FormFields
                    formData={formData}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                    handleCheckboxChange={handleCheckboxChange}
                  />

                  <div className="mt-6 pt-4 border-t">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-cerny-orange to-cerny-orange-dark hover:from-cerny-orange-dark hover:to-cerny-orange text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Get My FREE Quote & Consultation 🎯
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      💯 No spam, no obligation. We respect your privacy.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2 text-cerny-navy">
              Need to speak with someone right away?
            </h3>
            <p className="text-gray-600 mb-4">
              Call us now for immediate assistance and to schedule your free consultation
            </p>
            <a 
              href="tel:5551234567"
              className="inline-flex items-center bg-cerny-orange hover:bg-cerny-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
