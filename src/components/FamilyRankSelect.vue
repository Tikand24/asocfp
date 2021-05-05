<template>
  <div>
    <v-select
      v-model="rank"
      :items="complementos"
      :item-text="showItem"
      label="Rango familiar"
      persistent-hint
      :rules="!strict ? [] : familyRankRules"
      hint="Por favor ingresa el Rango familiar"
      return-object
      outlined
    ></v-select>
  </div>
</template>
<script>
import store from "../store/complements/index";
export default {
  name: "FamilyRankSelect",
  props: ["strict", "value"],
  data: () => ({
    familyRankRules: [(v) => !!v || "El Genero Es Requerido"],
    rank: null,
  }),
  methods: {
    showItem: function (val) {
      return val.abreviatura;
    },
  },
  watch: {
    value: function (val) {
      if (val) {
        const familyRankFind = this.complementos.find((rank) => {
          return rank.abreviatura == val;
        });
        this.rank = familyRankFind;
      }
    },
  },
  computed: {
    complementos() {
      if (store.getters.complementosFamilyRanges) {
        return store.getters.complementosFamilyRanges.familyRanges;
      }
      return [];
    },
  },
  mounted() {},
};
</script>