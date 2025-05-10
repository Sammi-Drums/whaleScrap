// services.js

// import { FaFish, FaDolphin, FaWater, FaShark, FaBrain } from 'react-icons/fa';

const services = {
  free: {
    tier: "Free",
    icon: '🐟',
    features: [
      "Basic Whale Alerts (30 min delay)",
      "Trending Tokens based on whale interest",
      "Track up to 2 wallet addresses",
      "Weekly Summary Email"
    ]
  },
  basic: {
    tier: "Basic",
    icon: '🐬',
    features: [
      "Everything in Free",
      "Real-time Whale Alerts",
      "Track up to 5 wallet addresses",
      "On-chain Data Visualizations",
      "Token Accumulation Alerts"
    ]
  },
  mid: {
    tier: "Mid",
    icon: '🌊',
    features: [
      "Everything in Basic",
      "Whale Wallet Labels (Smart Money, Exchanges, etc.)",
      "Custom Alerts by wallet, token, or volume",
      "Wallet-to-Wallet Transfers Monitoring",
      "Historical Behavior Analysis"
    ]
  },
  advanced: {
    tier: "Advanced",
    icon: '🦈',
    features: [
      "Everything in Mid",
      "Private Whale Tracker Lists",
      "Automated Reports (Daily/Weekly)",
      "NFT Whale Activity Tracking",
      "Social + On-Chain Correlation Insights"
    ]
  },
  premium: {
    tier: "Premium",
    icon: '🧠',
    features: [
      "Everything in Advanced",
      "AI-Powered Whale Behavior Predictions",
      "Access to WhaleWatch API",
      "Early Token Launch Detector (based on whale deployments)",
      "Priority Support & Custom Research Requests"
    ]
  }
};

export default services;
