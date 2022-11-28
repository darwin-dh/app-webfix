import { createWebHistory, createRouter } from "vue-router";
//all routes
import auth from "./routes/auth";
import admin from "./routes/admin";
import inventory from "./routes/inventory";
import accounting from "./routes/accounting";
import sales from "./routes/sales";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...auth,
    ...admin,
    ...inventory,
    ...accounting,
    ...sales,
  ],

  mode: 'history',

})


export default router
