/**
 * Resume Content Data
 * All content extracted from Brendon Smith's index.html portfolio
 */

export const RESUME_CONTENT = {
  // ABOUT / HERO Section
  ABOUT: {
    type: 'about',
    title: 'Brendon Smith',
    subtitle: 'Creative Engineer',
    tagline: 'Creative Engineer — 10+ Years',
    location: {
      city: 'Berkeley, California',
      coordinates: '37.87° N · 122.27° W'
    },
    heroPitch: 'Crafting immersive digital experiences at the intersection of AI, art & engineering — from AI-powered XR platforms to FDA-approved therapeutics & holographic retail.',
    description: `I'm a creative engineer based in the San Francisco Bay Area with over a decade of experience across AI, media, gaming, biomedical, and immersive technology. I specialize in React, React Native, Three.js, WebXR, and AI-driven development with LangChain, OpenAI, and Anthropic APIs — transforming complex problems into elegant, user-centric solutions.

From building m{ai}geXR, an AI-powered platform that generates 3D/XR experiences from natural language, to pioneering the first FDA-approved digital therapeutic at Akili Interactive, and crafting holographic AR experiences for Microsoft — I thrive where AI, creativity, and code converge.`,
    stats: [
      {
        value: '10+',
        label: 'Years of\nExperience'
      },
      {
        value: '300',
        label: 'GitHub\nRepos'
      },
      {
        value: '70M+',
        label: 'Users\nImpacted'
      },
      {
        value: 'AI',
        label: 'LangChain, OpenAI\nAnthropic, LLMs'
      }
    ]
  },

  // EXPERIENCE Section
  EXPERIENCE: [
    {
      dates: '2024 — Present',
      role: 'Applications Developer L4',
      company: 'UC Davis — RSS',
      description: 'Building AI-powered microservices and applications with React, GraphQL, and MongoDB. Worked on enterprise software specifically the no-code Library Management.',
      tags: ['React', 'GraphQL', 'MongoDB', 'LangChain', 'AI Agents', 'PostgreSQL']
    },
    {
      dates: '2022 — 2024',
      role: 'Sr. Software Engineer',
      company: 'Freelance — Microsoft, Rock Paper Reality',
      description: 'Built holographic retail for Microsoft and AR campaigns with 8th Wall. Drove late-stage React / React Native projects to completion.',
      tags: ['React Native', 'Three.js', '8th Wall', 'Unity', 'WebAR']
    },
    {
      dates: '2021 — 2022',
      role: 'Sr. Engineer / Interim FE Lead',
      company: 'King (Candy Crush)',
      description: 'Led front-end on King\'s loyalty platform, optimizing engagement and booster sales through data-driven UI improvements.',
      tags: ['React', 'TypeScript', 'D3', 'Redux', 'Analytics']
    },
    {
      dates: '2019 — 2020',
      role: 'Frontend Engineer',
      company: 'Dictionary.com',
      description: 'Built reusable components and improved KPIs for 70M+ monthly users. Integrated Storybook, comprehensive tests, and styled-component overhauls.',
      tags: ['React', 'EmotionJS', 'Storybook', 'AWS', 'Docker']
    },
    {
      dates: '2016 — 2019',
      role: 'Sr. Software Engineer',
      company: 'Akili Interactive',
      description: 'Pioneered EndeavorRx — the first FDA-approved digital therapeutic for ADHD. Built HIPAA-compliant dashboards and React Native apps.',
      tags: ['React Native', 'D3', 'Redux', 'Auth0', 'HIPAA']
    },
    {
      dates: '2012 — 2016',
      role: 'Sr. Software Engineer',
      company: 'CBS Interactive',
      description: 'Built CBS All Access streaming, Big Brother Live Feeds, and led mobile web development serving millions of viewers.',
      tags: ['React', 'PHP', 'WebGL', 'Drupal', 'SOLR']
    }
  ],

  // PROJECTS Section
  PROJECTS: [
    {
      number: '01',
      name: 'EndeavorRx',
      organization: 'Akili Interactive',
      description: 'Pioneered the first and only FDA-approved digital therapeutic for ADHD in children. Built HIPAA-compliant clinician dashboards and cross-platform native apps for patients and healthcare professionals.',
      tags: ['FDA-Approved', 'React Native', 'D3', 'HIPAA']
    },
    {
      number: '02',
      name: 'Candy Crush Loyalty',
      organization: 'King',
      description: 'Led front-end development on King\'s loyalty platform — optimizing user engagement and driving booster sales outside the App Store through data-driven UI strategies and A/B testing at scale.',
      tags: ['React', 'TypeScript', 'Analytics', 'A/B Testing']
    },
    {
      number: '03',
      name: 'Holographic Retail',
      organization: 'Microsoft / Rock Paper Reality',
      description: 'Developed a groundbreaking holographic retail site for Microsoft and immersive AR advertising using 8th Wall, react-three-fiber, and Unity — pushing the boundary of what\'s possible on the web.',
      tags: ['WebAR', 'Three.js', '8th Wall', 'Unity']
    },
    {
      number: '04',
      name: 'CBS All Access',
      organization: 'CBS Interactive',
      description: 'Helped build one of the first major streaming platforms — engineering the mobile web experience, Big Brother Live Feeds with real-time chat, and the subscription service that became Paramount+.',
      tags: ['Streaming', 'React', 'PHP', 'WebGL']
    }
  ],

  // SKILLS Section
  SKILLS: {
    intro: 'Full-stack mastery, creative edge',
    categories: [
      {
        skills: ['React', 'React Native', 'Three.js', 'TypeScript', 'GraphQL', 'Node.js', 'WebXR', 'LangChain', 'D3', 'AWS']
      },
      {
        skills: ['Unity3D', '8th Wall', 'BabylonJS', 'MongoDB', 'Docker', 'PostgreSQL', 'Kubernetes', 'Auth0', 'A-Frame', 'GLSL']
      }
    ]
  },

  // OPEN SOURCE Section
  OPENSOURCE: [
    {
      badge: 'AI + XR',
      icon: '🧠',
      name: 'm{ai}geXR',
      tagline: 'From conversation to creation',
      description: 'A revolutionary AI-powered platform that transforms natural language into immersive 3D experiences. Supports 5+ AI providers (OpenAI, Anthropic, Together.ai, Google AI, Ollama) and 5+ 3D frameworks (Babylon.js, Three.js, R3F, A-Frame) across Android, iOS, and Web.',
      stats: ['3 Platforms', '5+ AI Providers', '5+ 3D Frameworks'],
      tags: ['LangChain', 'OpenAI', 'Anthropic', 'Next.js', 'Three.js', 'Kotlin', 'Swift'],
      link: 'https://maigexr.vercel.app/',
      linkText: 'View Project'
    },
    {
      badge: 'Game Engine',
      icon: '🎮',
      name: 'NOVA64',
      tagline: 'JavaScript deserves a GPU that doesn\'t suck',
      description: 'A fantasy console and full game development ecosystem for building N64/PS1-era 3D games in the browser. Features a GPU-accelerated 3D engine, voxel renderer, physics system, sprite editor, and a complete retro OS shell — with 20+ playable demos.',
      stats: ['20+ Demos', 'Full 3D Engine', 'Retro OS Shell'],
      tags: ['Three.js', 'WebGL', 'Voxels', 'Physics', 'TypeScript'],
      link: 'https://starcade9.github.io/',
      linkText: 'View Project'
    },
    {
      badge: 'React + 3D',
      icon: '⚛️',
      name: 'react-babylonjs',
      tagline: 'React renderer for Babylon.js 3D engine',
      description: 'A declarative React renderer for the Babylon.js 3D engine, enabling developers to build complex 3D scenes using familiar React component patterns. Contributed to bringing the power of Babylon.js into the React ecosystem.',
      stats: ['React Renderer', 'Declarative 3D', 'Babylon.js'],
      tags: ['React', 'Babylon.js', 'TypeScript', 'WebGL', '3D'],
      link: 'https://github.com/seacloud9/react-babylonjs',
      linkText: 'View on GitHub'
    }
  ],

  // CONTACT Section
  CONTACT: {
    title: 'Let\'s build something incredible',
    intro: 'Get in touch to collaborate on your next project',
    links: [
      {
        label: 'Email',
        value: 'Brendonsmith@seacloud9.org',
        href: 'mailto:Brendonsmith@seacloud9.org'
      },
      {
        label: 'GitHub',
        value: 'github.com/seacloud9',
        href: 'https://github.com/seacloud9'
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/brendonsmith',
        href: 'https://www.linkedin.com/in/brendonsmith/'
      },
      {
        label: 'X / Twitter',
        value: 'x.com/seacloud9',
        href: 'https://x.com/seacloud9'
      },
      {
        label: 'Studio',
        value: 'seacloud9.studio',
        href: 'https://seacloud9.studio'
      }
    ]
  }
}

