export interface Company {
    id: string;
    name: string;
    category: string;
    description: string;
    products: string[];
    website?: string;
    logo?: string;
}

export const companies: Company[] = [
    {
        id: 'sador-tech',
        name: 'Sador Technologies',
        category: 'Enterprise Software & AI',
        description: 'Specializing in next-generation artificial intelligence frameworks, cloud infrastructure, and enterprise automation utilities.',
        products: ['Sador AI Engine', 'CloudCore OS', 'Enterprise Security Suite'],
        website: 'https://tech.sadorgroup.com',
    },
    {
        id: 'sador-energy',
        name: 'Sador Energy & Utilities',
        category: 'Sustainable Infrastructure',
        description: 'Pioneering smart grid solutions, renewable energy monitoring, and sustainable industrial power grids.',
        products: ['GridFlow Smart Monitor', 'EcoPower Grid', 'Industrial Energy Analytics'],
        website: 'https://energy.sadorgroup.com',
    },
    {
        id: 'sador-finance',
        name: 'Sador Capital & Fintech',
        category: 'Financial Technologies',
        description: 'Delivering secure decentralized financial ledgers, automated cross-border settlement rails, and high-frequency risk modeling.',
        products: ['Apex Ledger', 'SecurePay Gateway', 'RiskQuant AI'],
        website: 'https://capital.sadorgroup.com',
    },
];

export default companies;
