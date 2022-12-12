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
  username: "Rosa",
  title: "Hi all, I'm Rosa",
  subTitle: emoji(
    "Computer science graduate with a passion for developing scalable web applications and working across the full stack. 🚀 I would jump at any opportunity to continue growing my skillset set while contributing to the positive outcome of making people : richer, smarter, and happier."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15IDfW33KS3NjFWrthjwK-atfbN4xeeVo/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RosaElysabeth",
  linkedin: "https://www.linkedin.com/in/rosa7/",
  gmail: "ralinirinarosa7@gmail.com",
  gitlab: "https://gitlab.com/Elysabeth",
  facebook: "https://web.facebook.com/rosa.ralinirina.1/",
  instagram: "https://www.instagram.com/rosa.elysabeth/",
  twitter: "https://twitter.com/RRalinirina",
  medium: "https://medium.com/@ralinirinarosa7",
  stackoverflow: "https://stackoverflow.com/users/20722510/rosa-elysabeth-ralinirina",
  kaggle: "https://www.kaggle.com/rosaelysabeth",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services "
    )
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
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
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      schoolName: "Ecole Nationale d'Informatique - University of Fianarantsoa",
      logo: require("./assets/images/logoENI.png"),
      subHeader: "Professional Master of Computer Science",
      duration: "February 2022 - Present ",
      desc: "Software and Database Engineering",
      descBullets: [
        "President of ENI students association",
        "Organized many events for ENI students"
      ]
    },
    {
      schoolName: "Ecole Nationale d'Informatique - University of Fianarantsoa",
      logo: require("./assets/images/logoENI.png"),
      subHeader: "Professional Bachelor of Computer Science",
      duration: "November 2017 - September 2021",
      desc: "Software and Database Engineering" ,
      descBullets: [
        "Ranked top 10% in the program. Took courses about Software Engineering, Operating Systems, ...",
        "Graduated with honors",
      ]
    },
    {
      schoolName: "Lycée Privé Fo Masin'i Jesoa - Talatamaty Fianarantsoa",
      logo: require("./assets/images/logofmj.png"),
      subHeader: "High School",
      duration: "October 2014 - July 2017",
      desc: "Baccalauréat Série C - 2017 session" ,
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "MINAE",
      companylogo: require("./assets/images/MINAE.jpg"),
      date: "August 2022 – Present",
      desc: "Digital advice platform of the Ministry of Agriculture and Livestock. ",
      descBullets: [
        "Member of the Globy team ",
        "Contrat",
        "Skills : Express.js · Front Office · Ant Design · Yarn · Jira · sequelize · Swagger API · React.js · PostgreSQL"
      ]
    },
    {
      role: "Student Trainee",
      company: "ENI",
      companylogo: require("./assets/images/logoENI.png"),
      date: "March 2021 – June 2021",
      desc: "Internship in computer science within the department of mention of the ENI",
      descBullets: [
        "Theme: Design and production of a web application for the management of student internships",
        "Skills : Node.js · React.js · Unified Modeling Language (UML) · PostgreSQL · Sequelize.js"
      ]
    },
    {
      role: "Student Trainee",
      company: "Mahefa & Company",
      companylogo: require("./assets/images/mahefa.png"),
      date: "November 2019 – January 2020",
      desc: "IT internship",
      descBullets: [
        "Theme: Design and production of a web application for the management of the kaly of an e-catering system in Symfony with the MySQL DBMS",
        "Skills : Symfony Framework · MySQL"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/afaas.jfif"),
      projectName: "AFAAS",
      projectDesc: "Database management of extension workers and their activities",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://r2e.afaas-africa.org/account/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MINAE.jpg"),
      projectName: "MINAE",
      projectDesc: "Digital advice platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://minae-globy-tnrunlimited-part4-tnrunlimited.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Africa-wide Hackathon Champion",
      subtitle:
        "Member of the TNRUnlimited team, African champion during the continental phase of the AFAAS Hackathon 2021",
      image: require("./assets/images/TNR.png"),
      imageAlt: "TNRUnlimited Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/10U-AKtKIUUS_pRpT0hUEzXOVxG6rRCsv"
        },
        {
          name: "Website",
          url: "https://innovaa.netlify.app/"
        },
        {
          name: "INNOVAA Slides",
          url: "https://drive.google.com/file/d/1tX3irO6lOhfHPSTJZJm5UnVWAjKNrJ3F/view?usp=sharing"
        }
      ]
    },
    {
      title: "DEVHUNT competition",
      subtitle:
        "Organized IT Events for ENI students",
      image: require("./assets/images/AEENI.png"),
      imageAlt: "AEENI Logo",
      footerLink: [
        {
          name: "Details",
          url: "https://web.facebook.com/AssociationEtudiantENIInformatiqueFianarantsoa/photos/pb.100083085014708.-2207520000./146528521332427/?type=3"
        }
      ]
    },

    {
      title: "Vice National Hackathon Champion",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/afaas.jfif"),
      imageAlt: "AFAAS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/10U-AKtKIUUS_pRpT0hUEzXOVxG6rRCsv"
        },
        {
          name: "Project",
          url: "https://innovaa.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to read and to learn new things.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE😅"
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "034 90 784 45 - 032 87 538 44",
  email_address: "ralinirinarosa7@gmail.com"
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
