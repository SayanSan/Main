
import { Milestone, School } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: "explore",
    year: "Year 1",
    label: "Explore",
    description: "The Nexus Foundation Year. A mandatory common curriculum to discover your true passion through 'Grand Challenge' projects.",
    color: "bg-emerald-500"
  },
  {
    id: "immerse",
    year: "Year 2",
    label: "Immerse",
    description: "Domain Immersion. Build a strong disciplinary foundation with core theories and a mandatory credit-bearing international immersive experience.",
    color: "bg-teal-700"
  },
  {
    id: "specialize",
    year: "Year 3",
    label: "Specialize",
    description: "Deep Specialization. Shift into advanced tracks dominated by studio work, lab research, and live projects commissioned by industry partners.",
    color: "bg-blue-600"
  },
  {
    id: "launch",
    year: "Year 4",
    label: "Launch",
    description: "The Capstone Launchpad. A professional transition year dedicated to major interdisciplinary projects and placement-focused internships.",
    color: "bg-indigo-900"
  }
];

export const SCHOOLS: School[] = [
  {
    id: "digital",
    name: "The Digital Frontier",
    icon: "💻",
    departments: [
      {
        name: "Emerging Technologies",
        description: "Architecting the future of intelligence through Ethical AI, Blockchain, and Cybersecurity.",
        programs: [{ title: "B.Tech (Hons.) in Applied AI & Intelligent Systems", specialization: "AI & ML, Cybersecurity, Web3", pathway: "AI Engineer, Robotics Engineer" }]
      },
      {
        name: "Digital Business & Economics",
        description: "Cultivating tech-savvy leaders who navigate digital disruption and complex economic forces.",
        programs: [{ title: "BBA (Hons.) in Digital Enterprise", specialization: "Digital Transformation, FinTech", pathway: "FinTech Analyst, Social Enterprise" }]
      }
    ]
  },
  {
    id: "creative",
    name: "Creative & Experience Economy",
    icon: "🎨",
    departments: [
      {
        name: "Design",
        description: "Training empathetic, strategic problem-solvers for the full spectrum of physical and digital interaction.",
        programs: [{ title: "B.Des (Hons.) in Human-Centered Experience", specialization: "Immersive UX/UI, Sustainable Products", pathway: "UX/UI Designer, Interaction Designer" }]
      },
      {
        name: "Digital Entertainment",
        description: "Empowering the next generation of versatile creators for the converged global entertainment landscape.",
        programs: [{ title: "B.A. (Hons.) in Creative Industries", specialization: "Film & OTT, Gaming & Interactive", pathway: "Producer, Game Designer" }]
      }
    ]
  },
  {
    id: "planet",
    name: "The Sustainable Planet",
    icon: "🌍",
    departments: [
      {
        name: "Sustainability & Development",
        description: "Developing systems thinkers capable of tackling the world's most complex environmental challenges.",
        programs: [{ title: "B.Sc (Hons.) in Climate Innovation", specialization: "Climate Tech, Circular Economy", pathway: "Sustainability Consultant, Urban Planner" }]
      },
      {
        name: "Smart Agriculture",
        description: "Revolutionizing food systems through the integration of technology, data, and sustainable practices.",
        programs: [{ title: "B.Sc (Hons.) in Agri-Tech & Food Systems", specialization: "Precision Agriculture, Agribusiness", pathway: "Agri-Tech Innovator, Food Systems Consultant" }]
      }
    ]
  }
];

export const SCORECARD_DATA = [
  { label: "Academic Performance", value: 50 },
  { label: "Digital & AI Expertise", value: 10 },
  { label: "Sports, Wellness, Healthcare", value: 10 },
  { label: "Leadership & Club Activities", value: 10 },
  { label: "Internship & Outreach", value: 10 },
  { label: "Attendance, Discipline, EQ", value: 10 },
];