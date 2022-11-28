export default [

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
]