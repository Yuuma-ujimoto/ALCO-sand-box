import { createRouter, createWebHistory } from 'vue-router'
import MarkDown from '../views/MarkDown'
import Modal from "../views/Modal"
import Toast from "../views/Toast"
import ToggleSwitch from "../views/ToggleSwitch";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
