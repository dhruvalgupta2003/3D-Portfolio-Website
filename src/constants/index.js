import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  java,
  firebase,
  tensorflow,
  pytorch,
  meta,
  starbucks,
  altworld,
  connectbees,
  tesla,
  shopify,
  iit,
  sih,
  homians,
  carrent,
  jobit,
  tripguide,
  threejs,
  hackathon,
  netflix,
  scholarly
} from "../assets";

export const introAnimatedText = [
  "Developer",
  "Programmer",
  "Tech Enthusiast",
  "Gamer"
];
export const shortDescription = "Full Stack Developer and ML Engineer";
export const myName = "Dhruval Gupta";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  
 
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Hominas",
    icon: homians,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2022",
    points: [
      "Developing landing pages from scratch for food delivery startups using the knowledge of HTML, CSS, and JavaScript.",
      "Collaborating with cross-functional teams including designers,and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Incorporating animations into the design, creating an engaging user experience.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "Smart India Hackathon 2022",
    icon: sih,
    iconBg: "#fff",
    date: "Mar 2022 - Aug 2022",
    points: [
      "Developed a scholarship portal for both Indian and International scholarships, which involves an understanding of the scholarship landscape and React.js framework along with other technologies.",
      "Build a real-time notification system that can alert users to new scholarship opportunities, deadlines, and other relevant information.",
      "Integrated a recommendation system that can suggest relevant scholarships to users based on their profile and interests using machine learning.",
      "Won First Prize & 1 Lakh Rupees (Building it for the Government now..) ",
    ],
  },
  {
    title: "Founder",
    company_name: "ConnectBees",
    icon: connectbees,
    iconBg: "#111",
    date: "Feb 2022 - Present",
    points: [
      "Building an AI-based networking platform for Gen Z, leveraging ML and NLP technologies to help users connect with like-minded individuals, form communities, and build meaningful relationships.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using React.js and implementing gamified learning.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "City Future Lab, IIT Kharagpur",
    icon: iit,
    iconBg: "#111111",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using the knowledge of advanced js and Flask framework.",
      "Implementing a data management solution that can handle large volumes of data efficiently & ensuring a responsive design and cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, team leader , and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dhruval proved me wrong.",
    name: "Devesh Mani Tripathi",
    designation: "CEO",
    company: "ConnectBees",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dhruval does.",
    name: "Alok Maurya",
    designation: "CTO",
    company: "AltWorld",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "After Dhruval optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shikha Gupta",
    designation: "Senior Product Manager",
    company: "City Future Labs, IIT Kharagpur",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const projects = [
  {
    name: "Scholarly",
    description:
      "Web-based platform that allows users to search for national and international scholarships from various providers and recommend them scholarships based on their interests, providing a convenient and efficient solution for education needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: scholarly,
    source_code_link: "https://github.com/dhruvalgupta2003/SIH-2022-TEAM-BLASTERS-DR713",
  },
  {
    name: "Learning Management System",
    description:
      "The LMS system project involves creating a comprehensive e-learning platform with user-friendly interface, robust course management, and interactive learning features, including integration with external educational resources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/dhruvalgupta2003/Learning-Management-System",
  },
  {
    name: "College Hackathon website",
    description:
      "Created a website to host a hackathon event for college students, with features such as registration, event schedules, submission forms, and judging criteria. It will involve front-end and back-end development, and integration with third-party APIs.",
    tags: [
      {
        name: "Jquery",
        color: "blue-text-gradient",
      },
      {
        name: "gulp",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hackathon,
    source_code_link: "https://github.com/dhruvalgupta2003/Hackathon-website",
  },
];

export { services, technologies, experiences, testimonials, projects };