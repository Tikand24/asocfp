<template>
  <v-container id="typography-view" fluid tag="section">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <material-card color="success" full-header>
          <template #heading>
            <div class="pa-6 white--text">
              <div class="text-h4 font-weight-light">Documentos</div>

              <div class="text-subtitle-1">
                Documentos adjuntados al sistema
              </div>
            </div>
          </template>

          <v-card-text class="text--primary">
            <v-row>
              <v-col cols="12" md="12" lg="12">
                <v-expansion-panels>
                  <v-expansion-panel v-for="(item, i) in documents" :key="i">
                    <v-expansion-panel-header>
                      {{ item.title }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="12" lg="12">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Illum dolores, doloremque non assumenda
                            obcaecati, ducimus tempore, expedita totam nobis
                            temporibus iure inventore! Perspiciatis ad numquam,
                            maiores totam iusto nihil cum?
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Data
const leader =
  "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.";
const leaderShort = leader.slice(0, 105) + "...";
const material = "The Life of Material Dashboard";
const small = "Header with small subtitle";

export default {
  name: "TypographyView",

  data: () => ({
    documents:[{
      title:'Notas reunion alcaldia XYZ',
    },{
      title:'Acta reunion 14 abril 2021',
    },{
      title:'Minuta entrega producto XYZ',
    },{
      title:'Acta reunion 12 enero 2021',
    }]
  }),
};
</script>
