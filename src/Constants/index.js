import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    TJCP,
    GOL,
    threejs,
    Kotlin,
    FullSail,
    ComingSoon

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Works",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Kotlin",
      icon: Kotlin,
    },
  ];
  
  const experiences = [
    {
      title: "Full Sail University",
      company_name: "Fullsail",
      icon: FullSail,
      iconBg: "#383E56",
      date: "August 2020 - March 2023",
      points: [
        "Studying Computer Science at Full Sail University was a transformative experience, characterized by state-of-the-art facilities and a hands-on curriculum. The university emphasized practical knowledge through real-world projects and bolstered this with industry connections, offering guest lectures and career opportunities. The combination of an enthusiastic student community, top-tier resources, and robust career services equipped us for a prosperous future in the tech sector.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Coming Soon.",
      name: "-Luis Bazaldua",
      designation: "Web Dev",
      company: "Abizzal Tech",
      image: ComingSoon,
    },
  ];
  
  const projects = [
    {
      name: "TJCP",
      description:
        "TJCP is an innovative companion app designed to enhance the gameplay experience of Escape from Tarkov. Its primary goal is to improve communication and coordination among teammates, while also offering valuable resources for learning maps and significant locations within the game. Drawing inspiration from the Joint Battle Command-Platform (JBC-P) system used by real-life military units, TJCP provides a user-friendly interface for multiple users.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "FireBase",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "violet-text-gradient",
        },
      ],
      image: TJCP,
      source_code_link: "https://github.com/Luis29178/TJCP/tree/dev/my-react-app",
    },
    {
      name: "OOP GameOfLife",
      description:
        "The Game of Life project was a fun project that challenged my object-oriented programming skills. It not only provided an enjoyable experience but also incorporated some exciting additional features such as a drawing board and a convenient copy-paste functionality.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Windows Forms",
          color: "green-text-gradient",
        },
      ],
      image: GOL,
      source_code_link: "https://github.com/Luis29178/Game-of-Life",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  