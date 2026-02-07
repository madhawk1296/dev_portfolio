export interface Project {
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrls?: string[];
}

export const projects: Project[] = [
  // Top Tier Projects
  {
    title: "BrandStarter",
    description:
      "AI-powered logo generator that creates unique, professional logo concepts instantly. Built a multi-model system using OpenAI and Gemini for logo generation, with iterative prompt engineering to produce usable outputs.",
    shortDescription: "AI-powered logo generator",
    techStack: ["Next.js", "OpenAI", "Gemini", "Supabase", "Stripe", "TypeScript"],
    liveUrl: "https://brandstarter.app",
    imageUrls: ["/projects/brandstarter-landing.png", "/projects/brandstarter-dashboard.png"],
  },
  {
    title: "Spyder",
    description:
      "No-code subgraph builder for blockchain data. Enables users to create and deploy subgraphs without writing code, making blockchain data accessible to everyone.",
    shortDescription: "No-code subgraph builder for blockchain data",
    techStack: ["React", "TypeScript", "GraphQL", "The Graph", "Ethereum"],
    githubUrl: "https://github.com/madhawk1296/spyder_website",
    liveUrl: "https://spyder-app.vercel.app",
    imageUrls: ["/projects/spyder.png"],
  },
  {
    title: "Bundlr",
    description:
      "NFT marketplace optimized for bulk sales on Arbitrum. Features batch minting, gas-efficient transactions, and seamless collection management.",
    shortDescription: "NFT marketplace for bulk sales on Arbitrum",
    techStack: ["Next.js", "Solidity", "Arbitrum", "IPFS", "Wagmi"],
    githubUrl: "https://github.com/madhawk1296/bundlr_app",
    liveUrl: "https://bundlr-nft.vercel.app",
    imageUrls: ["/projects/bundlr.png"],
  },
  {
    title: "PortfolioGPT",
    description:
      "AI chatbot trained on personal resume data for portfolio websites. Visitors can ask questions about experience, skills, and projects in natural language.",
    shortDescription: "AI chatbot trained on personal resume data",
    techStack: ["Next.js", "OpenAI", "LangChain", "Pinecone", "TypeScript"],
    githubUrl: "https://github.com/madhawk1296/portfolioGPT",
    liveUrl: "https://portfolio-gpt.vercel.app",
    imageUrls: ["/projects/portfoliogpt.png"],
  },
  {
    title: "SimplyBudget",
    description:
      "AI-powered finance dashboard that analyzes bank statements. Provides spending insights, budget recommendations, and financial goal tracking.",
    shortDescription: "AI-powered finance dashboard",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    githubUrl: "https://github.com/madhawk1296/simplybudget",
    liveUrl: "https://simply-budget.vercel.app",
    imageUrls: ["/projects/simplybudget.png"],
  },
  {
    title: "Recipe AI",
    description:
      "AI recipe generator for health enthusiasts. Creates personalized recipes based on dietary preferences, available ingredients, and nutritional goals.",
    shortDescription: "AI recipe generator for health enthusiasts",
    techStack: ["Next.js", "OpenAI", "Tailwind CSS", "Prisma", "TypeScript"],
    githubUrl: "https://github.com/madhawk1296/recipe_ai",
    liveUrl: "https://recipe-ai.vercel.app",
    imageUrls: ["/projects/recipe-ai.png"],
  },
  // Secondary Projects
  {
    title: "ShowMyCoins",
    description:
      "Crypto portfolio tracker supporting multiple blockchain networks. Track holdings, view performance analytics, and monitor transactions across chains.",
    shortDescription: "Multi-chain crypto portfolio tracker",
    techStack: ["React", "Web3.js", "CoinGecko API", "Chart.js", "TypeScript"],
    githubUrl: "https://github.com/madhawk1296/showmycoins",
    imageUrls: ["/projects/showmycoins.jpg"],
  },
  {
    title: "Bridgy",
    description:
      "NFT analytics platform for crypto gamers. Track gaming NFT values, floor prices, and market trends across popular blockchain games.",
    shortDescription: "NFT analytics platform for crypto gamers",
    techStack: ["Next.js", "Alchemy", "PostgreSQL", "Recharts", "TypeScript"],
    githubUrl: "https://github.com/madhawk1296/bridgy",
  },
];
