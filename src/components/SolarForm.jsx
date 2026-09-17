import React, { useState } from 'react';

export default function SolarForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    electricityBill: 'Less than ₹1500',
    pinCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Integration with your backend endpoint
      const response = await fetch('http://localhost:5000/api/solar-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
           if (response.ok) {
        alert('Consultation booked successfully!');
      } else {
        alert('Server error: ' + response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

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