
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import FormFields from './FormFields';

const QuoteForm = () => {
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
    <Card className="shadow-xl">
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
  );
};

export default QuoteForm;

