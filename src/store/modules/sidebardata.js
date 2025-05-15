
const state = {
    link: '',
    active: window.localStorage.getItem('activeLink'),
}

const getters = {
    getLink: state => state.link,
    getActiveData: state => state.active,
}

const actions = {
    getActiveLink({ commit }) {
        commit('setLink', state => state.link);
    },
    getActiveDataFromLocalStorage({ commit }) {
        // console.log(localStorage.rememberCurrent)
        commit('setActiveData', JSON.parse(localStorage.getItem('rememberCurrent')))
    },
    changeLink({ commit }, link) {
        // window.localStorage.setItem('iFrameSrc',link)

        commit('setLink', link);
    },
    changeActiveData({ commit }, active) {

        localStorage.setItem('activeLink',JSON.stringify(active));
        
        commit('setActiveData', active);
    }
}

const mutations = {
    setLink: (state, link) => (state.link = link),
    setActiveData: (state, active) => (state.active = active)
}

export default {
    state,
    getters,
    actions,
    mutations
}