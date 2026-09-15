import React from 'react';
import { ContactHero } from '../features/contact/components/ContactHero';
import { ContactMethods } from '../features/contact/components/ContactMethods';
import { ContactForm } from '../features/contact/components/ContactForm';
import { ContactInfo } from '../features/contact/components/ContactInfo';
import { ContactCTA } from '../features/contact/components/ContactCTA';

export function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-white selection:text-slate-950">
            <ContactHero />
            <ContactMethods />
            <ContactForm />
            <ContactInfo />
            <ContactCTA />
        </div>
    );
}

export default ContactPage;