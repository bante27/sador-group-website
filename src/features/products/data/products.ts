import { Product } from '../types/product.types';

export const products: Product[] = [
  {
    id: 'product-01',
    slug: 'sador-ai-engine',
    name: 'Sador AI Engine',
    logo: '⚡',
    description: 'Enterprise-grade artificial intelligence platform for automated decision-making and cognitive workloads.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Real-time cognitive processing',
      'Custom neural network deployment',
      'Automated workflow integration',
      'Enterprise security governance'
    ],
    status: 'Active',
    overview: 'Sador AI Engine powers next-generation intelligent operations by embedding deep machine learning algorithms directly into critical enterprise pipelines.',
    problem: 'Modern organizations struggle to unify disparate operational datasets and build secure, scalable AI models without massive custom engineering overhead.',
    benefits: [
      'Reduces manual data processing overhead by up to 85%',
      'Accelerates decision velocity across complex business workflows',
      'Ensures absolute compliance and auditability in AI decisions'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop'
    ],
    technologies: ['Python', 'PyTorch', 'Kubernetes', 'REST API', 'GraphQL'],
    targetUsers: ['Enterprises', 'Developers', 'AI Engineers'],
    website: 'https://ai.sadorgroup.com',
    relatedProducts: ['product-02', 'product-03']
  },
  {
    id: 'product-02',
    slug: 'cloudcore',
    name: 'CloudCore Infrastructure',
    logo: '☁️',
    description: 'Scalable multi-cloud orchestration and hyper-optimized serverless computing cluster management.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Zero-latency failover routing',
      'Automated resource scaling',
      'Multi-cloud federated control',
      'Advanced telemetry & auditing'
    ],
    status: 'Active',
    overview: 'CloudCore provides an uncompromising foundation for modern web scale applications, unifying AWS, Azure, and GCP into a single cohesive control pane.',
    problem: 'Managing multi-cloud deployments creates infrastructure complexity, security blind spots, and exorbitant resource wastage.',
    benefits: [
      'Optimizes cloud spend by automatically rightsizing instances',
      'Eliminates vendor lock-in with unified abstraction layers',
      'Guarantees 99.999% uptime for mission-critical services'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
    ],
    technologies: ['Go', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    targetUsers: ['Enterprises', 'DevOps Engineers', 'CTOs'],
    website: 'https://cloudcore.sadorgroup.com',
    relatedProducts: ['product-01', 'product-07']
  },
  {
    id: 'product-03',
    slug: 'ekub',
    name: 'Ekub Financial',
    logo: '🪙',
    description: 'Decentralized peer-to-peer micro-financing and communal credit association protocol.',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Smart contract escrow protection',
      'Automated rotational savings',
      'Instant cross-border settlement',
      'Decentralized credit scoring'
    ],
    status: 'Active',
    overview: 'Ekub modernizes traditional community savings groups with bulletproof cryptographic ledgers and seamless liquidity access.',
    problem: 'Underbanked communities and cooperative groups lack secure, transparent digital instruments for communal capital pooling and credit building.',
    benefits: [
      'Provides transparent, trustless capital allocation',
      'Reduces transaction friction and exorbitant intermediary fees',
      'Builds verifiable credit history for unbanked populations'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop'
    ],
    technologies: ['Solidity', 'TypeScript', 'Node.js', 'PostgreSQL', 'Web3.js'],
    targetUsers: ['Financial institutions', 'Consumers', 'Credit Unions'],
    website: 'https://ekub.sadorgroup.com',
    relatedProducts: ['product-04', 'product-11']
  },
  {
    id: 'product-04',
    slug: 'sador-pay',
    name: 'SadorPay Gateway',
    logo: '💳',
    description: 'Unified multi-currency checkout and automated treasury management system for global commerce.',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1556742049-0a67d553c2a5?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Instant fiat and crypto settlement',
      'Advanced fraud prevention engine',
      'Dynamic currency conversion',
      'Automated tax compliance'
    ],
    status: 'Active',
    overview: 'SadorPay bridges traditional banking rails with modern digital currencies, providing frictionless checkout experiences worldwide.',
    problem: 'Global merchants struggle with high payment failure rates, fragmented regional gateways, and costly cross-border fees.',
    benefits: [
      'Increases checkout authorization rates by up to 12%',
      'Slashes cross-border conversion overhead',
      'Protects revenue streams with AI-driven fraud mitigation'
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Stripe API'],
    targetUsers: ['SMEs', 'Enterprises', 'E-commerce Merchants'],
    website: 'https://pay.sadorgroup.com',
    relatedProducts: ['product-03', 'product-10']
  },
  {
    id: 'product-05',
    slug: 'omnishield',
    name: 'OmniShield Security',
    logo: '🛡️',
    description: 'Autonomous threat detection, zero-trust perimeter defense, and vulnerability auditing suite.',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Continuous vulnerability scanning',
      'Behavioral anomaly detection',
      'Automated incident containment',
      'Zero-trust identity verification'
    ],
    status: 'Active',
    overview: 'OmniShield provides impenetrable perimeter defense and proactive telemetry analysis to neutralize cyber threats before breach.',
    problem: 'Sophisticated cyber attacks bypass static firewalls, leaving corporate assets vulnerable to silent infiltration and ransomware.',
    benefits: [
      'Reduces mean time to detect (MTTD) threats to under 60 seconds',
      'Enforces strict zero-trust access across hybrid workforces',
      'Provides complete regulatory compliance reporting'
    ],
    technologies: ['Rust', 'Elasticsearch', 'Docker', 'Linux Kernel', 'AI'],
    targetUsers: ['Enterprises', 'Security Officers', 'CTOs'],
    website: 'https://shield.sadorgroup.com',
    relatedProducts: ['product-02', 'product-09']
  },
  {
    id: 'product-06',
    slug: 'mobinext',
    name: 'MobiNext Framework',
    logo: '📱',
    description: 'Cross-platform mobile application development framework with native hardware acceleration.',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Single codebase compilation to iOS & Android',
      'Hardware-accelerated graphics rendering',
      'Offline-first data synchronization',
      'Modular plugin ecosystem'
    ],
    status: 'Active',
    overview: 'MobiNext empowers engineering teams to ship buttery-smooth native mobile applications in half the traditional development cycle.',
    problem: 'Building separate native codebases for iOS and Android doubles development costs and creates feature parity lag.',
    benefits: [
      'Cuts mobile app time-to-market by 50%',
      'Delivers 60 FPS buttery-smooth animations and transitions',
      'Simplifies state management and offline data caching'
    ],
    technologies: ['React Native', 'TypeScript', 'Swift', 'Kotlin', 'GraphQL'],
    targetUsers: ['Developers', 'SMEs', 'Product Managers'],
    website: 'https://mobinext.sadorgroup.com',
    relatedProducts: ['product-08', 'product-14']
  },
  {
    id: 'product-07',
    slug: 'datavault',
    name: 'DataVault Analytics',
    logo: '📊',
    description: 'Real-time enterprise data warehousing, business intelligence, and predictive modeling suite.',
    category: 'Business Solutions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Petabyte-scale columnar storage',
      'Sub-second query aggregation',
      'Interactive executive dashboards',
      'Automated data cleansing pipelines'
    ],
    status: 'Active',
    overview: 'DataVault consolidates siloed organizational metrics into interactive, real-time visual intelligence dashboards.',
    problem: 'Business leaders make critical decisions based on stale spreadsheet reports due to fragmented data pipelines.',
    benefits: [
      'Accelerates query speeds by 100x compared to legacy databases',
      'Democratizes data access for non-technical stakeholders',
      'Uncovers hidden operational trends with predictive models'
    ],
    technologies: ['ClickHouse', 'Python', 'React', 'Apache Kafka', 'SQL'],
    targetUsers: ['Enterprises', 'Data Analysts', 'Executives'],
    website: 'https://datavault.sadorgroup.com',
    relatedProducts: ['product-01', 'product-02']
  },
  {
    id: 'product-08',
    slug: 'nexus-flow',
    name: 'NexusFlow Automation',
    logo: '⚙️',
    description: 'Visual workflow builder and robotic process automation (RPA) for enterprise operations.',
    category: 'Business Solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Drag-and-drop process designer',
      'Pre-built connectors for 300+ SaaS apps',
      'AI-assisted exception handling',
      'Enterprise audit logging'
    ],
    status: 'Active',
    overview: 'NexusFlow connects disparate enterprise software tools into automated, self-healing operational pipelines.',
    problem: 'Employees waste countless hours performing repetitive manual data entry and cross-system synchronization.',
    benefits: [
      'Automates 90% of routine administrative tasks',
      'Eliminates human data transcription errors',
      'Scales operational capacity without headcount inflation'
    ],
    technologies: ['TypeScript', 'Node.js', 'Docker', 'REST API', 'AI'],
    targetUsers: ['Enterprises', 'Operations Managers', 'SMEs'],
    website: 'https://nexusflow.sadorgroup.com',
    relatedProducts: ['product-01', 'product-06']
  },
  {
    id: 'product-09',
    slug: 'neural-mesh',
    name: 'NeuralMesh Edge AI',
    logo: '🧠',
    description: 'Ultra-lightweight machine learning inference engine designed for IoT devices and edge nodes.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Sub-10MB model footprint',
      'Offline local inference capabilities',
      'Low-power silicon optimization',
      'Secure over-the-air (OTA) updates'
    ],
    status: 'Beta',
    overview: 'NeuralMesh brings high-accuracy computer vision and NLP capabilities directly to resource-constrained IoT hardware.',
    problem: 'Cloud-dependent AI creates unacceptable latency and privacy vulnerabilities for edge and IoT sensor deployments.',
    benefits: [
      'Enables instant real-time inference without internet connectivity',
      'Protects user privacy by processing data locally on device',
      'Minimizes bandwidth consumption and cloud infrastructure cost'
    ],
    technologies: ['C++', 'TensorFlow Lite', 'Python', 'ARM Cortex', 'IoT'],
    targetUsers: ['Developers', 'Hardware Manufacturers', 'Enterprises'],
    website: 'https://neuralmesh.sadorgroup.com',
    relatedProducts: ['product-01', 'product-05']
  },
  {
    id: 'product-10',
    slug: 'pulse-crm',
    name: 'Pulse Customer CRM',
    logo: '👥',
    description: 'Relationship intelligence and pipeline management platform powered by predictive analytics.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Predictive deal closure scoring',
      'Automated email and call logging',
      '360-degree customer timeline view',
      'Customizable sales pipeline stages'
    ],
    status: 'Active',
    overview: 'Pulse CRM helps sales teams focus on high-probability deals by automatically capturing customer interactions and forecasting revenue.',
    problem: 'Sales teams rely on outdated CRMs that require manual data entry and lack predictive deal insights.',
    benefits: [
      'Boosts sales rep productivity by 35%',
      'Improves pipeline forecast accuracy to over 90%',
      'Prevents customer churn with automated health monitoring'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AI'],
    targetUsers: ['Sales Teams', 'SMEs', 'Enterprises'],
    website: 'https://pulse.sadorgroup.com',
    relatedProducts: ['product-04', 'product-08']
  },
  {
    id: 'product-11',
    slug: 'wealth-craft',
    name: 'WealthCraft Portfolio',
    logo: '📈',
    description: 'Algorithmic wealth management and automated asset allocation engine for modern investors.',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Dynamic portfolio rebalancing',
      'Tax-loss harvesting algorithms',
      'Multi-asset class diversification',
      'Risk-adjusted return modeling'
    ],
    status: 'Active',
    overview: 'WealthCraft democratizes sophisticated institutional wealth management strategies for retail and private banking clients.',
    problem: 'Individual investors lack access to automated, continuous portfolio optimization and tax-loss harvesting.',
    benefits: [
      'Maximizes after-tax investment returns automatically',
      'Minimizes drawdown risk during volatile market swings',
      'Lowers management fees through algorithmic execution'
    ],
    technologies: ['Python', 'TypeScript', 'PostgreSQL', 'Financial APIs'],
    targetUsers: ['Financial institutions', 'Investors', 'Consumers'],
    website: 'https://wealthcraft.sadorgroup.com',
    relatedProducts: ['product-03', 'product-04']
  },
  {
    id: 'product-12',
    slug: 'zenith-erp',
    name: 'Zenith Enterprise ERP',
    logo: '🏢',
    description: 'Comprehensive enterprise resource planning suite covering supply chain, HR, and finance.',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    features: [
      'End-to-end supply chain tracking',
      'Integrated payroll and HR management',
      'Multi-entity general ledger',
      'Real-time inventory optimization'
    ],
    status: 'Active',
    overview: 'Zenith ERP unifies every operational department into a single cohesive, high-performance digital ecosystem.',
    problem: 'Legacy ERP systems are rigid, expensive to maintain, and difficult for employees to adopt.',
    benefits: [
      'Reduces administrative overhead across departments by 40%',
      'Provides real-time visibility into global inventory and cash flow',
      'Accelerates employee onboarding with intuitive UX'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
    targetUsers: ['Enterprises', 'Operations Managers', 'CFOs'],
    website: 'https://zenith.sadorgroup.com',
    relatedProducts: ['product-02', 'product-07']
  },
  {
    id: 'product-13',
    slug: 'pulse-health',
    name: 'PulseHealth Telemed',
    logo: '🏥',
    description: 'Secure telehealth consultation platform and electronic health record (EHR) synchronization.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    features: [
      'HIPAA-compliant video consultations',
      'Encrypted patient health records',
      'Automated appointment scheduling',
      'Prescription e-routing integration'
    ],
    status: 'Coming Soon',
    overview: 'PulseHealth connects patients with elite medical practitioners through secure, high-definition virtual care channels.',
    problem: 'Healthcare delivery is often fragmented, inconvenient, and hindered by outdated administrative systems.',
    benefits: [
      'Expands patient access to specialized medical care',
      'Ensures strict HIPAA compliance and data encryption',
      'Streamlines clinic scheduling and billing workflows'
    ],
    technologies: ['WebRTC', 'React', 'Node.js', 'MongoDB', 'Encryption'],
    targetUsers: ['Healthcare Providers', 'Patients', 'Clinics'],
    website: 'https://health.sadorgroup.com',
    relatedProducts: ['product-06', 'product-10']
  },
  {
    id: 'product-14',
    slug: 'edu-verse',
    name: 'EduVerse Academy',
    logo: '🎓',
    description: 'Immersive virtual learning environment and interactive curriculum management system.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Interactive virtual classrooms',
      'Automated quiz and assignment grading',
      'Student progress analytics',
      'Gamified learning modules'
    ],
    status: 'Active',
    overview: 'EduVerse transforms online education into an engaging, collaborative community experience for schools and institutions.',
    problem: 'Remote learning platforms often lack student engagement tools and robust analytics for educators.',
    benefits: [
      'Increases student completion rates through gamification',
      'Saves teachers hours on grading and assignment tracking',
      'Provides deep insights into student comprehension gaps'
    ],
    technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'WebSockets'],
    targetUsers: ['Educational Institutions', 'Students', 'Teachers'],
    website: 'https://eduverse.sadorgroup.com',
    relatedProducts: ['product-06', 'product-08']
  },
  {
    id: 'product-15',
    slug: 'quantum-logistics',
    name: 'QuantumRoute Logistics',
    logo: '🚚',
    description: 'AI-powered supply chain route optimization and autonomous fleet management.',
    category: 'Business Solutions',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Real-time GPS fleet tracking',
      'AI dynamic route recalculation',
      'Fuel consumption minimization',
      'Predictive vehicle maintenance'
    ],
    status: 'Active',
    overview: 'QuantumRoute minimizes delivery times and fuel costs for global freight and logistics operators.',
    problem: 'Inefficient routing and unexpected traffic delays drain profit margins and increase carbon emissions.',
    benefits: [
      'Reduces fleet fuel consumption by up to 22%',
      'Guarantees accurate delivery time windows for customers',
      'Prevents costly vehicle breakdowns with predictive alerts'
    ],
    technologies: ['Python', 'PostgreSQL', 'GIS APIs', 'React', 'IoT'],
    targetUsers: ['Logistics Companies', 'Fleet Managers', 'Enterprises'],
    website: 'https://quantumroute.sadorgroup.com',
    relatedProducts: ['product-02', 'product-07']
  },
  {
    id: 'product-16',
    slug: 'urban-prop',
    name: 'UrbanProp Real Estate',
    logo: '🏙️',
    description: 'Property portfolio management and automated tenant leasing marketplace.',
    category: 'Business Solutions',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Automated lease agreement generation',
      'Tenant background screening integration',
      'Maintenance ticketing portal',
      'Financial reporting dashboards'
    ],
    status: 'Active',
    overview: 'UrbanProp streamlines property management operations for landlords, agencies, and real estate investment trusts.',
    problem: 'Managing rental portfolios involves fragmented paperwork, manual rent collection, and delayed maintenance responses.',
    benefits: [
      'Automates rent collection and eliminates late payments',
      'Reduces property vacancy duration with integrated listings',
      'Simplifies maintenance tracking and tenant communication'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    targetUsers: ['Real Estate Agencies', 'Landlords', 'Property Managers'],
    website: 'https://urbanprop.sadorgroup.com',
    relatedProducts: ['product-04', 'product-10']
  },
  {
    id: 'product-17',
    slug: 'bio-track',
    name: 'BioTrack AgriTech',
    logo: '🌱',
    description: 'Precision agriculture IoT sensor network and crop yield prediction platform.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Soil moisture and nutrient telemetry',
      'Satellite crop health monitoring',
      'Automated irrigation control',
      'Harvest yield forecasting'
    ],
    status: 'Beta',
    overview: 'BioTrack empowers modern farmers with data-driven insights to maximize crop yields while conserving water and resources.',
    problem: 'Traditional farming relies on guesswork, leading to water waste, fertilizer overuse, and lower crop yields.',
    benefits: [
      'Conserves irrigation water usage by up to 30%',
      'Detects crop diseases early before widespread damage occurs',
      'Maximizes harvest profitability with precise yield predictions'
    ],
    technologies: ['IoT Sensors', 'Python', 'React', 'GIS', 'Machine Learning'],
    targetUsers: ['Agribusinesses', 'Farmers', 'Agricultural Researchers'],
    website: 'https://biotrack.sadorgroup.com',
    relatedProducts: ['product-09', 'product-15']
  },
  {
    id: 'product-18',
    slug: 'media-vault',
    name: 'MediaVault CDN',
    logo: '🎬',
    description: 'High-speed global content delivery network and AI-enhanced video transcoding service.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Edge caching across 200+ cities',
      'Adaptive bitrate video streaming',
      'AI automated subtitle generation',
      'DDoS attack mitigation'
    ],
    status: 'Active',
    overview: 'MediaVault delivers ultra-low latency video streaming and asset distribution for global media broadcasters.',
    problem: 'Buffering and high latency ruin viewer retention for streaming platforms and digital publishers.',
    benefits: [
      'Delivers 4K video streams with zero buffering worldwide',
      'Reduces egress bandwidth costs by 45%',
      'Automates video localization with AI transcription'
    ],
    technologies: ['C++', 'Go', 'WebRTC', 'AWS CloudFront', 'AI'],
    targetUsers: ['Media Companies', 'Broadcasters', 'Publishers'],
    website: 'https://mediavault.sadorgroup.com',
    relatedProducts: ['product-02', 'product-05']
  },
  {
    id: 'product-19',
    slug: 'legal-genie',
    name: 'LegalGenie AI Contracts',
    logo: '⚖️',
    description: 'AI-powered contract review, automated legal drafting, and compliance monitoring.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Instant contract risk analysis',
      'Automated clause redlining',
      'Regulatory compliance tracking',
      'Electronic signature workflow'
    ],
    status: 'Active',
    overview: 'LegalGenie accelerates legal review workflows and mitigates contractual liability for corporate legal teams.',
    problem: 'Reviewing complex legal contracts manually is time-consuming, expensive, and prone to human oversight errors.',
    benefits: [
      'Reduces contract review time from days to minutes',
      'Identifies hidden legal liabilities and unfavorable clauses instantly',
      'Cuts external legal counsel expenditure significantly'
    ],
    technologies: ['Python', 'NLP', 'React', 'PostgreSQL', 'Encryption'],
    targetUsers: ['Legal Departments', 'Enterprises', 'Law Firms'],
    website: 'https://legalgenie.sadorgroup.com',
    relatedProducts: ['product-01', 'product-08']
  },
  {
    id: 'product-20',
    slug: 'talent-hub',
    name: 'TalentHub Recruiter',
    logo: '🎯',
    description: 'AI-driven talent acquisition, resume parsing, and automated interview scheduling platform.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Semantic resume matching',
      'Automated candidate screening bots',
      'Calendar interview synchronization',
      'Diversity hiring analytics'
    ],
    status: 'Active',
    overview: 'TalentHub connects high-growth companies with elite global talent through intelligent matching algorithms.',
    problem: 'Recruiters are overwhelmed by thousands of unqualified resumes and tedious scheduling coordination.',
    benefits: [
      'Shortens time-to-hire by 60%',
      'Identifies top-tier candidates with unbiased AI screening',
      'Eliminates scheduling back-and-forth entirely'
    ],
    technologies: ['React', 'Python', 'Node.js', 'PostgreSQL', 'AI'],
    targetUsers: ['HR Teams', 'Recruiters', 'Enterprises'],
    website: 'https://talenthub.sadorgroup.com',
    relatedProducts: ['product-10', 'product-12']
  },
  {
    id: 'product-21',
    slug: 'carbon-zero',
    name: 'CarbonZero ESG Tracker',
    logo: '🌿',
    description: 'Enterprise sustainability accounting, carbon footprint tracking, and ESG reporting suite.',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Scope 1, 2, and 3 emissions calculator',
      'Automated utility meter integration',
      'Regulatory ESG audit reporting',
      'Carbon offset marketplace'
    ],
    status: 'Active',
    overview: 'CarbonZero enables organizations to measure, report, and neutralize their environmental impact with verified precision.',
    problem: 'Tracking corporate carbon emissions across global supply chains is complex and lacks standardized auditing.',
    benefits: [
      'Automates compliance with global ESG reporting standards',
      'Identifies carbon reduction opportunities across operations',
      'Builds brand trust with verified sustainability metrics'
    ],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Blockchain'],
    targetUsers: ['Enterprises', 'Sustainability Officers', 'CFOs'],
    website: 'https://carbonzero.sadorgroup.com',
    relatedProducts: ['product-02', 'product-12']
  },
  {
    id: 'product-22',
    slug: 'nexus-iot',
    name: 'NexusIoT Industrial Hub',
    logo: '📡',
    description: 'Industrial IoT device management, telemetry streaming, and predictive factory automation.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Millions of concurrent device connections',
      'Real-time industrial telemetry streaming',
      'Factory floor anomaly detection',
      'Secure firmware OTA management'
    ],
    status: 'Active',
    overview: 'NexusIoT orchestrates industrial sensor grids and manufacturing machinery for Industry 4.0 transformations.',
    problem: 'Factory floors suffer from disconnected machinery, unexpected downtime, and lack of real-time telemetry.',
    benefits: [
      'Prevents catastrophic factory downtime with predictive alerts',
      'Optimizes industrial machine performance in real time',
      'Secures IoT telemetry against cyber infiltration'
    ],
    technologies: ['MQTT', 'Go', 'TimescaleDB', 'Kubernetes', 'C++'],
    targetUsers: ['Manufacturers', 'Industrial Engineers', 'Enterprises'],
    website: 'https://nexusiot.sadorgroup.com',
    relatedProducts: ['product-02', 'product-09']
  },
  {
    id: 'product-23',
    slug: 'sador-space',
    name: 'SadorSpace Collaboration',
    logo: '🪐',
    description: 'Secure, real-time spatial workspace and immersive team collaboration hub for remote enterprises.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Spatial audio virtual breakout rooms',
      'Real-time infinite whiteboarding',
      'Encrypted document co-editing',
      'Async video messaging threads'
    ],
    status: 'Coming Soon',
    overview: 'SadorSpace replicates the energy of physical collocation for distributed enterprise teams through immersive virtual environments.',
    problem: 'Remote work leads to meeting fatigue, siloed communication, and loss of team cohesion.',
    benefits: [
      'Enhances spontaneous collaboration among remote teams',
      'Reduces unnecessary video meeting fatigue with spatial audio',
      'Centralizes team documentation and brainstorming boards'
    ],
    technologies: ['WebRTC', 'React', 'Node.js', 'WebSockets', 'Canvas API'],
    targetUsers: ['Remote Teams', 'Enterprises', 'Design Agencies'],
    website: 'https://space.sadorgroup.com',
    relatedProducts: ['product-06', 'product-10']
  }
];

export default products;
