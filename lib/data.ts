import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact, FaChartBar, FaLaptopCode } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaDatabase, FaChartLine, FaBrain, FaRobot } from "react-icons/fa"; // I added this as icon purpose alone

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Data Scientist",
    location: "Zgrow solutions pvt ltd",
    description:
      "Specialized in fine-tuning AI-driven assistants with agent-based workflows, optimizing prompt engineering, data retrieval, and model evaluation—boosting response accuracy by 76% and enhancing user engagement.",
    icon: React.createElement(FaChartBar),
    date: "Nov 2023 - Dec 2024",
    type: "experience",
  },
  {
    title: "Data Analyst Intern",
    location: "Senchola University",
    description:
      "Processed, cleaned, and visualized diverse datasets using Python and Power BI; assisted in data curation to enhance analysis accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "jul 2023 - oct 2023",
    type: "experience",
  },
  {
    title: "Data Analyst Intern",
    location: "cloud counselage",
    description:
      "Led data science initiatives, developed predictive models, and implemented machine learning solutions. Worked on data curation, feature engineering, and model optimization.",
    icon: React.createElement(FaLaptopCode),
    date: "May 2023 - Aug 2023",
    type: "experience",
  },
] as const;

export const educationData = [
  {
    title: "M.Sc., Mathematics",
    location: "Bharathi Women's College",
    description:
      "Specialized in advanced Deep focus on pure math, won Math Modelling and Quiz awards.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
    type: "education",
  },
  {
    title: "B.Sc., Mathematics",
    location: "Valliammal College for Women",
    description:
      "Focused on programming fundamentals, mathematics, and statistics. Participated in various competitions and workshops.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
    type: "education",
  },
] as const;

export const volunteerData = [
  {
    title: "AI Workshop ",
    description:
      "Delivered an session introducing college students to the fundamentals of Artificial Intelligence, covering core concepts and real-world applications.",
    tags: ["Python", "TensorFlow", "Docker", "MLOps", "AWS"],
    icon: React.createElement(FaBrain),
    date: "Sept 2024",
    imageUrl: corpcommentImg,
  },

  {
    title: "Guest Speaker on Vector DB",
    location: "Tech Community",
    description:
      "Delivered an in-depth session on Vector DB, live demos, and a mathematical approach.",
    icon: React.createElement(FaRobot),
    date: "May 2024",
    type: "volunteer",
  },
] as const;

export const projectCategories = ["Python", "Math", "SQL", "Power BI"] as const;

export const categorizedProjectsData = {
  Python: [
    {
      title: "Personal PA – AI Scheduling Agent",
      //description:"AI-driven task scheduler that automates daily planning, prioritization, and rescheduling based on activity insights.",
      //tools: "Python, Xamarin.AI, NLP, FastAPI, PostgreSQL",
      imageUrl: "robo.png",
      githubUrl: "https://github.com/yourusername/personal-ta",
    },
    {
      title: "Thirukkural Hugging Face Model",
      //description:"An NLP-based open-source dataset containing 1330 Thirukkural verses, designed for AI-driven text analysis and understanding.",
      //tools: "Python, Hugging Face, Transformers, NLP",
      imageUrl: "Thirukkural image.jfif",
      githubUrl: "https://github.com/yourusername/thirukkural-nlp",
    },
  ],

  "Power BI": [
    {
      title: "Zomato Dashboard – Data Analysis",
      //description:"Explored restaurant data from 141 countries, analyzing customer preferences, rating impact, and food delivery trends.",
      //tools: "Power BI, DAX, Data Visualization, SQL",
      imageUrl: "zomato.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_revolutionizing-experiences-zomato-dashboard-activity-7105908147671744513-cI3d/",
    },
    {
      title: "IPL 2023 Dashboard – Cricket Analytics",
      //description:"Analyzed IPL 2023 match data, player performances, and team strategies using Power BI and DAX.",
      //tools: "Power BI, DAX, Sports Analytics",
      imageUrl: "dashboard.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_ipl-dashboard-2023-activity-7104346535156482048-JoD2/",
    },
    {
      title: "Thirukkural Dataset – Data Analytics",
      //description:"Developed a structured dataset for all 1330 Thirukkural verses, enabling text analysis and sentiment insights.",
      //tools: "Power BI, NLP, Tamil Linguistics, Data Visualization",
      imageUrl: "tamil.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_unveiling-insights-real-time-telecom-dataset-activity-7099954741106921473-gaQG/",
    },
  ],

  SQL: [
    {
      title: "Database Analytics",
      //description: "Complex SQL queries and analytics",
      //tools: "PostgreSQL, MySQL",
      imageUrl: "sql DB.jfif",
      githubUrl: "#",
    },
  ],
  Math: [
    {
      title: "How Neural Networks Work with Matrices",
      //description:"Exploring how matrices are fundamental to neural networks, from data representation to weight connections and forward-backward propagation.",
      //tools:"Matrix Multiplication, Backpropagation, Linear Algebra, Deep Learning",
      imageUrl: "nn.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_neuralnetworks-matrixmath-datarepresentation-activity-7193801616997638144-0_Ml/",
    },
    {
      title: "Matrix Types & Their Applications in AI",
      //description:"A detailed breakdown of different matrix types (Diagonal, Scalar, Identity, Symmetric, etc.) and their role in AI and computing.",
      //tools: "Linear Algebra, Machine Learning, PCA, SVD, Data Transformation",
      imageUrl: "matrixs.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_matrices-and-their-significant-all-role-activity-7203216869506310145-pIIA/",
    },
    {
      title: "Pi (π) – Beyond 3.14",
      //description:"Exploring how Pi was derived with increasing accuracy using Archimedes' method of inscribed polygons.",
      //tools:"Mathematical Proofs, Geometric Analysis, Archimedean Approximation",
      imageUrl: "pi.jfif",
      linkedinUrl:
        "https://www.linkedin.com/in/nandhini25/recent-activity/all/",
    },
    {
      title: "Semantic Search – The Mathematics Behind AI Search",
      //description:"Explained how semantic search works using vector space models (VSM), cosine similarity, and latent semantic analysis (LSA).",
      //tools:"Vector Space Model, Cosine Similarity, Latent Semantic Analysis (LSA), NLP",
      imageUrl: "search.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_semanticsearch-ai-searchtechnology-activity-7188017228770873344-fi1t/",
    },
    {
      title: "Srinivasa Ramanujan – The Genius Mathematician",
      //description:"A deep dive into Ramanujan’s contributions, from infinite series to partition theory, and his impact on modern mathematics.",
      //tools: "Number Theory, Infinite Series, Mathematical Proofs",
      imageUrl: "ramanujam infinite.jfif",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_ramanujan-mathematics-infinitepossibilities-activity-7189481800308604929-RUTf/",
    },
  ],
} as const;

export const skillsData = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "SQL",
  "Statistics",
  "Data Visualization",
  "Power BI",
  "Git",
  "MAthematics",
  "AWS",
  "Linear Algebra",
  "Calculus",
  "FastAPI",
  //"PostgreSQL",
] as const;
