import React from 'react';
import ContactForm from '../features/contact/components/ContactForm';

export function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-black mb-4 text-white text-center">Get in Touch</h1>
            <p className="text-slate-300 text-center mb-12">Connect with Sador Group for enterprise solutions, partnerships, and internship inquiries.</p>
            <ContactForm />
        </div>
    );
}

export default ContactPage;