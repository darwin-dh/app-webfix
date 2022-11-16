import axios from "axios";
import router from '@/router/index'
import Swal from 'sweetalert2'
export const state = {
    user: '',
    perfiles: '',
}

export const getters = {

    userAuth(state) {
        return !!state.user
    }
}

export const actions = {

    async loginUser({ commit }, usuario) {
        try {
            const result = await axios.post("/api/login", {
                email: usuario.email,
                contrasena: usuario.contrasena,
            });
            if (result.data.mesage === "YES") {
                const userAuth = result
                const perfilesuser = userAuth.data.data
                console.log(perfilesuser);
                commit('setUser', userAuth)
                commit('setperfles', userAuth.data.perfiles);
                localStorage.setItem('perfiles', JSON.stringify(perfilesuser))
                router.push('/Dashboard')
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                footer: '<a href="" to=' / '>Tienes un Error?</a>'
            })
        }
    },
}
export const mutations = {
    setUser(state, payload) {
        state.user = payload
    },
    setperfles(state, payload) {
        state.perfiles = payload
    }
}