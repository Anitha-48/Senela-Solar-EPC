import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceMain = () => {
  return (
    <div className="service-main-page">
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '100px 6%' }}>
        <h1>Our Services</h1>
        <p>Service details will be included here shortly.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceMain;