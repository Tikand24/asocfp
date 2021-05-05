// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Tablero',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'Usuarios',
      icon: 'mdi-account',
      to: '/app/asociados/',
    },
    {
      title: 'Agenda',
      icon: 'mdi-clipboard-outline',
      to: '/app/calendario/',
    },
    {
      title: 'Documentos',
      icon: 'mdi-format-font',
      to: '/components/typography/',
    },
    {
      title: 'Estadisticas',
      icon: 'mdi-chart-bubble',
      to: '/components/estadisticas/',
    },
    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/maps/google/',
    },
    {
      title: 'Notificaciones',
      icon: 'mdi-bell',
      to: '/components/notifications/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
