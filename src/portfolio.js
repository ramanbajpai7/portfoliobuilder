/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Raman Kumar Bajpai",
  title: "Hi all, I'm Raman",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building production-grade SaaS platforms using Next.js, React, TypeScript, Node.js, NestJS, and modern web technologies. Specialized in scalable frontend architecture and backend API development."
  ),
  resumeLink: "", // Add your resume link here if you want to display it
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ramanbajpai7",
  linkedin: "https://www.linkedin.com/in/raman-bajpai-b498a61b8/",
  gmail: "ramanbajpai9795@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER BUILDING SCALABLE SAAS PLATFORMS",
  skills: [
    emoji(
      "⚡ Develop highly scalable and performant SaaS applications with Next.js, React, and TypeScript"
    ),
    emoji(
      "⚡ Build secure RESTful APIs and real-time integrations with NestJS, Node.js, and MongoDB"
    ),
    emoji(
      "⚡ Implement modern authentication systems, state management, and cloud-based solutions"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ABES Engineering College",
      logo: "/abescollege.png",
      // image: "/docsora-document-management-platform-logo.jpg",
      subHeader: "B.Tech in Mechanical Engineering",
      duration: "2020 - 2024",
      desc: "CGPA: 7.6/10.0",
      descBullets: [
        "2nd place in 'Hack The November' Hackathon (80+ teams)",
        "Selected for Amazon ML Summer School 2023",
        "2-star CodeChef (1447+) | 400+ problems solved on LeetCode and GFG",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%",
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Xcelore",
      companylogo: "/xcelore.png",
      date: "May 2024 – Present",
      desc: "Leading frontend development for production SaaS platform with Next.js 15, TypeScript, Zustand, and Tailwind CSS.",
      descBullets: [
        "Owned frontend architecture, improving sprint velocity by ~20% through effective planning and best-practice engineering",
        "Built secure SaaS modules with Next.js and NestJS, implementing cookie-based authentication and AWS Secrets Manager",
        "Designed scalable RESTful APIs and Webhooks with NestJS and MongoDB for WhatsApp integrations and real-time tracking",
        "Collaborated with backend teams using Spring Boot and Apache Kafka to enhance application functionality",
        "Developed Exei AI Agent Platform - Built complete user onboarding system, WebSocket-based live chat with human takeover, and WhatsApp integration via Meta APIs for multichannel customer service automation",
        "Engineered Pythag M&A Portal - Created real-time analytics dashboard with React Highcharts and WebSocket connections for monitoring bioprocesses in cultivated meat production",
        "Built Pythag Tolstoy AI Platform - Solo frontend developer architecting LLM-powered chatbot interface with Shadcn/ui and Zod validation for scientific data retrieval",
        "Delivered Unicoil Chatbot - Full-stack development of custom AI chatbot with iframe embedding, CloudFront CDN distribution, and UUID-based session tracking in MongoDB",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "FULL-STACK SAAS PLATFORMS AND WEB APPLICATIONS I'VE BUILT",
  projects: [
    {
      image: "/docsora.png",
      projectName: "Docsora",
      projectDesc:
        "Document Management SaaS Platform with storage, AI-powered grammar checking, digital signatures, and PDF editing tools built with Next.js 15, TypeScript, and Docker.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://docsora.com/",
        },
      ],
    },
    {
      image: "/anonwork.png",
      projectName: "AnonWork",
      projectDesc:
        "Anonymous Professional Community Platform with JWT authentication, real-time interactions, company-verified channels, and personalized feed algorithm using Next.js 14 and PostgreSQL.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.anonwork.tech/",
        },
        {
          name: "GitHub",
          url: "https://github.com/ramanbajpai7/anonwork",
        },
      ],
    },
    {
      image: "/pythagm&a.png",
      projectName: "Pythag M&A Portal & Admin Panel",
      projectDesc:
        "A Digital Biology Platform for Cultivated Meat Production. Engineered dynamic interfaces for monitoring cell cultures, formulations, and medium processes. Real-time analytics dashboard with live gauges, charts using React Highcharts and WebSocket connections. Tech: Next.js, Java Spring Boot, OPC Server, React Highcharts, WebSockets.",
      footerLink: [
        {
          name: "View Details",
          url: "#",
        },
      ],
    },
    {
      image: "/exei.png",
      projectName: "Exei – No-Code AI Agent SaaS Platform",
      projectDesc:
        "Enterprise platform for building multichannel customer service AI agents. Built user onboarding system, iframe/SDK integration, WebSocket-based live chat with human takeover, WhatsApp integration via Meta APIs, and AWS infrastructure. Tech: Next.js, NestJS, MongoDB, Python (AI/ML), Vector DB, WebSockets, AWS.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://exei.ai/",
        },
      ],
    },
    {
      image: "/pythagai.png",
      projectName: "Pythag Tolstoy AI Platform",
      projectDesc:
        "Production-ready LLM-powered chatbot for scientific data retrieval. Independently architected and built the entire user interface for both 'chat' and 'build' modes. Developed with Shadcn/ui components and Zod validation. Tech: Next.js, Java Spring Boot, Shadcn/ui, Zod.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pythag.ai/",
        },
      ],
    },
    {
      image: "/unicoil.png",
      projectName: "Unicoil Chatbot",
      projectDesc:
        "Custom AI chatbot trained on Unicoil's website data for instant support. Built responsive frontend chat interface and backend API, iframe embedding with CloudFront CDN, MongoDB session tracking with UUID-based continuity. Tech: Next.js, NestJS, MongoDB, LLM Services, AWS (S3, Secrets Manager, CloudFront).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.unicoil.com.sa/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Hackathons, Certifications, and Competitive Programming Achievements!",

  achievementsCards: [
    {
      title: "Hack The November - 2nd Place",
      subtitle:
        "Secured 2nd place in 'Hack The November' Hackathon at ABES Engineering College, competing with 80+ teams.",
      image: "/hackathon-trophy-award-gold.jpg",
      imageAlt: "Hackathon Logo",
      footerLink: [],
    },
    {
      title: "Amazon ML Summer School 2023",
      subtitle:
        "Selected for Amazon's prestigious Machine Learning Summer School 2023.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      imageAlt: "Amazon Logo",
      footerLink: [],
    },
    {
      title: "Competitive Programming",
      subtitle:
        "Solved 400+ problems on LeetCode and GeeksForGeeks. Achieved 2-star rating (1447+) on CodeChef.",
      image: "/programming.jpg",
      imageAlt: "Coding Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/",
        },
        {
          name: "GFG Profile",
          url: "https://auth.geeksforgeeks.org/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to share my knowledge and experiences through writing.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCES 💡"),
  talks: [],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY AND DEVELOPMENT",
  podcast: [],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9695283797",
  email_address: "ramanbajpai9795@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
