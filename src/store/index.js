import Vue from 'vue'
import Vuex from 'vuex'

import data from '../data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        works: data.works
    },
    getters: {
        projects: state => {
            return state.works.projects
        },
        project: state => slug => {
            return state.works.projects.find(project => project.slug === slug)
        }
    }
})