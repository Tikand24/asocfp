<template>
  <div>
    <v-select
      v-model="occupation"
      :items="complementos"
      :item-text="showItem"
      label="Ocupacion principal"
      persistent-hint
      :rules="!strict ? [] : occupationRules"
      hint="Por favor ingresa la ocupacion principal"
      return-object
      outlined
    ></v-select>
  </div>
</template>
<script>
import store from "../store/complements/index";
export default {
  name: "MainOccupationSelect",
  props: ["strict", "value"],
  data: () => ({
    occupationRules: [(v) => !!v || "El dato Es Requerido"],
    occupation: null,
  }),
  methods: {
    showItem: function (val) {
      return val.abreviatura;
    },
  },
  watch: {
    value: function (val) {
      if (val) {
        const occupationFind = this.complementos.find((occupation) => {
          return occupation.abreviatura == val;
        });
        this.occupation = occupationFind;
      }
    },
  },
  computed: {
    complementos() {
      if (store.getters.complementosOccupation) {
        return store.getters.complementosOccupation.occupations;
      }
      return [];
    },
  },
  mounted() {},
};
</script>