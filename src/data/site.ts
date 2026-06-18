export interface Link {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  role: string;
  summary: string;
  url: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const profile = {
  name: 'Manuel Alejandro Mosquera Ortega',
  shortName: 'Manuel Mosquera',
  title: 'PhD Student in Machine Learning & AI',
  affiliation: 'Universidad de los Andes, Colombia',
  tagline:
    'Predictive latent world models for reasoning, planning, and generalization in embodied agents.',
  email: 'ma.mosquerao@uniandes.edu.co',
  phone: '(+57) 310 565 7732',
  cvPath: '/CV_Manuel_Mosquera.pdf',
  links: [
    {
      label: 'Email',
      href: 'mailto:ma.mosquerao@uniandes.edu.co',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/manuel-mosquera',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=manuel-mosquera',
    },
  ] satisfies Link[],
};

export const navItems = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const research = {
  statement: [
    'I am a third-year PhD student at Universidad de los Andes, working on latent world models. My research is motivated by the hypothesis that predictive latent representations can provide a scalable foundation for reasoning, planning, and generalization in embodied agents.',
    'Over the past six months, I have been developing a hierarchical latent world model that learns semantic representations for long-horizon planning and hierarchical decision-making. I am particularly interested in how self-supervised predictive objectives can yield structured latent spaces that support efficient planning without relying on hand-engineered state abstractions.',
    'More broadly, my research interests include self-supervised representation learning, predictive latent world models, and energy-based models for efficient planning in high-dimensional spaces. I have extensive experience implementing and training deep learning systems in PyTorch, including transformers, large language models, and modern self-supervised world models such as V-JEPA 2.',
  ],
  interests: [
    'Self-supervised representation learning',
    'Predictive latent world models',
    'Energy-based models for planning',
    'Embodied agents',
    'Long-horizon reasoning',
    'Hierarchical decision-making',
  ],
  skills: [
    'PyTorch',
    'Transformers',
    'Large language models',
    'V-JEPA 2',
    'Reinforcement learning',
    'GRPO',
    'Multi-agent systems',
  ],
};

export const publications: Publication[] = [
  {
    title:
      'Improving Low-Resource Translation with Dictionary-Guided Fine-Tuning and RL: A Spanish-to-Wayuunaiki Study',
    venue: 'AAAI',
    year: '2026',
    role: 'First author',
    summary:
      'Demonstrates how reinforcement learning techniques such as GRPO can teach an agent to use a bilingual dictionary, improving translation performance in a low-resource setting.',
    url: 'https://doi.org/10.1609/aaai.v40i46.41251',
  },
  {
    title: 'Can LLM-Augmented Autonomous Agents Cooperate? An Evaluation of Their Cooperative Capabilities Through Melting Pot',
    venue: 'IEEE TAI',
    year: '2025',
    role: 'First author',
    summary:
      'Explores how state-of-the-art language model-based agent architectures perform in multi-agent environments and compares them to reinforcement learning agents in Melting Pot.',
    url: 'https://doi.ieeecomputersociety.org/10.1109/TAI.2025.3569192',
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'PhD in Engineering',
    institution: 'Universidad de los Andes',
    period: '2025 – present',
    details: 'Researching reasoning in AI models, with a focus on latent world models.',
  },
  {
    degree: "Master's in Systems and Computing Engineering",
    institution: 'Universidad de los Andes',
    period: '2022 – 2025',
    details:
      'Emphasis in artificial intelligence. Graduated cum laude with a GPA of 4.85/5.00 (top 3% of the last five years).',
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Professor',
    organization: 'Universidad de los Andes',
    period: '2025 – present',
    description:
      'Teaching Introduction to Programming in the Faculty of Engineering.',
  },
  {
    role: 'Teaching Assistant',
    organization: 'Universidad de los Andes',
    period: '2023 – 2024',
    description:
      'Developed tutorials, graded exercises, and workshops for Fundamentals of Natural Language Processing and Advanced Models of Natural Language Processing in the master\'s program in Artificial Intelligence.',
  },
  {
    role: 'Frontend Web Developer',
    organization: 'Rappi',
    period: '2021 – 2023',
    description:
      'Built production user interfaces with JavaScript, TypeScript, and React for two Rappi web portals.',
  },
];

export const contact = {
  message:
    'I am open to research collaborations and internship discussions. Feel free to reach out by email.',
};
