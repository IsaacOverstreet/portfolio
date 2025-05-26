import Authentication from "./component/image/AuthenticationUi.webp";
import recipeUi from "./component/image/recipeUi.webp";
import TodoUi from "./component/image/TodoUi.webp";
import traveltracker from "./component/image/traveltracker.webp";

const projectInfo = [
  {
    id: 1,
    img: Authentication,
    title: "Authentication",
    desc: "Oauth authentication method for a recipe app. This project was made to understand Oauth method.",
    github: "https://github.com/IsaacOverstreet/Recipe_app",
    demo: "https://recipe-app-lhce.onrender.com/",
  },
  {
    id: 2,
    img: recipeUi,
    title: " Recipage",
    desc: "A recipe signup site where u can login and search for your favourite recipe and save them for future use. This project was made to understand API integration, environment variables and deployment.",
    github: "https://github.com/IsaacOverstreet/Recipe_app",
    demo: "https://recipe-app-lhce.onrender.com/",
  },
  {
    id: 3,
    img: TodoUi,
    title: "Todo app",
    desc: "A todo site that can help you schedule your daily activities.",
    github: "https://github.com/IsaacOverstreet/todo-application",
    demo: "https://isaacoverstreet.github.io/todo-application/",
  },
  {
    id: 4,
    img: traveltracker,
    title: "Travel tracker",
    desc: "A travel tracker that can help you track the countries that you and your individual family members have visited. The countries visited are saved into a postgres DB.",
    github: "none",
    demo: "none",
  },
];
export default projectInfo;
