import React from 'react'

const Security = () => {
  return (
  <section className="trust-section section" id="trust" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="trust-title">Your Trust, Our Priority</h2>
          <p className="section-desc">We're committed to protecting your money and personal information with industry-leading security measures.</p>
        </div>
        
        <div className="trust-grid">
          <div className="trust-card animate-on-scroll">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h3>FDIC Insured</h3>
            <p>Your deposits are insured up to $250,000 by the Federal Deposit Insurance Corporation.</p>
          </div>
          
          <div className="trust-card animate-on-scroll">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>
            </div>
            <h3>256-bit Encryption</h3>
            <p>Bank-grade encryption protects all your transactions and personal data at all times.</p>
          </div>
          
          <div className="trust-card animate-on-scroll">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>24/7 Monitoring</h3>
            <p>Our security team monitors your accounts round-the-clock for suspicious activity.</p>
          </div>
          
          <div className="trust-card animate-on-scroll">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3>70,000+ Customers</h3>
            <p>Join thousands of satisfied customers who trust us with their financial future.</p>
          </div>
        </div>
        
        <div className="trust-badges animate-on-scroll">
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>SSL Secured</span>
          </div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <span>Verified Partner</span>
          </div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            <span>PCI Compliant</span>
          </div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><ellipse cx="12" cy="12" rx="4" ry="10"/></svg>
            <span>Global Coverage</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security