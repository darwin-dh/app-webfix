export default [

    //contablidad
    {
        path: "/Pagos",
        name: "Pagos",
        meta: {
            title: "Pagos"

        },
        component: () => import("@/views/Accounting/Payments/Pagos.vue")
    },
    {
        path: "/PlandeCuentas",
        name: "PlandeCuentas",
        meta: {
            title: "Plan de Cuentas "

        },
        component: () => import("@/views/Accounting/Plan/Plan.vue")
    },

]