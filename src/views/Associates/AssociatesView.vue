<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-card-title>Asociados</v-card-title>
          <v-card-title>
            <v-btn color="primary" dark to="crear"
              >Crear asociado</v-btn
            >
            <div class="flex-grow-1"></div>
            <v-text-field
              v-model="search"
              append-icon="mdi-search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// Utilities

export default {
  name: "AssociatesView",

  data: () => ({
    headers: [
      {
        text: "Nombre",
        align: "start",
        value: "name",
      },
      { text: "Rango familiar", value: "familyRank.abreviatura" },
      { text: "Ocupacion", value: "mainOccupation.abreviatura" },
      { text: "Cultivo principal", value: "mainCrop.abreviatura" },
    ],
    desserts: [
      {
        name: "Luz Dary Villalobos Guchuvo",
        familyRank:{id:1,abreviatura:'Madre'},
        mainOccupation:{id:1,abreviatura:'Capataz'},
        mainCrop:{id:1,abreviatura:'Mora'},
      },
      {
        name: "Juan carlos mendez",
        familyRank:{id:1,abreviatura:'Padre'},
        mainOccupation:{id:1,abreviatura:'Capataz'},
        mainCrop:{id:1,abreviatura:'Mora'},
      },
      {
        name: "Samuel Alejandro Salinas",
        familyRank:{id:1,abreviatura:'Tío'},
        mainOccupation:{id:1,abreviatura:'Jornalero'},
        mainCrop:{id:1,abreviatura:'Tomate'},
      },
      {
        name: "Sandra Diaz",
        familyRank:{id:1,abreviatura:'Madre'},
        mainOccupation:{id:1,abreviatura:'Cabeza familia'},
        mainCrop:{id:1,abreviatura:'Tomate de arbol'},
      },
      {
        name: "Juan Diego Sanchez",
        familyRank:{id:1,abreviatura:'Tío'},
        mainOccupation:{id:1,abreviatura:'Jornalero'},
        mainCrop:{id:1,abreviatura:'Papa'},
      },
      {
        name: "Andres Macias",
        familyRank:{id:1,abreviatura:'Tío'},
        mainOccupation:{id:1,abreviatura:'Jornalero'},
        mainCrop:{id:1,abreviatura:'NA'},
      }
    ],
  }),
};
</script>