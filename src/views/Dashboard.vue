<template>
  <v-container id="dashboard-view" fluid tag="section">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="({ actionIcon, actionText, ...attrs }, i) in stats"
            :key="i"
            cols="12"
            md="6"
            lg="3"
          >
            <material-stat-card v-bind="attrs">
              <template #actions>
                <v-icon class="mr-2" small v-text="actionIcon" />
                <div class="text-truncate">
                  {{ actionText }}
                </div>
              </template>
            </material-stat-card>
          </v-col>
          <v-col
            v-for="(chart, i) in charts"
            :key="`chart-${i}`"
            :cols="chart.colS ? chart.colS : '12'"
            :md="chart.colMd ? chart.colMd : '6'"
            :lg="chart.colLg ? chart.colLg : '4'"
          >
            <material-chart-card
              :color="chart.color"
              :data="chart.data"
              :options="chart.options"
              :responsive-options="chart.responsiveOptions"
              :title="chart.title"
              :type="chart.type"
            >
              <template #subtitle>
                <div class="font-weight-light text--secondary">
                  <div v-html="chart.subtitle" />
                </div>
              </template>

              <template #actions>
                <v-icon class="mr-1" small> mdi-clock-outline </v-icon>

                <span
                  class="text-caption grey--text font-weight-light"
                  v-text="chart.time"
                />
              </template>
            </material-chart-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <material-card color="orange" full-header>
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                Informacion de asociados
              </div>
              <div class="text-caption">
                Nuevos asociados al 15 de septiembre de 2020
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table :headers="headers" :items="items" />
          </v-card-text>
        </material-card>
      </v-col>

      <v-col cols="12" md="6">
        <material-card color="accent" full-header>
          <template #heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
              class="pa-8"
            >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
                >Tareas:</span
              >
              <v-tab class="mr-3">
                <v-icon class="mr-2"> mdi-bug </v-icon>
                Reuniones
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2"> mdi-code-tags </v-icon>
                Actas
              </v-tab>
              <v-tab>
                <v-icon class="mr-2"> mdi-cloud </v-icon>
                Otros
              </v-tab>
            </v-tabs>
          </template>
          <v-tabs-items v-model="tabs" background-color="transparent">
            <v-tab-item v-for="n in 3" :key="n">
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]">
                  <v-row :key="i" align="center" class="flex-nowrap">
                    <v-col cols="1">
                      <v-list-item-action>
                        <v-simple-checkbox
                          v-model="task.value"
                          color="secondary"
                        />
                      </v-list-item-action>
                    </v-col>

                    <v-col
                      class="font-weight-light"
                      cols="8"
                      v-text="task.text"
                    />

                    <v-col cols="auto" class="text-right">
                      <v-icon class="mx-1"> mdi-pencil </v-icon>

                      <v-icon class="mx-1" color="error"> mdi-close </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Utilities
import { get } from "vuex-pathify";
import Vue from "vue";

const lineSmooth = Vue.chartist.Interpolation.cardinal({
  tension: 0,
});

export default {
  name: "DashboardView",

  data: () => ({
    charts: [
      {
        type: "Bar",
        color: "#FD9A13",
        title: "Cabezas de hogar",
        subtitle: "",
        time: "actualizado hace 10 minutes ",
        data: {
          labels: ["Hombres", "Mujeres"],
          series: [[14, 30]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 40,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
        colMd: '3',
        colLg: '2',
        
      },
      {
        type: "Bar",
        color: "primary",
        title: "Genero de socios",
        subtitle: "",
        time: "actualizado hace 10 minutes ",
        data: {
          labels: ["Hombres", "Mujeres"],
          series: [[14, 30]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 40,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
        colMd: '3',
        colLg: '2',
      },
      {
        type: "Line",
        color: "success",
        title: "Lluvia",
        subtitle:
          '<i class="mdi mdi-arrow-up green--text"></i><span class="green--text">55%</span>&nbsp;Incremento hoy',
        time: "Actualizado hace 4 minutos",
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth,
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        colMd: '3',
        colLg: '4',
      },
      {
        type: "Line",
        color: "info",
        title: "Libras exportadas",
        subtitle: "Ultima cosecha",
        time: "Campaña hace 26 minutos",
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth,
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        colMd: '3',
        colLg: '4',
      },
    ],
    headers: [
      {
        sortable: false,
        text: "ID",
        value: "id",
      },
      {
        sortable: false,
        text: "Nombre",
        value: "name",
      },
      {
        sortable: false,
        text: "Ingresos",
        value: "salary",
        align: "right",
      },
      {
        sortable: false,
        text: "Finca",
        value: "field",
        align: "right",
      },
      {
        sortable: false,
        text: "Sector",
        value: "sector",
        align: "right",
      },
    ],
    items: [
      {
        id: 1,
        name: "Luz D. Villalobos",
        sector: "Cable",
        field: "Reten",
        salary: "$35,738",
      },
      {
        id: 2,
        name: "Juan M. Suarez",
        sector: "Monte rico",
        field: "Delicias",
        salary: "$23,738",
      },
      {
        id: 3,
        name: "Maria M. Rodriguez",
        sector: "Cable",
        field: "Tienda",
        salary: "$56,142",
      },
      {
        id: 4,
        name: "Sandra N. Mora",
        sector: "Cable",
        field: "Monarca",
        salary: "$38,735",
      },
    ],
    stats: [
      {
        actionIcon: "mdi-av-timer",
        actionText: "Ultimos 30 dias",
        color: "info",
        icon: "mdi-account-multiple",
        title: "Numero de socios",
        value: "48",
      },
      {
        actionIcon: "mdi-av-timer",
        actionText: "Ultimos 30 dias",
        color: "primary",
        icon: "mdi-account-group",
        title: "Numero de campesinos",
        value: "184",
      },
      {
        actionIcon: "mdi-alert",
        actionText: "Soporte familiar",
        color: "#FD9A13",
        icon: "mdi-sofa-single",
        title: "Familias",
        value: "20",
      },
      {
        actionIcon: "mdi-calendar-range",
        actionText: "Ultimos 30 dias",
        color: "success",
        icon: "mdi-store",
        title: "Ayudas por familia",
        value: "$34,245",
      },
    ],
    tabs: 0,
    tasks: {
      0: [
        {
          text: 'Contractar con los socios"',
          value: true,
        },
        {
          text: "Recoger la informacion de cada uno de los socios",
          value: false,
        },
        {
          text: "Entrega de ayudas para los socios",
          value: false,
        },
      ],
      1: [
        {
          text: "Acta de reunion del 20 de diciembre 2020",
          value: true,
        },
        {
          text: "Acta de reunion del 20 de marzo 2020",
          value: true,
        },
      ],
      2: [
        {
          text: "Modificacion y soporte de plataforma",
          value: false,
        },
      ],
    },
  }),

  computed: {
    sales: get("sales/sales"),
    totalSales() {
      return this.sales.reduce((acc, val) => acc + val.salesInM, 0);
    },
  },
};
</script>
