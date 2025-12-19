
const mobile = require('../assets/images/mobile.png');
const backend = require('../assets/images/backend.png');
const creator = require('../assets/images/creator.png');
const web = require('../assets/images/web.png');
const javascript = require('../assets/images/tech/javascript.png');
const typescript = require('../assets/images/tech/typescript.png');
const html = require('../assets/images/tech/html.png');
const css = require('../assets/images/tech/css.png');
const reactjs = require('../assets/images/tech/reactjs.png');
const redux = require('../assets/images/tech/redux.png');
const tailwind = require('../assets/images/tech/tailwind.png');
const nodejs = require('../assets/images/tech/nodejs.png');
const mongodb = require('../assets/images/tech/mongodb.png');
const git = require('../assets/images/tech/git.png');
const figma = require('../assets/images/tech/figma.png');
const docker = require('../assets/images/tech/docker.png');
const carrent = require('../assets/images/carrent.png');
const jobit = require('../assets/images/jobit.png');
const tripguide = require('../assets/images/tripguide.png');
const GBM = require('../assets/images/colleagues/GBM.jpg');
const sagar = require('../assets/images/colleagues/sagar.jpg');
const umesh = require('../assets/images/colleagues/umesh.png');
const skillmate = require('../assets/images/projects/skillmate.png');
const aromaTattva = require('../assets/images/projects/aromaTattva.png');
const ebookDownload = require('../assets/images/projects/ebookDownload.png');
const jmechEnterprise = require('../assets/images/projects/jmechEnterprise.png');
const wellcareHospital = require('../assets/images/projects/WellcareHospital.png');
const drSachinSonawane_wellcare = require('../assets/images/projects/DrSachinSonawane_Wellcare.png');
const myGarageWordpress = require('../assets/images/projects/MyGarageWordpress.png');
const skillmateWordpress = require('../assets/images/projects/SkillmateWordpress.png');
const suvidhaHospitals = require('../assets/images/projects/SuvidhaHospitals.png');
const wordpressLogo = require('../assets/images/tech/wordpress.png');
const github = require('../assets/images/github.png');
const cicd = require('../assets/images/tech/cicd.png');
const aws = require('../assets/images/tech/aws.png');
const dipComputer = require('../assets/images/projects/dipComputer.png');

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
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Java",
    icon: creator,
  },
  {
    name: "Spring Boot",
    icon: backend,
  },
  {
    name: "REST APIs",
    icon: web,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "CI/CD Pipelines",
    icon: cicd,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Wordpress",
    icon: wordpressLogo,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer (React + Java)",
    company_name: "GBM Softtech",
    icon: GBM,
    iconBg: "#E6DEDD",
    date: "Internship -> Continued Working",
    points: [
      "Developed multiple full-stack applications from initial concept to deployment.",
      "Built robust backend systems and RESTful APIs using Spring Boot and Java.",
      "Created responsive and interactive user interfaces with React.js.",
      "Managed end-to-end project lifecycles, including deployment, optimization, and feature updates.",
      "Collaborated with product, design, and QA teams to ensure the delivery of stable and high-quality software.",
      "Handled CI/CD pipelines and Git workflows for seamless integration and delivery.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rahul proved me wrong.",
    name: "Umesh Mragjale",
    designation: "CEO",
    company: "GBM SoftTech",
    image: umesh,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rahul does.",
    name: "Sagar Gaikwad",
    designation: "Manager",
    company: "GBM SoftTech",
    image: sagar,
  },
  {
    testimonial:
      "After Rahul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Fatru Shaikh",
    designation: "Senior Project Manager",
    company: "GBM SoftTech",
    image: GBM,
  },
];

