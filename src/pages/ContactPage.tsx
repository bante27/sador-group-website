import React from 'react';
import { ContactHero } from '../features/contact/components/ContactHero';
import { ContactMethods } from '../features/contact/components/ContactMethods';
import { ContactForm } from '../features/contact/components/ContactForm';
import { ContactInfo } from '../features/contact/components/ContactInfo';
import { ContactCTA } from '../features/contact/components/ContactCTA';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function ContactPage() {
    const schemas = [
        generateWebPageSchema(
            'Contact Sador Group | Official Communication Channels',
            'Get in touch with Sador Group for corporate inquiries, partnerships, and technology solutions.',
            '/contact'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
        ]),
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-white selection:text-slate-950">
            <SEO
                title="Contact Sador Group | Official Communication Channels"
                description="Get in touch with Sador Group for corporate inquiries, partnerships, and technology solutions."
                path="/contact"
                schema={schemas}
            />
            <ContactHero />
            <ContactMethods />
            <ContactForm />
            <ContactInfo />
            <ContactCTA />
        </div>
    );
}

export default ContactPage;
