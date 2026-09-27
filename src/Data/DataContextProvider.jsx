import { createContext, useState } from "react";
import Udemycloneimg from "../Assests/ProjectImages/Udemyclone.png";
import EcommerceDraximg from "../Assests/ProjectImages/Ecommerce Drax.png";
import Tripadvisorimg from "../Assests/ProjectImages/Tripadvisor.png";
import Greendenimg from "../Assests/ProjectImages/Greenden.png";
import counterappimg from "../Assests/ProjectImages/CounterApp.png";
import LoginReactNodeimg from "../Assests/ProjectImages/login react-node.png";
import FavouriteStudentsimg from "../Assests/ProjectImages/Favouritestudent.png";
import WeatherAppimg from "../Assests/ProjectImages/WeatherApp.png";
import Actodoimg from "../Assests/ProjectImages/actodo.png";
import ImageGallery from "../Assests/ProjectImages/images-gallery.png";
import Htmlformvalidation from "../Assests/ProjectImages/htmlformvalidation.png";
import Charactercounter from "../Assests/ProjectImages/charactercounter.png"
import portfolio from "../Assests/ProjectImages/Portfolio.png"

const DataContext = createContext();

function DataContextProvider({ children }) {

  const [darkmode,setdarkmode] = useState(false)
  const [Projects, setProjects] = useState([
  {
    title: "Udemy Clone",
    description:
      "A responsive course platform inspired by Udemy, featuring course cards, ratings, pricing, and a sale banner.",
    toolsused: "HTML, CSS",
    category: "Frontend",
    img: Udemycloneimg,
    projectlink: "https://saik2004.github.io/Udemy-clone-/",
    githublink: "https://github.com/saik2004/Udemy-clone-",
  },

  {
    title: "E-Commerce Draxx",
    description:
      "An e-commerce website with promotional sections, side navigation, product galleries, and JavaScript-based interactions.",
    toolsused: "HTML, CSS, JavaScript, Tailwind CSS",
    category: "Frontend",
    img: EcommerceDraximg,
    projectlink: "https://saik2004.github.io/E-commerce-Draxx/",
    githublink: "https://github.com/saik2004/E-commerce-Draxx",
  },

  {
    title: "Personal Website",
    description:
      "A responsive website built from scratch with a clean layout, custom styling, and image-based sections.",
    toolsused: "HTML, CSS",
    category: "Frontend",
    img: Tripadvisorimg,
    projectlink: "https://saik2004.github.io/tripadvisor-clone-/",
    githublink: "https://github.com/saik2004/tripadvisor-clone-",
  },

  {
    title: "Greenden",
    description:
      "A multi-page website built while learning Tailwind CSS, featuring responsive layouts, product sections, contact pages, and JavaScript interactions.",
    toolsused: "HTML, Tailwind CSS, JavaScript",
    category: "Frontend",
    img: Greendenimg,
    projectlink: "https://saik2004.github.io/Greenden-Tailwind-Css/",
    githublink: "https://github.com/saik2004/Greenden-Tailwind-Css",
  },

  {
    title: "Counter & Random Number Generator",
    description:
      "A React practice project built while learning useState, with interactive counter and random number generator components.",
    toolsused: "React, JavaScript, Vite",
    category: "React",
    img: counterappimg,
    projectlink: "https://react-application-teal.vercel.app/",
    githublink:
      "https://github.com/saik2004/CounterApp-RandomNumberGeneratorapp-ReactApplication",
  },

  {
    title: "Full-Stack Login App",
    description:
      "A full-stack login application connecting a React frontend with a Node.js and Express backend.",
    toolsused: "React, Node.js, Express",
    category: "Full Stack",
    img: LoginReactNodeimg,
    projectlink: "https://frontend-gamma-seven-3x9nk8rjpo.vercel.app/",
    githublink: "https://github.com/saik2004/react-node-loginpage",
  },

  {
    title: "Favourite Student List",
    description:
      "A React app for managing a favourite student list using components and Context API for shared student data.",
    toolsused: "React, JavaScript, Tailwind CSS",
    category: "React",
    img: FavouriteStudentsimg,
    projectlink: "https://favouritestudentlist-react-app.vercel.app/",
    githublink: "https://github.com/saik2004/favouritestudentlist-react-app",
  },

  {
    title: "Weather App",
    description:
      "A React weather app built using Axios to fetch and display data from a public weather API.",
    toolsused: "React, Axios, Tailwind CSS",
    category: "React",
    img: WeatherAppimg,
    projectlink: "https://weatherapp-react-axios.vercel.app/",
    githublink: "https://github.com/saik2004/weatherapp-react-axios",
  },

  {
    title: "Actodo",
    description:
      "A React todo app with signup and login flow. New users can create an account, get redirected to login, and access their todo list using their registered credentials.",
    toolsused: "React, JavaScript, Tailwind CSS",
    category: "React",
    img: Actodoimg,
    projectlink: "https://actodo-react-app-mu.vercel.app/",
    githublink: "https://github.com/saik2004/actodo-react-app",
  },

  {
    title: "Image Gallery",
    description:
      "A React image gallery where I first used an array of objects and map() to dynamically render reusable image cards.",
    toolsused: "React, JavaScript, CSS",
    category: "React",
    img: ImageGallery,
    projectlink: "https://image-gallery-react-rust-kappa.vercel.app/",
    githublink: "https://github.com/saik2004/Image-gallery-react",
  },

  {
    title: "HTML Form Validation",
    description:
      "My first form validation project with name, email, and password fields and basic input validation.",
    toolsused: "HTML, CSS",
    category: "Frontend",
    img: Htmlformvalidation,
    projectlink: "https://saik2004.github.io/Form-validation/",
    githublink: "https://github.com/saik2004/Form-validation",
  },

  {
    title: "Character Counter",
    description:
      "A simple character counter built with HTML and basic JavaScript to practice handling text input.",
    toolsused: "HTML, JavaScript",
    category: "Frontend",
    img: Charactercounter,
    projectlink: "https://saik2004.github.io/character-counter/",
    githublink: "https://github.com/saik2004/character-counter",
  },
  {
  title: "Portfolio Website",
  description:
    "A personal developer portfolio built with React and Tailwind CSS to showcase skills, projects, and contact information.",
  toolsused: "React, Tailwind CSS",
  category: "React",
  img: portfolio,
  projectlink: "https://portfolio-seven-alpha-20.vercel.app/",
  githublink: "https://github.com/saik2004/Portfolio",
}
]);

  return (
    <DataContext.Provider value={{ Projects, setProjects, darkmode, setdarkmode }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
export default DataContextProvider;