const projects = [
  {
    name: "E-Book Download Portal",
    description:
      "A mobile-first web application that allows users to download digital books after submitting their details, designed for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ebookDownload,
    link: 'https://github.com/Umesh-gbmsofttech/EBooks.git',
    linkType: 'github',
  },
  {
    name: "Car Rent App",
    description:
      "A web-based platform, currently under development, to search, book, and manage car rentals from different providers, aiming to deliver a comprehensive rental solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "Oracle-Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    link: null,
    linkType: null,
  },
  {
    name: "Aroma Tattva",
    description:
      "An e-commerce website for herbal and beauty products featuring product search, cart management, and a fully responsive UI for a smooth shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aromaTattva,
    link: 'https://github.com/Umesh-gbmsofttech/Aroma-tattva.git',
    linkType: 'github',
  },
  {
    name: "Skillmate (React + Spring Boot Full-Stack)",
    description:
      "An online learning platform with live classes and a complete admin panel. I built the full front-end using React.js and the backend using Spring Boot, designed REST APIs, and implemented secure authentication, course purchasing, and real-time scheduling. Managed deployment and updates using Git and CI/CD.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "ci/cd",
        color: "blue-text-gradient",
      },
    ],
    image: skillmate,
    link: null,
    linkType: null,
  },
  {
    name: "DipComputer",
    description:
      "DipComputer is a full-stack e-commerce platform for buying refurbished laptops and desktops. Built using React (frontend) and Spring Boot (backend), hosted on Oracle Cloud with CI/CD integration. Includes a comprehensive admin panel for product management, order tracking, notification scheduling, and integrated Facebook-CRM view for customer relations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "oracle-cloud",
        color: "pink-text-gradient",
      },
      {
        name: "ci/cd",
        color: "blue-text-gradient",
      },
    ],
    image: dipComputer,
    link: "https://www.dipcomputer.com/",
    linkType: "website",
  },
  {
    name: "JMech Wordpress",
    description:
      "A global mechanical engineering EPC solutions provider website highlighting piping, insulation, structural frameworks, tanks, and industrial equipment.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: jmechEnterprise,
    link: "https://jmechenterprise.ct.ws",
    linkType: "website",
  },
  {
    name: "Well Care Hospital WordPress",
    description:
      "A single-page multi-specialist hospital website with clear calls-to-action and appointment booking functionality to streamline patient engagement.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: wellcareHospital,
    link: "https://wellcarehospital.ct.ws",
    linkType: "website",
  },
  {
    name: "Dr. Sachin Sonawane Portfolio WordPress",
    description:
      "A professional portfolio website for Dr. Sachin Sonawane, designed with calls-to-action and appointment booking to facilitate patient interaction.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: drSachinSonawane_wellcare,
    link: "httpsdrsachinsonawane.ct.ws",
    linkType: "website",
  },
  {
    name: "MyGarage WordPress",
    description:
      "A website built for the online presence and marketing of an under-development mobile app, mirroring the core features of the application to attract early users.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: myGarageWordpress,
    link: "https://mygarage.page.gd/",
    linkType: "website",
  },
  {
    name: "Skillmate WordPress",
    description:
      "A static website built for brand presence and lead generation. The main React + Java application, previously on AWS, is temporarily down.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: skillmateWordpress,
    link: "https://skillmate.org",
    linkType: "website",
  },
  {
    name: "Suvidha Hospital WordPress",
    description:
      "A multi-specialist hospital website with multiple locations across Pune, built for lead generation and establishing online trust with patients.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: suvidhaHospitals,
    link: "http://suvidhahospitals.in",
    linkType: "website",
  },
];

export { services, technologies, experiences, testimonials, projects, github, cicd, aws, dipComputer, wordpressLogo, suvidhaHospitals, skillmateWordpress, myGarageWordpress, drSachinSonawane_wellcare, wellcareHospital, jmechEnterprise, ebookDownload, aromaTattva, skillmate, umesh, sagar, GBM, tripguide, jobit, carrent, docker, figma, git, mongodb, nodejs, tailwind, redux, reactjs, css, html, typescript, javascript, web, creator, backend, mobile };
