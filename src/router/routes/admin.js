import store from "@/state/store";
export default [
    {
        path: "/",
        name: "default",
        component: () => import("@/views/account/login.vue"),
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
        path: "/Dashboard",
        name: "Dashboard",
        meta: {
            title: "Dashboard",
            authRequired: false,
        },
        component: () => import("@/views/dashboard/ecommerce/index.vue"),
    },
    {
        path: "/Usuario",
        name: "Usuario",
        meta: {
            title: "Usuario"

        },
        component: () => import("@/views/Admin/User/User.vue")
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
]