// Helper to get content by section ID
export const getContentBySection = (sectionId) => {
  const sectionMap = {
    0: RESUME_CONTENT.ABOUT,
    1: RESUME_CONTENT.EXPERIENCE,
    2: RESUME_CONTENT.PROJECTS,
    3: RESUME_CONTENT.SKILLS,
    4: RESUME_CONTENT.OPENSOURCE,
    5: RESUME_CONTENT.CONTACT
  }
  return sectionMap[sectionId] || null
}

// Summarized versions for billboards
export const getSummarizedContent = (sectionId) => {
  switch (sectionId) {
    case 0: // About
      return {
        ...RESUME_CONTENT.ABOUT,
        description: RESUME_CONTENT.ABOUT.description.split('.').slice(0, 2).join('.') + '...',
        stats: RESUME_CONTENT.ABOUT.stats.slice(0, 2) // Show only first 2 stats
      }
    case 1: // Experience
      return RESUME_CONTENT.EXPERIENCE.slice(0, 2) // Show only 2 most recent jobs
    case 2: // Projects
      return RESUME_CONTENT.PROJECTS.slice(0, 2) // Show only 2 projects
    case 3: // Skills
      return {
        ...RESUME_CONTENT.SKILLS,
        categories: [{ skills: RESUME_CONTENT.SKILLS.categories[0].skills.slice(0, 6) }] // Show first 6 skills
      }
    case 4: // Open Source
      return RESUME_CONTENT.OPENSOURCE.slice(0, 2) // Show 2 projects
    case 5: // Contact
      return {
        ...RESUME_CONTENT.CONTACT,
        links: RESUME_CONTENT.CONTACT.links.slice(0, 3) // Show first 3 links
      }
    default:
      return null
  }
}
