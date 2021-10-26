import { createRouter, createWebHistory } from 'vue-router'
import MarkDown from '../views/MarkDown'
import Modal from "../views/Modal"
import Toast from "../views/Toast"
import ToggleSwitch from "../views/ToggleSwitch";
import Button from "../views/Button";
const routes = [
  {
    path:"/markdown",
    name:"md",
    component:MarkDown
  },
  {
    path: "/modal",
    name:"modal",
    component: Modal
  },
  {
    path: "/toast",
    component: Toast,
    name:"toast"
  },
  {
    path: "/toggle",
    component: ToggleSwitch,
    name:"toggle"
  },
  {
    path: "/button",
    component: Button,
    name:"button"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
