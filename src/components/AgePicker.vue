<template>
  <div>
    <v-dialog
      ref="dialogBirthDate"
      v-model="datePickerBirthDate"
      :return-value.sync="birthDate"
      persistent
      full-width
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="birthDate"
          label="Fecha De Nacimiento"
          prepend-inner-icon="mdi-calendar"
          readonly
          persistent-hint
          hint="Por favor Seleccione La Fecha De Nacimiento"
          :rules="!strict ? [] : ageRules"
          outlined
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="birthDate" :max="today" scrollable>
        <div class="flex-grow-1"></div>
        <v-btn text color="primary" @click="datePickerBirthDate = false"
          >Cancelar</v-btn
        >
        <v-btn
          text
          color="primary"
          @click="$refs.dialogBirthDate.save(birthDate)"
          >OK</v-btn
        >
      </v-date-picker>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "AgePicker",
  props: ["strict", "value"],
  data: () => ({
    ageRules: [(v) => !!v || "La Fecha De Nacimiento Es Requerida"],
    datePickerBirthDate: null,
    birthDate: null,
    today: new Date().toISOString().substr(0, 10),
  }),
  watch: {
    value: function (val) {
      if (val) {
        this.birthDate = val;
      }
    },
    birthDate: function (val) {
      if (val) {
        this.$emit("dateselected", val);
        console.log("birthDate", this.birthDate);
      }
    },
  },
};
</script>