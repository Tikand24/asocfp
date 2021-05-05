<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>Crear asociado</v-card-title>
        <v-form>
          <v-container class="spacing-playground pa-10">
            <v-row>
              <v-col cols="12" md="3" lg="3">
                <v-text-field
                  outlined
                  v-model="associate.name"
                  label="Nombres"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Por favor ingresa el nombre completo"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" lg="3">
                <v-text-field
                  outlined
                  v-model="associate.lastName"
                  label="Apellidos"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Por favor ingresa el apellido completo"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" lg="2">
                <AgePicker
                  ref="birthDate"
                  :strict="true"
                  :value="associate.birthDate"
                  v-on:dateselected="getDataSelected($event)"
                />
              </v-col>
              <v-col cols="12" md="2" lg="2">
                <v-text-field
                  outlined
                  v-model="associate.age"
                  label="Edad"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Edad"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" lg="2">
                <GenderSelect
                  ref="gender"
                  :strict="true"
                  :value="associate.gender"
                />
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-text-field
                  outlined
                  v-model="associate.location"
                  label="Direccion / Ubicacion"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Por favor ingrese la Dirección / Ubicacion"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" lg="2">
                <FamilyRankSelect
                  ref="familyRank"
                  :strict="true"
                  :value="associate.familyRank"
                />
              </v-col>
              <v-col cols="12" md="3" lg="2">
                <MainOccupationSelect
                  ref="mainOccupation"
                  :strict="true"
                  :value="associate.mainOccupation"
                />
              </v-col>
              <v-col cols="12" md="3" lg="2">
                <MainCropSelect
                  ref="mainCrop"
                  :strict="true"
                  :value="associate.mainCrop"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3" lg="2">
                <h1>Nucleo familiar</h1>
              </v-col>
              <v-col cols="12" md="9" lg="10">
                <div class="d-flex justify-end">
                  <v-btn
                    v-if="addFamilyMember"
                    color="primary"
                    dark
                    @click="addFamilyMemberToList()"
                  >
                    Agregar
                    <v-icon right dark> mdi-send </v-icon>
                  </v-btn>
                  <v-btn
                    :color="addFamilyMember ? 'grey' : 'primary'"
                    dark
                    @click="addFamilyMember = !addFamilyMember"
                  >
                    {{ addFamilyMember ? "Cancelar" : "Crear" }}

                    <v-icon right dark>
                      {{
                        addFamilyMember ? "mdi-close" : "mdi-plus-box-outline"
                      }}</v-icon
                    >
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row v-show="!addFamilyMember">
              <v-col cols="12" md="12" lg="12" v-if="familyMembers.length <= 0">
                {{ familyMembers.length }} personas agregadas al nucleo familiar
              </v-col>
              <v-col cols="12" md="12" lg="12">
                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="(item, i) in familyMembers"
                    :key="i"
                  >
                    <v-expansion-panel-header>
                      {{ item.name }}
                      {{ item.familyRank ? `- ${item.familyRank.name}` : "" }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="3" lg="3">
                            <span>Nombres</span>
                            <h4>{{ item.name }}</h4>
                          </v-col>
                          <v-col cols="12" md="3" lg="3">
                            <span>Apellidos</span>
                            <h4>{{ item.lastName }}</h4>
                          </v-col>
                          <v-col cols="12" md="2" lg="2">
                            <span>Fecha nacimiento</span>
                            <h4>{{ item.birthDate }}</h4>
                          </v-col>
                          <v-col cols="12" md="2" lg="2">
                            <span>Edad</span>
                            <h4>{{ item.age }}</h4>
                          </v-col>
                          <v-col cols="12" md="2" lg="2">
                            <span>Genero</span>
                            <h4>{{ item.gender ? item.gender.name : "" }}</h4>
                          </v-col>
                          <v-col cols="12" md="2" lg="2">
                            <span>Rango familiar</span>
                            <h4>
                              {{ item.familyRank ? item.familyRank.name : "" }}
                            </h4>
                          </v-col>
                          <v-col cols="12" md="10" lg="10">
                            <span>Observaciones</span>
                            <h4>{{ item.observation }}</h4>
                          </v-col>
                          <v-col cols="12" md="12" lg="12">
                            <v-divider></v-divider>
                          </v-col>
                          <v-col cols="12" md="12" lg="12">
                            <v-btn
                              fab
                              dark
                              large
                              @click="deleteMember(item)"
                              color="red"
                            >
                              <v-icon dark>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
            <v-row v-show="addFamilyMember">
              <v-col cols="12" md="3" lg="3">
                <v-text-field
                  outlined
                  v-model="familyMember.name"
                  label="Nombres"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Por favor ingresa el nombre completo"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" lg="3">
                <v-text-field
                  outlined
                  v-model="familyMember.lastName"
                  label="Apellidos"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Por favor ingresa el apellido completo"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" lg="2">
                <AgePicker
                  ref="birthDate"
                  :strict="true"
                  :value="familyMember.birthDate"
                />
              </v-col>
              <v-col cols="12" md="2" lg="2">
                <v-text-field
                  outlined
                  v-model="familyMember.age"
                  label="Edad"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Edad"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" lg="2">
                <GenderSelect
                  ref="gender"
                  :strict="true"
                  :value="familyMember.gender"
                />
              </v-col>
              <v-col cols="12" md="3" lg="2">
                <FamilyRankSelect
                  ref="familyRank"
                  :strict="true"
                  :value="familyMember.familyRank"
                />
              </v-col>
              <v-col cols="12" md="9" lg="10">
                <v-text-field
                  outlined
                  v-model="familyMember.observation"
                  label="Observaciones"
                  :rules="requiredRule"
                  persistent-hint
                  hint="Observaciones"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="9" lg="10">
                <v-btn
                  class="ma-2"
                  :loading="loading"
                  :disabled="loading"
                  color="success"
                  @click="saveAssociate()"
                >
                  Guardar
                  <v-icon right dark> mdi-send </v-icon>
                  <template v-slot:loader>
                    <span>Procesando...</span>
                  </template>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { age } from '@/util/helpers'
// Utilities
export default {
  name: "AssociatesCreateView",
  data: () => ({
    loading: false,
    associate: {
      name: "",
      lastName: "",
      birthDate: "",
      age:"",
      gender: "",
      familyRank: "",
      mainOccupation: "",
      mainCrop: "",
      location: "",
    },
    requiredRule: [(v) => !!v || "El dato Es Requerido"],

    familyMember: {
      name: "",
      lastName: "",
      birthDate: "",
      gender: "",
      familyRank: "",
      observation: "",
    },
    addFamilyMember: false,
    familyMembers: [],
  }),
  methods: {
    addFamilyMemberToList: function () {
      this.familyMembers.push({
        id: Date.now(),
        name: this.familyMember.name,
        lastName: this.familyMember.lastName,
        birthDate: this.familyMember.birthDate,
        gender: this.familyMember.gender,
        familyRank: this.familyMember.familyRank,
        observation: this.familyMember.observation,
      });
      this.addFamilyMember = false;
      this.familyMember = {
        name: "",
        lastName: "",
        birthDate: "",
        gender: "",
        familyRank: "",
        observation: "",
      };
    },
    deleteMember: function (item) {
      this.familyMembers.splice(
        this.familyMembers.findIndex((m) => m.id === item.id),
        1
      );
    },
    saveAssociate: function () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    getDataSelected: function (event) {
      this.associate.age = age(event,true);
    },
  },
  mounted() {
  },
};
</script>