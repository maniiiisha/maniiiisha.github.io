import {
  mobile,
  backend,
  creator,
  web,
  github,
  mail,
  linkedin,
  discord,
  cpp,
  mysql,
  python,
  tensorflow,
  aws,
  mongodb,
  git,
  ineuron,
  etg,
  sparks,
  creditcard,
  forensic,
  food,
  prescription,
  journal,
  gis,
} from "../assets";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const contacts = [
  {
    title: "Email",
    icon: mail,
    paragraph: "manisha.exe@gmail.com",
    url: "mailto:manisha.exe@gmail.com",
  },
  {
    title: "Github",
    icon: github,
    paragraph: "@maniiiisha",
    url: "https://github.com/maniiiisha"
  },
  {
    title: "Linkedin",
    icon: linkedin,
    paragraph: "@maniiiisha",
    url: "https://www.linkedin.com/in/maniiiisha/",
  },
  {
    title: "Discord",
    icon: discord,
    paragraph: "@nonotamuggle",
    url: "https://discordapp.com/users/nonotamuggle",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: " Data Science Intern",
    company_name: "iNeuron.ai",
    icon: ineuron,
    iconBg: "#383E56",
    date: "September 2022 - April 2024",
    points: [
      "Executed a diverse range of innovative projects.",
      "Developed an Image Scrapper project.",
      "Created a Diamond Price Prediction project.",
      "Implemented a Food Delivery Time Prediction project.",
    ],
  },
  {
    title: " Python for AI/ML Intern",
    company_name: "Elite Techno Groups",
    icon: etg,
    iconBg: "#E6DEDD",
    date: " August 2021 - September 2021",
    points: [
      "Developed an Inventory Management System.",
      "Created a model for Breast Cancer Detection.",
      "Conducted comprehensive data analysis on Summer Olympics.",
    ],
  },
  {
    title: "Data Science and Business Analytics Intern",
    company_name: "The Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      "Executed diverse predictive tasks on varied datasets using libraries such as NumPy, OpenCV, and Matplotlib.",
      "Applied NumPy for efficient numerical operations, enhancing data manipulation during predictive analysis.",
      "Leveraged OpenCV to perform specialized tasks like image processing within predictive modeling workflows.",
      "Utilized Matplotlib for effective data visualization, facilitating interpretation and communication of predictive insights.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A platform for law enforcement to create composite sketches of a suspect's face and match it with the police database.",
    name: "Forensic Face Sketch Recognition",
    company: "IJARSCT",
    image: journal,
    source_code_link: "https://ijarsct.co.in/Paper4793.pdf",
  },
  {
    testimonial:
      "A standalone platform that allows users to create face sketches using the drag and drop feature without the aid of forensics.",
    name: "Forensic Face Sketch Construction",
    company: "GIS SCIENCE JOURNAL",
    image: gis,
    source_code_link: "https://drive.google.com/file/d/1mwr1wSbhILizttDagL7GUF1CNjxMHy9w/view?pli=1",
  },
];

const projects = [
  {
    name: "Credit Card Default Prediction",
    description:
      "A reliable machine learning model that could forecast credit card defaults based on historical data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: creditcard,
    source_code_link: "https://github.com/maniiiisha/Credit-Card-Default-Prediction",
  },
  {
    name: "Forensic Face Sketch Recognition",
    description:
      "An application to create composite sketches of a suspect's face and match it with the police database.",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: forensic,
    source_code_link: "https://github.com/maniiiisha/Forensic-Face-Sketch-Construction-and-Recognition",
  },
  {
    name: "Food Delivery Time Prediction",
    description:
      "A predictive model capable of accurately estimating the total delivery time for any new data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "eda",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/maniiiisha/FoodDeliveryTimePrediction",
  },
  /*{
    name: "Prescription Label Reading",
    description:
      "A system that can accurately read and interpret prescription labels.",
    tags: [
      {
        name: "ocr",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: prescription,
    source_code_link: "https://github.com/maniiiisha/PrescriptionLabelReading",
  },*/
];

export { services, contacts, technologies, experiences, testimonials, projects };
