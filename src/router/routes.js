import store from "@/state/store";

export default [
  {
    path: "/",
    name: "default",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/",
    name: "default",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
/*   {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  }, */
/*   {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout", authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        localStorage.clear()
        next()
      },
    },
    component: () => import("../views/auth/logout/basic")
  }, */
  {
    path: "/Dashboard",
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      authRequired: false,
    },
    component: () => import("../views/dashboard/ecommerce/index.vue"),
  },
  {
    path: "/Usuario",
    name: "Usuario",
    meta: {
      title: "Usuario"

    },
    component: () => import("../views/Admin/User/User.vue")
  },
  {
    path: "/Empresa",
    name: "Empresa",
    meta: {
      title: "Empresa"

    },
    component: () => import("@/views/Admin/Empresa/Empresa.vue")
  },
  {
    path: "/Factura",
    name: "Factura",
    meta: {
      title: "Factura"

    },
    component: () => import("@/views/Admin/Factura/Factura.vue")
  },
  {
    path: "/Sucursales",
    name: "Sucursales",
    meta: {
      title: "Sucursales"

    },
    component: () => import("@/views/Admin/Sucursales/Sucursales.vue")
  },
  {
    path: "/AgregarSucursales",
    name: "Agregar Sucursales",
    meta: {
      title: "Agregar Sucursales"

    },
    component: () => import("@/views/Admin/Sucursales/Crud/AgregarSucursales.vue")
  },
  {
    path: "/EditarSucursales/:id",
    name: "EditarSucursales",
    meta: {
      title: "Editar Sucursales"

    },
    component: () => import("@/views/Admin/Sucursales/Crud/EditarSucursales.vue")
  },
  {
    path: "/Bodega",
    name: "Bodega",
    meta: {
      title: "Bodega"

    },
    component: () => import("@/views/Inventory/Bodega/Bodega")
  },
  {
    path: "/AgregarBodega",
    name: "AgregarBodega",
    meta: {
      title: "Agregar Bodega"
    },
    component: () => import("@/views/Inventory/Bodega/Crud/CreatedBodega.vue")
  },
  {
    path: "/EditarBodega/:id",
    name: "EditarBodega",
    meta: {
      title: "Editar Bodega"
    },
    component: () => import("@/views/Inventory/Bodega/Crud/EditBodega.vue")
  },
  {
    path: "/Productos",
    name: "Productos",
    meta: {
      title: "Productos"

    },
    component: () => import("@/views/Inventory/Products/Productos")
  },
  {
    path: "/AgregarProducto",
    name: "Agregar Producto",
    meta: {
      title: "Agregar Producto"

    },
    component: () => import("@/views/Inventory/Products/Crud/CreatedProduct.vue")
  },

  {
    path: "/EditarProducto/:id",
    name: "Editar Producto",
    meta: {
      title: "Editar Producto"
    },
    component: () => import("@/views/Inventory/Products/Crud/EditProduct.vue")
  },
  //*****************forma pago*************//
  {
    path: "/FormaPagos",
    name: "FormaPago",
    meta: {
      title: "FormaPago"

    },
    component: () => import("@/views/Admin/Pays/Pays.vue")
  },
  {
    path: "/AgregarFormaPagos",
    name: "AgregarFormaPagos",
    meta: {
      title: "Agregar Forma Pago"

    },
    component: () => import("@/views/Admin/Pays/Crud/CreatedPays.vue")
  },

  {
    path: "/EditarFormaPagos/:id",
    name: "EditarFormaPagos",
    meta: {
      title: "Editar Forma Pago"
    },
    component: () => import("@/views/Admin/Pays/Crud/EditPays.vue")
  },


  //contablidad
  {
    path: "/PlandeCuentas",
    name: "PlandeCuentas",
    meta: {
      title: "Plan de Cuentas "

    },
    component: () => import("@/views/Accounting/Plan/Plan.vue")
  },
  //sales
  {
    path: "/Clientes",
    name: "Clientes",
    meta: {
      title: "Clientes"

    },
    component: () => import("@/views/Sales/Clients/Clients.vue")
  },
  {
    path: "/AgregarClientes",
    name: "Agregar Clientes",
    meta: {
      title: "Agregar Clientes"

    },
    component: () => import("@/views/Sales/Clients/Crud/AddClients.vue")
  },
  {
    path: "/EditarClientes/:id",
    name: "EditarClientes",
    meta: {
      title: "Editar Clientes"

    },
    component: () => import("@/views/Sales/Clients/Crud/EditClients.vue")
  },
  {
    path: "/Pagos",
    name: "Pagos",
    meta: {
      title: "Pagos"

    },
    component: () => import("@/views/Accounting/Payments/Pagos.vue")
  },
];