
import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormFields
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleCheckboxChange={handleCheckboxChange}
        />

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            Get My FREE Quote & Consultation 🎯
          </Button>
          <p className="text-center text-sm text-slate-500 mt-3">
            💯 No spam, no obligation. We respect your privacy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
