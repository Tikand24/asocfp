<template>
  <div>
    <v-select
      v-model="crop"
      :items="complementos"
      :item-text="showItem"
      label="Cultivo principal"
      persistent-hint
      :rules="!strict ? [] : cropRules"
      hint="Por favor ingresa el cultivo principal"
      return-object
      outlined
    ></v-select>
  </div>
</template>
<script>
import store from "../store/complements/index";
export default {
  name: "MainCropSelect",
  props: ["strict", "value"],
  data: () => ({
    cropRules: [(v) => !!v || "El dato Es Requerido"],
    crop: null,
  }),
  methods: {
    showItem: function (val) {
      return val.abreviatura;
    },
  },
  watch: {
    value: function (val) {
      if (val) {
        const cropFind = this.complementos.find((crop) => {
          return crop.abreviatura == val;
        });
        this.crop = cropFind;
      }
    },
  },
  computed: {
    complementos() {
      if (store.getters.complementosMainCrops) {
        return store.getters.complementosMainCrops.mainCrops;
      }
      return [];
    },
  },
  mounted() {},
};
</script>