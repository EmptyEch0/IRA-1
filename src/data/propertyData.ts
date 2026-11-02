export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ongoing' | 'completed';
  badge: string;
  image?: string;
  imageBadge?: string;
  plotSize?: string;
  status: string;
  location: string;
  zoning?: string;
  roads?: string;
  description: string;
  disclaimer: string;
  secondaryBadge?: string;
}

export const ONGOING_PROJECTS: Project[] = [
  {
    id: 'coastal-panorama',
    title: 'The Coastal Panorama Layout',
    subtitle: 'MADHURAWADA GROWTH CORRIDOR',
    category: 'ongoing',
    badge: 'UNDER DEVELOPMENT',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    imageBadge: 'ALL APPROVALS SANCTIONED',
    plotSize: '300 TO 600 SQ. YDS PLOTS',
    status: 'GROUND WORK IN PROGRESS',
    location: 'VISAKHAPATNAM HILLS',
    description: 'Elevated coastal ridge residential layout offering panoramic vistas of the Bay of Bengal, strictly conforming to statutory master planning norms with underground utilities and broad avenue avenues.',
    disclaimer: 'Project details to be confirmed. Complete restrictions, statutory approvals, and title schedules will be updated upon formal clearance.',
    secondaryBadge: 'RERA & VMRDA CLEARANCE IN PIPELINE'
  },
  {
    id: 'airport-vista',
    title: 'Airport Vista Enclave',
    subtitle: 'BHOGAPURAM AIRPORT PRECINCT',
    category: 'ongoing',
    badge: 'APPLICATION SUBMITTED',
    plotSize: '200 TO 450 SQ. YDS',
    status: 'SURVEY & DEMARCATION',
    location: 'BHOGAPURAM CORRIDOR',
    zoning: 'CLEAR RESIDENTIAL',
    roads: '40 / 60 FT WIDE BLACKTOP',
    description: 'Strategically situated in the high-velocity Bhogapuram International Airport proximity zone, designed for forward-looking capital appreciation and serene open skylines.',
    disclaimer: 'Project details to be confirmed upon final layout release.',
    secondaryBadge: 'A 25-ACRE MASTER PLAN'
  }
];

export const COMPLETED_PROJECTS: Project[] = [
  {
    id: 'legacy-meadows-1',
    title: 'Legacy Meadows I',
    subtitle: 'A RESIDENTIAL ENCLAVE BY IRA',
    category: 'completed',
    badge: 'HANDED OVER',
    status: 'HANDED OVER TO RESIDENTS BODY',
    location: 'YENDADA, VIZAG',
    secondaryBadge: 'ALL PLOTS SOLD & RECORDED',
    description: 'Project handed to resident body. Complete title documentation and layout clearances safely executed.',
    disclaimer: 'Completed development with clear title registration handed over to individual owners.'
  },
  {
    id: 'silver-crest-residency',
    title: 'Silver Crest Residency',
    subtitle: 'PREMIER URBAN LIVING BY IRA',
    category: 'completed',
    badge: 'HANDED OVER',
    status: 'COMPLETED & REGISTERED',
    location: 'MADHURAWADA, VIZAG',
    secondaryBadge: '100% REGISTRATION COMPLETED',
    description: 'Project handed to resident trust. All boundary demarcation and layout clear title safely delivered.',
    disclaimer: 'Full occupancy and possession handed over with zero regulatory backlog.'
  }
];

export const PRINCIPLES = [
  {
    number: '01',
    tag: 'STATUTORY FIDELITY',
    title: 'Legal Clarity & Verification',
    description: 'Every site undergoes thorough multi-decade title examination, encumbrance verification, and regulatory clearance prior to allocation, ensuring complete peace of mind to every stakeholder.'
  },
  {
    number: '02',
    tag: 'GEOGRAPHIC ACCURACY',
    title: 'Open-Book Transparency',
    description: 'Straightforward pricing schedules, clear zoning documentation, and zero concealed charges on developmental levies. We articulate conditions clearly without abbreviation.'
  },
  {
    number: '03',
    tag: 'GENUINE APPRECIATION',
    title: 'Land Quality & Stewardship',
    description: 'Carefully chosen parcels situated in genuine growth corridors combine all table-spaces with real infrastructure access, natural drainage, and uncompromised topological stability.'
  }
];

export const SERVICES = [
  { id: '01', title: 'Open plots curation & statutory layout mapping' },
  { id: '02', title: 'Residential layout development & road networks' },
  { id: '03', title: 'Flats and architectural apartment facilitation' },
  { id: '04', title: 'Farmland & open-plot ventures' },
  { id: '05', title: 'Real estate property opportunities' },
  { id: '06', title: 'Related property ventures & promotional offerings' }
];

export const LEADERSHIP = [
  {
    name: 'Mr. Ravi Pendurti',
    role: 'FOUNDER & MANAGING DIRECTOR',
    bio: 'Holds an MBA in Marketing & Finance with approximately 15+ years of rigorous real estate marketing acumen across coastal Andhra Pradesh. His stewardship prioritises ethical client representation, strategic land acquisition in burgeoning vizag hubs, and unwavering document discipline.',
    initials: 'RP',
    phone: '+91 89196 35055',
    credential: 'VMRDA Real Estate Advisor | Andhra University Alum'
  },
  {
    name: 'Ms. Sailaja Lalitha Podipireddi',
    role: 'CO-FOUNDER & EXECUTIVE DIRECTOR',
    bio: 'Graduated with an M.Sc in Computer Science, bringing a structured, analytical lens to real estate administrative systems and client engagement. Possesses extensive background in enterprise coordination, client lifecycle workflows, and transparent compliance monitoring for all plot initiatives.',
    initials: 'SP',
    phone: '+91 89196 35055',
    credential: 'M.Sc (Computer Science) | Operational Governance Head'
  }
];

export const TESTIMONIAL = {
  quote: '“The methodical title verification gave our family absolute reassurance when evaluating plots around the Madhurawada corridor. The clarity from start to finish was exemplary.”',
  author: 'RAMESH & SUJATHA RAO',
  designation: 'ACQUIRED ARCHITECTURAL PLOT IN YENDADA',
  tag: 'CLIENT VOICE | RESIDENTIAL PLOT PURCHASE | MR. & MRS. RAO, CMR RESIDENTS',
  verificationTag: 'VERIFIED INVESTOR'
};

export const CONTACT_INFO = {
  company: 'IRA Promoters',
  address: 'Opp CMR Central, VIP Road, Resapuvanipalem, Dwarkanagar, Visakhapatnam - 530016',
  phone: '+91 89196 35055',
  phoneClean: '918919635055',
  hours: 'Monday through Saturday: 09:30 AM – 06:30 PM IST',
  email: 'enquiry@irapromoters.com',
  city: 'Visakhapatnam, Andhra Pradesh'
};
