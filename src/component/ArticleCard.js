import React from "react";
import "./ArticleCard.css"; // Import the CSS file

const articles = [
  {
    id:1,
    title: "Understanding Drug Addiction",
    description: "Learn about the causes and effects of drug addiction and how it impacts individuals and society.",
    image: "/images/recoverybg-1.jpg",
    read_more: "https://example.com/drug-addiction"
  },
  {
    id:2,
    title: "How to Prevent Substance Abuse",
    description: "Discover effective prevention strategies to reduce the risk of drug and substance abuse.",
    image: "/images/recoverybg-1.jpg",
    read_more: "https://example.com/prevent-substance-abuse"
  },
  {
    id:3,
    title: "Government Policies on Drug Control",
    description: "An overview of the latest government policies and regulations aimed at controlling drug abuse.",
    image: "/images/recoverybg-1.jpg",
    read_more: "https://example.com/drug-control-policies"
  },
  {
    id:4,
    title: "Signs and Symptoms of Drug Abuse",
    description: "Recognize the warning signs of drug abuse in friends, family members, and coworkers.",
    image: "/images/recoverybg-1.jpg",
    read_more: "https://example.com/drug-abuse-signs"
  },
  {
    id:5,
    title: "Rehabilitation and Recovery Options",
    description: "Explore various rehab programs and recovery options for individuals struggling with addiction.",
    image: "/images/recoverybg-1.jpg",
    read_more: "https://example.com/rehab-recovery"
  },
  {
    id:6,
    title: "Rehabilitation and Recovery Options",
    description: "Explore various rehab programs and recovery options for individuals struggling with addiction.",
    image: "/images/recoverybg-1.jpg",
    read_more: "https://example.com/rehab-recovery"
  }
];

const ArticleCard = () => {
  return (
    <>
     <div className="header-container">
      <h1 className="header-title">
        <span className="highlight">Say No to Drugs:</span>  Practical Ways to Resist Peer Pressure
      </h1>
      <p className="header-subtitle">
        Stay informed with accurate data, prevention methods, and recovery options.
      </p>
    </div>
    <div className="article-container">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <a href={article.read_more} className="read-more" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ArticleCard;
