import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INQUIRY_TYPES } from './contact.data.ts';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  businessEmail: string;
  phone: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
  privacyConsent: boolean;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<boolean>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phone: '',
    organization: '',
    inquiryType: INQUIRY_TYPES[0],
    subject: '',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.form-element',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, formSectionRef);

    return () => ctx.revert();
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.businessEmail.trim() || !/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Valid business email is required.';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization name is required.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy terms.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        const success = await onSubmit(formData);
        setSubmitStatus(success ? 'success' : 'error');
      } else {
        // Simulated API separation boundary
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus('success');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" ref={formSectionRef} className="py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="form-element text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2 block">
            // SECURE TRANSMISSION
          </span>
          <h2 className="form-element text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            Send an Inquiry
          </h2>
          <p className="form-element text-zinc-400 font-light max-w-xl mx-auto">
            Fill out the form below and our team will route your request to the appropriate department within Sador Group.
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="p-10 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">Transmission Successful</h3>
            <p className="text-zinc-400 font-light max-w-md mx-auto mb-8">
              Thank you for contacting Sador Group. Your inquiry has been logged securely and an assigned representative will respond shortly.
            </p>
            <button
              onClick={() => {
                setSubmitStatus('idle');
                setFormData({
                  firstName: '',
                  lastName: '',
                  businessEmail: '',
                  phone: '',
                  organization: '',
                  inquiryType: INQUIRY_TYPES[0],
                  subject: '',
                  message: '',
                  privacyConsent: false,
                });
              }}
              className="px-6 py-3 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="form-element">
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className={`w-full bg-zinc-900/50 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors`}
                />
                {errors.firstName && <span className="text-xs text-red-400 mt-1 block">{errors.firstName}</span>}
              </div>

              {/* Last Name */}
              <div className="form-element">
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`w-full bg-zinc-900/50 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors`}
                />
                {errors.lastName && <span className="text-xs text-red-400 mt-1 block">{errors.lastName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Business Email */}
              <div className="form-element">
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Business Email *</label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="jane.doe@organization.com"
                  className={`w-full bg-zinc-900/50 border ${errors.businessEmail ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors`}
                />
                {errors.businessEmail && <span className="text-xs text-red-400 mt-1 block">{errors.businessEmail}</span>}
              </div>

              {/* Phone Number */}
              <div className="form-element">
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Organization */}
              <div className="form-element">
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Organization / Company *</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Acme Corporation"
                  className={`w-full bg-zinc-900/50 border ${errors.organization ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors`}
                />
                {errors.organization && <span className="text-xs text-red-400 mt-1 block">{errors.organization}</span>}
              </div>

              {/* Inquiry Type */}
              <div className="form-element">
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Inquiry Type *</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
                >
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-zinc-900 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="form-element">
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief summary of your request"
                className={`w-full bg-zinc-900/50 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors`}
              />
              {errors.subject && <span className="text-xs text-red-400 mt-1 block">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="form-element">
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Message *</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Provide detailed information regarding your inquiry..."
                className={`w-full bg-zinc-900/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none`}
              />
              {errors.message && <span className="text-xs text-red-400 mt-1 block">{errors.message}</span>}
            </div>

            {/* Privacy Checkbox */}
            <div className="form-element flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                name="privacyConsent"
                id="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-zinc-900 text-white focus:ring-0 cursor-pointer"
              />
              <label htmlFor="privacyConsent" className="text-xs text-zinc-400 font-light leading-relaxed cursor-pointer">
                I consent to Sador Group processing my data in accordance with the corporate privacy policy for the purpose of handling this request. *
              </label>
            </div>
            {errors.privacyConsent && <span className="text-xs text-red-400 block">{errors.privacyConsent}</span>}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>An error occurred while submitting. Please verify your connection and try again.</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="form-element pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-3 disabled:opacity-50 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Data...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};