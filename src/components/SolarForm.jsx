import React, { useState } from 'react';

export default function SolarForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    electricityBill: 'Less than ₹1500',
    pinCode: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New solar consultation enquiry from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `WhatsApp Number: ${formData.whatsappNumber}\n` +
      `Monthly Electricity Bill: ${formData.electricityBill}\n` +
      `PIN Code: ${formData.pinCode}\n\n` +
      `Please contact me regarding my solar consultation.`
    );

    const mailtoUrl = `mailto:info@senelainternational.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setFormData({
      fullName: '',
      whatsappNumber: '',
      electricityBill: 'Less than ₹1500',
      pinCode: ''
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="solar-form-card">
        <div className="solar-form-header">
          <h3>Thank you for your enquiry</h3>
          <p>Your mail application should open with a pre-filled message for info@senelainternational.com.</p>
        </div>
        <button type="button" className="submit-btn" onClick={() => setIsSubmitted(false)}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="solar-form-card">
      <div className="solar-form-header">
        <h3>Book Your FREE Solar Consultation</h3>
        <p>Start saving on your electricity bills with solar.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="solar-form-body">
        <input 
          type="text" name="fullName" placeholder="Full Name" 
          value={formData.fullName} onChange={handleChange} required 
        />
        
        <input 
          type="tel" name="whatsappNumber" placeholder="WhatsApp Number" 
          value={formData.whatsappNumber} onChange={handleChange} required 
        />

        <div className="form-group">
          <label>Monthly Electricity Bill</label>
          <div className="bill-options">
            {['Less than ₹1500', '₹1500 - ₹2500', '₹2500 - ₹4000', '₹4000 - ₹8000', 'More than ₹8000'].map(option => (
              <button 
                key={option} 
                type="button" 
                className={formData.electricityBill === option ? 'active' : ''}
                onClick={() => setFormData(prev => ({ ...prev, electricityBill: option }))}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <input 
          type="text" name="pinCode" placeholder="PIN Code" 
          value={formData.pinCode} onChange={handleChange} required 
        />

        <div className="checkbox-group">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the Terms & Conditions and Privacy Policy.</label>
        </div>

        <button type="submit" className="submit-btn">
          BOOK YOUR FREE SOLAR CONSULTATION
        </button>
      </form>
    </div>
  );
}