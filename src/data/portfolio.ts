export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "blockchain" | "fintech" | "healthcare" | "social" | "analytics";
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "hederawise",
    title: "HederaWise",
    description: "DeFi savings platform on Hedera with tokenized goals",
    longDescription:
      'A comprehensive DeFi savings platform built on Hedera featuring the $HWISE fungible token. Users can create customizable savings plans, "nest" accounts for children, and manage personal savings with automated payouts and NFT rewards.',
    technologies: [
      "React Native",
      "Expo",
      "Hono",
      "Bun",
      "Hedera SDK",
      "Drizzle ORM",
      "Neon DB",
      "TypeScript",
    ],
    category: "blockchain",
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://hederawise.vercel.app",
    githubUrl: "https://github.com/VesperQuartz/hederawise",
    features: [
      "Tokenized savings ($HWISE)",
      "NFT rewards for milestones",
      "Cross-platform (Web & Mobile)",
      "Customizable savings goals",
    ],
  },
  {
    id: "nexfeed",
    title: "NexFeed",
    description: "Decentralized product feedback app built with Arbitrum",
    longDescription:
      "A decentralized application designed for gathering and managing product feedback, leveraging the Arbitrum Layer 2 solution for secure and efficient interactions.",
    technologies: ["Solidity", "React", "TypeScript", "Arbitrum", "Web3.js"],
    category: "social",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: "https://github.com/VesperQuartz/nexfeed",
    features: [
      "Decentralized feedback submission",
      "On-chain verification",
      "Transparent user engagement",
      "Efficient L2 transactions",
    ],
  },
  {
    id: "payhub",
    title: "PayHub",
    description:
      "Local merchant payment app powered by Google Blockchain RPC & PayPal PYUSD",
    longDescription:
      "A robust local payment solution for merchants that integrates Google Blockchain RPC and PayPal PYUSD to facilitate seamless and secure financial transactions.",
    technologies: [
      "TypeScript",
      "Google Blockchain RPC",
      "PayPal PYUSD",
      "Node.js",
    ],
    category: "fintech",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: "https://github.com/VesperQuartz/payhub",
    features: [
      "Crypto-to-fiat bridge",
      "Merchant dashboard",
      "Low-fee transactions",
      "Secure payment processing",
    ],
  },
  {
    id: "medsync",
    title: "MedSync",
    description: "Comprehensive hospital management system",
    longDescription:
      "A healthcare management platform designed to streamline hospital operations, patient care coordination, and medical record keeping.",
    technologies: ["TypeScript", "React", "Node.js", "Database"],
    category: "healthcare",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: "https://github.com/VesperQuartz/medsync",
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Hospital resource tracking",
      "Staff management",
    ],
  },
  {
    id: "aptos-nft-marketplace",
    title: "Aptos NFT Marketplace",
    description: "NFT Marketplace on Aptos for fungible tokens",
    longDescription:
      "A decentralized marketplace built on the Aptos blockchain, focused on the trading and exchange of NFTs and fungible tokens with high speed and low costs.",
    technologies: ["TypeScript", "Aptos SDK", "Move", "React"],
    category: "blockchain",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: "https://github.com/VesperQuartz/aptos_nft_marketplace",
    features: [
      "NFT minting and listing",
      "Fungible token support",
      "Wallet integration",
      "Fast transaction settlement",
    ],
  },
  {
    id: "thimble",
    title: "Thimble",
    description: "AI meme creator forum and community",
    longDescription:
      "An interactive platform that leverages AI to help users create memes and engage with a community of creators in a forum-style setting.",
    technologies: [
      "React",
      "TanStack Router",
      "TanStack Query",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "social",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: "https://github.com/VesperQuartz/thimble",
    features: [
      "AI-powered image generation",
      "Community forum",
      "Meme sharing and voting",
      "User profiles",
    ],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  backend: [
    "Node.js",
    "Hono",
    "Bun",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  blockchain: ["Hedera", "Aptos", "Ethereum", "Solidity", "Web3.js", "Move"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Jest", "Biometric", "Expo"],
};

export const personalInfo = {
  name: "Waheed",
  title: "Full Stack Developer",
  tagline: "I build web and blockchain products end to end.",
  bio: "Passionate full-stack developer with expertise in blockchain technologies, fintech solutions, and modern web applications. I specialize in building scalable, user-focused applications that solve real-world problems.",
  about: [
    "I'm a full-stack developer based in Nigeria. Over the last five years I've shipped products in blockchain, fintech, and healthcare from smart contracts and backend APIs through to the interfaces people use every day.",
    "I care about small, well-tested systems and interfaces that stay out of the way. Most of my day is TypeScript, React, and Node, with smart contracts in Solidity and Move.",
  ],
  location: "Nigeria",
  email: "waheedjimoh444@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdulwaheed-j-64561494",
  github: "https://github.com/VesperQuartz",
  twitter: "https://twitter.com/mrlectus",
  cvUrl: "https://cfhono.mrlectus.online/jimoh1.pdf",
};
