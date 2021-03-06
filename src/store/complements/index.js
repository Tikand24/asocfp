import Vue from "vue";
import Vuex from "vuex";

export const COMP_OBTENER = "COMP_OBTENER";
export const COMP_PROCESAR = "COMP_PROCESAR";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    complementos: {
      gender: [
        { id: 1, abreviatura: "Masculino" },
        { id: 2, abreviatura: "Femenino" }
      ],
      familyRange: [
        { id: 1, abreviatura: "Madre" },
        { id: 2, abreviatura: "Padre" },
        { id: 3, abreviatura: "Hijo/a" },
        { id: 4, abreviatura: "Abuelo/a" },
        { id: 5, abreviatura: "Tio/a" },
        { id: 6, abreviatura: "Primo/a" },
        { id: 7, abreviatura: "Sobrino/a" }
      ],
      occupation: [
        { id: 1, abreviatura: "Jornalero" },
        { id: 2, abreviatura: "Capataz" },
        { id: 3, abreviatura: "Trabajos del hogar" },
        { id: 4, abreviatura: "Profesional" },
        { id: 5, abreviatura: "Estudiante" },
        { id: 6, abreviatura: "NA" }
      ],
      mainCrop: [
        { id: 1, abreviatura: "Mora" },
        { id: 2, abreviatura: "Papa" },
        { id: 3, abreviatura: "Papa Criolla" },
        { id: 4, abreviatura: "Tomate" },
        { id: 5, abreviatura: "Tomate de arbol" },
        { id: 6, abreviatura: "otro" }
      ]
    }
  },
  mutations: {
    [COMP_PROCESAR]: (state, complementos) => {
      state.complementos = complementos;
    }
  },
  actions: {
    [COMP_OBTENER]: ({ commit, dispatch }) => {}
  },
  getters: {
    complementosGenders(state) {
      return {
        genders: state.complementos.gender
      };
    },
    complementosFamilyRanges(state) {
      return {
        familyRanges: state.complementos.familyRange
      };
    },
    complementosOccupation(state) {
      return {
        occupations: state.complementos.occupation
      };
    },
    complementosMainCrops(state) {
      return {
        mainCrops: state.complementos.mainCrop
      };
    }
  }
});
