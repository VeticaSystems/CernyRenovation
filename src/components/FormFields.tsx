import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  zipCode: string;
  projectType: string;
  timeline: string;
  message: string;
  budget: string;
  hearAboutUs: string;
  preferredContact: string;
  bestTimeToCall: string;
}

interface FormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const FormFields = ({ formData, handleChange, handleSelectChange, handleCheckboxChange }: FormFieldsProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState("");

  // Memory cleanup for preview URLs
  useEffect(() => {
    return () => previews.forEach(url => URL.revokeObjectURL(url));
  }, [previews]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 3);
    let compressedFiles: File[] = [];
    let previewURLs: string[] = [];

    for (let file of files) {
      // Only allow jpg, jpeg, png, pdf
      if (!/(\.jpg|\.jpeg|\.png|\.pdf)$/i.test(file.name)) {
        setUploadError("Only JPG, PNG, and PDF files are allowed.");
        return;
      }
      if (file.size > 10 * 1024 * 1024 && !/\.pdf$/i.test(file.name)) {
        // Compress images over 10MB (not PDFs)
        try {
          file = await imageCompression(file, { maxSizeMB: 2, useWebWorker: true });
        } catch {
          setUploadError("Image compression failed. Try a smaller photo.");
          return;
        }
      }
      compressedFiles.push(file);
      if (!/\.pdf$/i.test(file.name)) {
        previewURLs.push(URL.createObjectURL(file));
      }
    }
    setSelectedFiles(compressedFiles);
    setPreviews(previewURLs);
    setUploadError("");
  };

  return (
    <div className="space-y-4">
      {/* Personal Information */}
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
            autoComplete="name"
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
            placeholder="(651) 278-4835"
            autoComplete="tel"
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
          autoComplete="email"
        />
      </div>

      {/* Property Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="propertyType">Property Type</Label>
          <Select value={formData.propertyType} onValueChange={(value) => handleSelectChange('propertyType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-family">Single Family Home</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="condo">Condo/Apartment</SelectItem>
              <SelectItem value="duplex">Duplex</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="zipCode">Property Zip Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="20101"
            maxLength={5}
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="projectType">Project Type *</Label>
          <Select value={formData.projectType} onValueChange={(value) => handleSelectChange('projectType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
              <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
              <SelectItem value="addition">Home Addition</SelectItem>
              <SelectItem value="outdoor">Outdoor Living</SelectItem>
              <SelectItem value="whole-home">Whole Home Renovation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="timeline">Project Timeline</Label>
          <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
            <SelectTrigger>
              <SelectValue placeholder="When do you want to start?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP</SelectItem>
              <SelectItem value="1-3-months">1-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="6-plus-months">6+ months</SelectItem>
              <SelectItem value="planning">Just planning/exploring</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Budget Range</Label>
          <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-10k">Under $10k</SelectItem>
              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
              <SelectItem value="25k-50k">$25k - $50k</SelectItem>
              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
              <SelectItem value="100k-200k">$100k - $200k</SelectItem>
              <SelectItem value="200k-plus">$200k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
          <Select value={formData.hearAboutUs} onValueChange={(value) => handleSelectChange('hearAboutUs', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google Search</SelectItem>
              <SelectItem value="referral">Friend/Family Referral</SelectItem>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="advertisement">Advertisement</SelectItem>
              <SelectItem value="previous-client">Previous Client</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Contact Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="preferredContact">Preferred Contact Method</Label>
          <Select value={formData.preferredContact} onValueChange={(value) => handleSelectChange('preferredContact', value)}>
            <SelectTrigger>
              <SelectValue placeholder="How should we contact you?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Phone Call</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="text">Text Message</SelectItem>
              <SelectItem value="either">Either Phone or Email</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="bestTimeToCall">Best Time to Call</Label>
          <Select value={formData.bestTimeToCall} onValueChange={(value) => handleSelectChange('bestTimeToCall', value)}>
            <SelectTrigger>
              <SelectValue placeholder="When can we reach you?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
              <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
              <SelectItem value="weekend">Weekends</SelectItem>
              <SelectItem value="anytime">Anytime</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <Label htmlFor="message">Project Details & Vision</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project vision, specific requirements, challenges, or inspiration..."
          rows={4}
        />
      </div>

      {/* Photo Upload */}
      <div>
        <Label htmlFor="photos">Upload Project Photos (Optional)</Label>
        <p className="text-sm text-slate-500 mb-2">
          Upload up to 3 photos (JPG, PNG, or PDF, max 10MB each)
        </p>
        <Input
          id="photos"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          multiple
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        {/* Image previews */}
        {previews.length > 0 && (
          <div className="flex gap-2 mt-3">
            {previews.map((url, idx) => (
              <img 
                key={idx} 
                src={url} 
                alt={`Preview ${idx + 1}`} 
                className="h-16 w-16 object-cover rounded border" 
              />
            ))}
          </div>
        )}
        {/* PDF file names */}
        {selectedFiles.length > 0 && selectedFiles.filter(f => f.name.endsWith('.pdf')).map((file, i) => (
          <div key={i} className="mt-2 text-sm text-slate-600">
            📄 {file.name}
          </div>
        ))}
        {uploadError && (
          <div className="text-red-600 text-sm mt-2 font-medium" aria-live="polite">
            {uploadError}
          </div>
        )}
      </div>

    </div>
  );
};

export default FormFields;
