import { createWebHistory, createRouter } from "vue-router";
//all routes
import auth from "./routes/auth";
import admin from "./routes/admin";
import inventory from "./routes/inventory";
import accounting from "./routes/accounting";
import thirds from "./routes/thirds";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...auth,
    ...admin,
    ...inventory,
    ...accounting,
    ...thirds,
  ],

  mode: 'history',

})


export default router
