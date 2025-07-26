/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yash",
  title: "Hi all, I'm Yash",
  subTitle: emoji(
    "Software Developer 🚀 | Passionate about crafting scalable, clean, and efficient web applications using MERN stack & Java "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Yashd07",
  linkedin: "https://www.linkedin.com/in/yashd0712/",
  gmail: "desaiyash712@gmail.com",
  instagram: "https://www.instagram.com/desaiyash712",
  medium: "https://medium.com/@yashd1272",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Full Stack Developer & Automation Enthusiast",
  skills: [
    "⚡ Expert in MERN Stack (MongoDB, Express, React, Node.js)",
    "⚡ Proficient with Spring Boot for robust backend development",
    "⚡ Skilled in Automation Testing with Selenium & Robot Framework",
    "⚡ Experienced in CI/CD pipelines using Jenkins",
    "⚡ Knowledgeable in DevOps practices and tools",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "robot framework",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vivekanand Education Society's Institute Of Technology (VESIT)",
      logo: require("./assets/images/VesitLogo.jpg"),
      subHeader: "Master of Computer Application",
      duration: "August 2023 - June 2025",
      desc: "Completed advanced studies in computer applications with a focus on Full stack development, DevOps and Software testing.",
      descBullets: [
        "Participated in technical hackathons, showcasing problem-solving and coding skills.",
        "Active Placement Coordinator, facilitating internship and job opportunities for peers.",
        "Contributed to scalable web applications using MERN stack and Spring Boot",
      ],

    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/BNBLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - May 2023",
      desc: "Completed coursework in Software Engineering.",
      descBullets: [
        "Developed multiple projects using Java, Python, and MERN stack during coursework.",
        "Collaborated on team projects emphasizing Agile methodologies and version control."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Engineer",
      company: "BNP Paribas",
      companylogo: require("./assets/images/BNPLogo.jpg"),
      date: "Aug 2025 – Present",
      desc: "Contributing to software development lifecycle and automation.",
      descBullets: [
        "Collaborated with cross-functional teams.",
        "Implemented test automation and deployment pipelines.",
        "Managed CI/CD using Jenkins and Git."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "BNP Paribas",
      companylogo: require("./assets/images/BNPLogo.jpg"),
      date: "Feb 2025 – Aug 2025",
      desc: "Worked on automation testing and application deployment.",
      descBullets: [
        "Developed Selenium and Robot Framework test scripts.",
        "Supported CI/CD pipeline setup.",
        "Resolved deployment issues with dev teams."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "CipherByte Technologies",
      companylogo: require("./assets/images/CipherLogo.jpg"),
      date: "May 2023 – Jan 2025",
      desc: "Built EventPlanner360, a MERN stack event management app.",
      descBullets: [
        "Created responsive React interfaces.",
        "Developed backend APIs with Node.js and Express.",
        "Handled MongoDB data storage.",
        "Improved UI/UX with design collaboration."
      ]
    }
  ]
};

/* Your  Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Innoversite Hackathon",
      subtitle:
        "Selected for internship at BNP Paribas through participation in the Innoversite Hackathon.",
      image: require("./assets/images/Hackathon1.jpg"),
      imageAlt: "Innoversite Hackathon 2025",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15gE-Y8MgO7sFsKPZ1Y1O9iOqYM0egFiM/view?usp=sharing"
        },

      ]
    },
    {
      title: "Codement'24 Hackathon",
      subtitle: "Ranked in the top 20 out of 97 teams in CodeMent’24, a national-level coding hackathon",
      image: require("./assets/images/Hackathon2.jpg"),
      imageAlt: "Codement'24 Hackathon",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1na8WomdRQdlX4u8yCnFAELxY42XWIHUL/view?usp=sharing"
        }
      ]
    },

    {
      title: "Responsive Web Design",
      subtitle: "Completed Certifcation from Free Code Camp",
      image: require("./assets/images/freecodecamp.jpg"),
      imageAlt: "freecodecamp Logo",
      footerLink: [
        { name: "Certification", url: "https://freecodecamp.org/certification/Yash1272/responsive-web-design" },

      ]
    },

    {
      title: "HackerRank - React",
      subtitle: "Completed Certifcation from HackerRank - React",
      image: require("./assets/images/Hackerrank.jpg"),
      imageAlt: "freecodecamp Logo",
      footerLink: [
        { name: "Certification", 
          url: "https://www.hackerrank.com/certificates/b83318437ffd" },

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8691913190",
  email_address: "yashd1272@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
