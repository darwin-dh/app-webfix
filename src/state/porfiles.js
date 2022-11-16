import { mapState, mapActions, mapGetters } from 'vuex'

export const prueba2 = {
    ...mapState('perfiles', {
        hola: (state) => state.hola,
    }),
}
export const loginAuth = mapActions('perfiles', ['loginUser'])
export const auth = mapGetters('perfiles', ['userAuth'])
