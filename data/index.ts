export const navItems = [
    { name: "Home", link: "#" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "About Me",
      description: "As a Tools Development Intern at NVIDIA, I worked with the Quality Engineering team to automate test cases for self driving cars. I also worked as SWE Inten at persistent wherein I received comprehensive training on various technologies like Java, DBMS, DSA, Git, SQL, SDLC, Angular, NodeJS, HTML, CSS, Javascript and Typescript.",
      description2:"Additionally, I served as the GDSC Lead at Google Developer Student Clubs, organizing workshops and events to teach Google technologies. I have a strong interest in Google Cloud and web development.",
      description3: "I have experience in Web Development, creating responsive websites with HTML, CSS, JavaScript, Angular, React and NodeJS. Moreover, As a UI/UX designer I'm proficient in Figma, Adobe XD, and Canva. I am passionate about coding and skilled in C++, Java, Python, Data Structures and Algorithms, AI, and Design and Analysis of Algorithms.",
      description4: "I have excelled in events like Smart India Hackathon and NEC IIT-B and published a book on digital marketing on Kindle. My goal is to leverage my skills to create innovative solutions and contribute to technological advancements. I'm always eager to learn and explore new technologies.",
      className: "lg:col-span-2 md:col-span-2 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start mt-5",
      img: "/snehal.png",
      spareImg: "/bg.png",
    },
    {
      id: 3,
      title: "I'm highly flexible in working across different time zones.",
      description: "",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1 lg:text-xl",
      imgClassName: "",
      titleClassName: "justify-start text-justify",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1",
      imgClassName: "w-full h-full",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
  ];

  export const projects = [
    {
      id: 1,
      title: "Resume Analysis using NLP - AI/ML",
      des: " Used different NLP concepts to create a resume parser and a job suggester.",
      img: "/Project1.png",
      iconLists: ["/Python.png", "/flaskicon.webp", "/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://github.com/Snehal-13/Resume-Analyser",
    },
    {
      id: 2,
      title: "Covid-19 Data Analysis - AI/ML",
      des: "Analysed the data of past Covid-19 cases and presented them in graphical format using python.",
      img: "/Project4.png",
      iconLists: ["/Python.png", "/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://github.com/Snehal-13/Covid-Data-Analysis",
    },
    {
      id: 3,
      title: "Article Summarizer",
      des: "Leveraging AI technology to efficiently condense lengthy articles into concise summaries, enhancing readability.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/html-1.svg", "/css-3.svg"],
      link: "https://github.com/Snehal-13/Article-summarizer",
    },
    {
      id: 4,
      title: "Netflix Clone",
      des: "Recreated the Netflix website, including user authentication, movie recommendations, and a dynamic content library",
      img: "/project5.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://netflix-clone-b00f1.web.app",
    },
    {
      id: 5,
      title: "Restaurant Web design",
      des: "Created a visually appealing and responsive website for a restaurant, showcasing menus, services, and reservation options, with a focus on enhancing user experience and online presence.",
      img: "/Projects7.png",
      iconLists: ["/html-1.svg", "/css-3.svg", "logo-javascript.svg"],
      link: "https://restaurantui-b3232.web.app/",
    },
    {
      id: 6,
      title: "Amazon Clone",
      des: "Built a comprehensive e-commerce platform mimicking Amazon, featuring a product catalog, shopping cart, user authentication, and a secure payment gateway, delivering a seamless online shopping experience.",
      img: "/project6.png",
      iconLists: ["/html-1.svg", "/css-3.svg", "logo-javascript.svg", "/tail.svg", "/flaskicon.webp"],
      link: "https://clone-2c571.web.app/",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Tools Development Intern",
      companyTitle: "NVIDIA Graphics: Jan 2024 - July 2024",
      desc: "Project - DRIVE OS SQA Automation: Automated test cases of self-driving cars in an internal framework using Python",
      desc2:" Project - NvQA Bot: Gained Hands on experience on LLM and generative AI",
      className: "md:col-span-2",
      thumbnail: "/nvidia.png",
    },
    {
      id: 2,
      title: "SWE Intern",
      companyTitle: "Persistent Systems: Jan 2024 - June 2024",
      desc: "Received comprehensive training in Java, DBMS, DSA, Git, SQL, SDLC, Angular, NodeJS, HTML, CSS, Javascript and Typescript.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/persi.png",
    },
    {
      id: 5,
      title: "Google Developer Lead",
      companyTitle: "Google Developer Group: Jul 2023 - Jul 2024",
      desc: "I was one amongst the 500 Leads selected by Google Developers across 29 states in India to represent my college at a global level.",
      desc2:"Received support from GOOGLE to help my peers learn and grow to foster a coding environment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/google.png",
    },
    {
      id: 3,
      title: "Frontend Developer",
      companyTitle: "Ksham Innovation Pvt Ltd: Apr 2023- Sep 2023",
      desc: "Developed the front end using HTML, CSS and React",
      desc2:"Boosted website loading speed by 30% through code optimization.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/KI.jpeg",
    },
    {
      id: 4,
      title: "Frontend Developer",
      companyTitle: " Its12Giftworld Pvt Ltd: Dec 2022- Mar 2023",
      desc: "Enhanced the ”home page” of the company’s website using HTML, CSS and React",
      desc2:"Increased user engagement by 25% with improved SEO",
      className: "md:col-span-2",
      thumbnail: "/its12 logo.png",
    },
  ];

  export const Education = [
    {
      id: 1,
      title: "Government College of Engineering, Amravati",
      desc: "Bachelors of Technology in Computer Science and Engineering",
      timeLine: "Aug 2020 - Jul 2024",
      result: " CGPA 8.93/10",
      className: "md:col-span-2",
      thumbnail: "/graduation.png",
    },
    {
      id: 2,
      title: "Kendriya Vidyalaya Yavatmal, Maharashtra",
      desc: "Class 12th (PCMB) - CBSE",
      timeLine: "May 2017 - May 2019",
      result: "82.8%",
      className: "md:col-span-2",
      thumbnail: "/kv.png",
    },
    {
      id: 3,
      title: "Kendriya Vidyalaya Jalandhar, Punjab",
      desc: "Class 10th - CBSE",
      timeLine: "May 2016 - May 2017",
      result: "CGPA 10/10",
      className: "md:col-span-2",
      thumbnail: "/kv.png",
    },
  ];
  

  export const socialMedia = [
    {
      id: 1,
      img: "/linkedin.png",
      link: "https://www.linkedin.com/in/snehal-bharsakle/"
    },
    {
      id: 2,
      img: "/github.png",
      link: "https://github.com/Snehal-13"
    },
    {
      id: 3,
      img: "/wp.png",
      link: "https://wa.me/8010029089"
    },
    {
      id: 4,
      img: "/insta.png",
      link: "https://www.instagram.com/_snehal_bharsakle/"
    },
  ];

  export interface Skill {
    imgSrc: string;
    imgAlt: string;
    name: string;
    subtitle: string;
  }
  
  export const webDevelopmentSkills: Skill[] = [
    {
      imgSrc: "/html-1.svg",
      imgAlt: "HTML",
      name: "HTML",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/css-3.svg",
      imgAlt: "CSS",
      name: "CSS",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/react-2.svg",
      imgAlt: "React",
      name: "React",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Tailwind_CSS_Logo.svg.png",
      imgAlt: "Tailwind CSS",
      name: "Tailwind CSS",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Angular.png",
      imgAlt: "Angular img",
      name: "Angular",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Wordpress.png",
      imgAlt: "Wordpress",
      name: "Wordpress",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/django icon.png",
      imgAlt: "Django",
      name: "Django",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/flaskicon.webp",
      imgAlt: "Flask",
      name: "Flask",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/nodejsicon.png",
      imgAlt: "NodeJs",
      name: "NodeJs",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/mongoicon.png",
      imgAlt: "MongoDB",
      name: "MongoDB",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/expressjs.png",
      imgAlt: "Express JS",
      name: "Express JS",
      subtitle: "Intermediate",
    },
  ];
  
  export const langAndTools: Skill[] = [
    {
      imgSrc: "/Python.png",
      imgAlt: "Python",
      name: "Python",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/C++.png",
      imgAlt: "C++",
      name: "C++",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/Java.png",
      imgAlt: "Java",
      name: "Java",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/logo-javascript.svg",
      imgAlt: "Javascript",
      name: "Javascript",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Typescript.png",
      imgAlt: "Typescript",
      name: "Typescript",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Linux.png",
      imgAlt: "Linux",
      name: "Linux",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/Jira.png",
      imgAlt: "Jira",
      name: "Jira",
      subtitle: "Intermediate",
    },
    {
      imgSrc: "/git-icon.svg",
      imgAlt: "Git",
      name: "Git",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/figma.png",
      imgAlt: "Figma",
      name: "Figma",
      subtitle: "Advanced",
    },
    {
      imgSrc: "/canva.png",
      imgAlt: "Canva",
      name: "Canva",
      subtitle: "Advanced",
    },
  ];
  