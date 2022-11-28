export default [
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
]