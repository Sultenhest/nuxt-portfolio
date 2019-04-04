export const state = () => ({
    mode: false
})

export const mutations = {
    changeMode( state ) {
        state.mode = !state.mode
    }
}

export const actions = {
    changeMode( context ) {
        context.commit( 'changeMode' )
    }
}

export const getters = {
    isDarkmode: state => {
        return state.mode
    }
}