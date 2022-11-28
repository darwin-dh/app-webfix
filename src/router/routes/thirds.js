export default [
    //thirds
    //Clientes
    {
        path: "/Clientes",
        name: "Clientes",
        meta: {
            title: "Clientes"

        },
        component: () => import("@/views/Thirds/Clients/Clients.vue")
    },
    //Vendedores
    {
        path: "/Sellers",
        name: "sellers",
        meta: {
            title: "sellers"

        },
        component: () => import("@/views/Thirds/Sellers/Sellers.vue")
    },
    //Proovedores
    {
        path: "/Providers",
        name: "Providers",
        meta: {
            title: "Providers"

        },
        component: () => import("@/views/Thirds/Providers/Providers.vue")
    },
]