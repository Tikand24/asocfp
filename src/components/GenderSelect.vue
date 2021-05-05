<template>
  <div>
    <v-select
      v-model="gender"
      :items="complementos"
      :item-text="showItem"
      label="Genero"
      persistent-hint
      :rules="!strict ? [] : genderRules"
      hint="Por favor ingresa el Genero"
      return-object
      outlined
    ></v-select>
  </div>
</template>
<script>
import store from "../store/complements/index";
export default {
  name: "GenderSelect",
  props: ["strict", "value"],
  data: () => ({
    genderRules: [(v) => !!v || "El Genero Es Requerido"],
    gender: null,
  }),
  methods: {
    showItem: function (val) {
      return val.abreviatura;
    },
  },
  watch: {
    value: function (val) {
      if (val) {
        const gendersFind = this.complementos.find((genders) => {
          return genders.abreviatura == val;
        });
        this.gender = gendersFind;
      }
    },
  },
  computed: {
    complementos() {
      if (store.getters.complementosGenders) {
        return store.getters.complementosGenders.genders;
      }
      return [];
    },
  },
  mounted() {},
};
</script>