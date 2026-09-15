export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  actionText: string;
  link: string;
  iconName: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'general',
    title: 'General Inquiries',
    description: 'Have questions about Sador Group or our corporate structure? Reach out to our central team.',
    actionText: 'Inquire Now',
    link: '#contact-form',
    iconName: 'HelpCircle',
  },
  {
    id: 'partnerships',
    title: 'Business & Partnerships',
    description: 'Explore strategic alliances, joint ventures, and ecosystem collaborations with our leadership.',
    actionText: 'Explore Partnerships',
    link: '#contact-form',
    iconName: 'Briefcase',
  },
  {
    id: 'sales',
    title: 'Sales & Solutions',
    description: 'Connect with our enterprise solutions team to evaluate our portfolio of 23+ products.',
    actionText: 'Contact Sales',
    link: '#contact-form',
    iconName: 'TrendingUp',
  },
  {
    id: 'careers',
    title: 'Careers & Talent',
    description: 'Join our growing team of engineers, innovators, and strategists building what comes next.',
    actionText: 'View Openings',
    link: '#contact-form',
    iconName: 'Users',
  },
];

export const INQUIRY_TYPES = [
  'General Inquiry',
  'Business Partnership',
  'Product / Solution',
  'Sales',
  'Technical Support',
  'Careers',
  'Media / Press',
  'Other',
] as const;

export const CORPORATE_INFO = {
  officeLocation: {
    name: 'Sador Group Global Headquarters',
    addressLine1: '[Official Corporate Address Placeholder]',
    addressLine2: '[City, Country Code]',
    note: 'Physical visits by appointment only.',
  },
  email: 'corporate@sador.group',
  phone: '+1 (000) 000-0000',
  workingHours: 'Monday – Friday, 9:00 AM – 6:00 PM (GMT)',
};