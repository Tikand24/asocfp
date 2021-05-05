<template>
  <v-container id="icons-view" fluid tag="section">
    <v-row>
      <v-col cols="12">
        <material-card color="success" full-header>
          <template #heading>
            <div class="pa-6 white--text">
              <div class="text-h4 font-weight-light">Estadisticas</div>
            </div>
          </template>
          <v-row>
            <v-col cols="12" md="3" lg="3">
              <material-chart-card
                :color="chart1.color"
                :data="chart1.data"
                :options="chart1.options"
                :responsive-options="chart1.responsiveOptions"
                :title="chart1.title"
                :type="chart1.type"
              >
                <template #subtitle>
                  <div class="font-weight-light text--secondary">
                    <div v-html="chart1.subtitle" />
                  </div>
                </template>

                <template #actions>
                  Personas por genero las cuales son cabezas de hogar.
                </template>
              </material-chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <material-chart-card
                :color="chart2.color"
                :data="chart2.data"
                :options="chart2.options"
                :responsive-options="chart2.responsiveOptions"
                :title="chart2.title"
                :type="chart2.type"
              >
                <template #subtitle>
                  <div class="font-weight-light text--secondary">
                    <div v-html="chart2.subtitle" />
                  </div>
                </template>

                <template #actions>
                  Personas por genero las cuales son cabezas de hogar.
                </template>
              </material-chart-card>
            </v-col>
          </v-row>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StatisticsView",
  data: () => ({
    chart1: {
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
      colMd: "3",
      colLg: "2",
    },
    chart2: {
      type: "Pie",
      color: "#FD9A13",
      title: "Poblacion menor a 18 años",
      subtitle: "",
      time: "actualizado hace 10 minutes ",
      data: {
        labels: ["0-8 años", "9-14 años", "14-18 años"],
        series: [30, 20, 40],
      },
      options: {
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      },
      responsiveOptions: [
        [
          "screen and (min-width: 640px)",
          {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: "explode",
            labelInterpolationFnc: function (value) {
              return value;
            },
          },
        ],
        [
          "screen and (min-width: 1024px)",
          {
            labelOffset: 80,
            chartPadding: 20,
          },
        ],
      ],
    },
  }),
};
</script>
