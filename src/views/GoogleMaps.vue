<template>
  <v-container id="google-maps-view" fluid tag="section">
    <v-row>
      <v-col cols="12">
        <material-card :heading="heading" color="accent">
          <v-card-text>
            <v-row>
              <v-col sm="12" md="8" lg="10">
                <v-sheet>
                  <div class="google-map" ref="googleMap"></div>
                </v-sheet>
              </v-col>
              <v-col sm="12" md="4" lg="2">
                <v-sheet>
                  <v-list two-line>
                    <v-list-item-group active-class="pink--text" multiple>
                      <template v-for="(item, index) in items">
                        <v-list-item
                          @click="drawField(item)"
                          :key="item.title"
                        >
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.title"
                            ></v-list-item-title>

                            <v-list-item-subtitle
                              class="text--primary"
                              v-text="item.headline"
                            ></v-list-item-subtitle>

                            <v-list-item-subtitle
                              v-text="item.subtitle"
                            ></v-list-item-subtitle>
                          </v-list-item-content>

                          <v-list-item-action>
                            <v-list-item-action-text
                              v-text="item.action"
                            ></v-list-item-action-text>

                            <v-icon v-if="!item.active" color="grey lighten-1">
                              mdi-star-outline
                            </v-icon>

                            <v-icon v-else color="yellow darken-3">
                              mdi-star
                            </v-icon>
                          </v-list-item-action>
                        </v-list-item>

                        <v-divider
                          v-if="index < items.length - 1"
                          :key="index"
                        ></v-divider>
                      </template>
                    </v-list-item-group>
                  </v-list>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { Loader } from "@googlemaps/js-api-loader";
export default {
  name: "GoogleMapsView",
  data: () => ({
    map: null,
    polygonFields: [],
    infoWindow: null,
    loader: new Loader({
      apiKey: "AIzaSyBVPs5KQya-tSHXChjTy_EL9yjiE_TcBZw",
      version: "weekly",
      libraries: ["places"],
    }),
    moreOptions: {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    },
    heading: "Satellite",
    selected: [],
    items: [
      {
        id:1,
        action: "3 HC",
        headline: "Juan Calderon",
        subtitle: `Produccion de tomate, mora, Tomame de arbol`,
        title: "La roca",
        coords: [
          { lng: -74.32497739791869, lat: 4.434150972270442 },
          { lng: -74.32521343231201, lat: 4.435284824039602 },
          { lng: -74.32731628417969, lat: 4.435541544953256 },
          { lng: -74.3281102180481, lat: 4.434835562226016 },
          { lng: -74.32757377624512, lat: 4.433765890141692 },
          { lng: -74.32497739791869, lat: 4.434150972270442 },
        ],
        active: false,
      },
      {
        id:2,
        action: "1 FG",
        headline: "Samuel Rodriguez",
        subtitle: `Produccion de tomate, mora, Tomame de arbol`,
        title: "Las delicias",
        coords: [
          { lng: -74.32536363601685, lat: 4.43872915553073 },
          { lng: -74.3248701095581, lat: 4.440098326318062 },
          { lng: -74.32525634765625, lat: 4.442601335095489 },
          { lng: -74.32828187942505, lat: 4.442430189466705 },
          { lng: -74.32877540588379, lat: 4.439713247290876 },
          { lng: -74.32536363601685, lat: 4.43872915553073 },
        ],
        active: false,
      },
      {
        id:3,
        action: "6 HC",
        headline: "Luz Villalobos",
        subtitle: "Produccion de tomate, mora, Tomame de arbol",
        title: "Altares",
        coords: [
          { lng: -74.32819604873657, lat: 4.446922749055125 },
          { lng: -74.33152198791504, lat: 4.444697865824184 },
          { lng: -74.33152198791504, lat: 4.44183117945321 },
          { lng: -74.3264365196228, lat: 4.443007805804658 },
          { lng: -74.32590007781982, lat: 4.4446122932580785 },
          { lng: -74.3269944190979, lat: 4.446238170314925 },
          { lng: -74.3281102180481, lat: 4.4469441421305085 },
          { lng: -74.32819604873657, lat: 4.446922749055125 },
        ],
        active: false,
      },
      {
        id:4,
        action: "12 HC",
        headline: "Jonatan Villalobos",
        subtitle: "Produccion de tomate, mora, Tomame de arbol",
        title: "DragonStone",
        coords: [
          { lng: -74.32444095611572, lat: 4.450901850385201 },
          { lng: -74.32697296142578, lat: 4.451072994046087 },
          { lng: -74.32802438735962, lat: 4.450623741851401 },
          { lng: -74.32931184768677, lat: 4.4493829486513246 },
          { lng: -74.328453540802, lat: 4.447564541046347 },
          { lng: -74.326651096344, lat: 4.447564541046347 },
          { lng: -74.32544946670532, lat: 4.44839886979899 },
          { lng: -74.32444095611572, lat: 4.450901850385201 },
        ],
        active: false,
      },
      {
        id:5,
        action: "1 FG",
        headline: "Daniela Martinez",
        subtitle: "Produccion de tomate, mora, Tomame de arbol",
        title: "Winterfield",
        coords: [
          { lng: -74.32029962539673, lat: 4.451265530617019 },
          { lng: -74.32180166244507, lat: 4.4510302081346 },
          { lng: -74.32100772857666, lat: 4.450452598086065 },
          { lng: -74.32023525238037, lat: 4.449340162641609 },
          { lng: -74.31849718093872, lat: 4.449190411588043 },
          { lng: -74.31783199310303, lat: 4.450623741851401 },
          { lng: -74.32029962539673, lat: 4.451265530617019 },
        ],
        active: false,
      },
    ],
    contentInfoWindow: "",
  }),
  methods: {
    initializeMap: function () {
      const mapContainer = this.$refs.googleMap;
      this.map = new google.maps.Map(mapContainer, {
        center: { lat: 4.4585299, lng: -74.3249236 },
        zoom: 14,
      });
      const triangleCoords = [
        { lng: -74.33744430541992, lat: 4.447735685482919 },
        { lng: -74.33856010437012, lat: 4.446708818267144 },
        { lng: -74.33873176574707, lat: 4.445425232234858 },
        { lng: -74.33856010437012, lat: 4.444398361799382 },
        { lng: -74.3375301361084, lat: 4.444227216587721 },
        { lng: -74.33624267578125, lat: 4.443970498695735 },
        { lng: -74.33538436889648, lat: 4.443200344483433 },
        { lng: -74.33426856994629, lat: 4.4411465959849625 },
        { lng: -74.33358192443848, lat: 4.439007268552484 },
        { lng: -74.33349609375, lat: 4.438237109158613 },
        { lng: -74.33212280273438, lat: 4.437638095741186 },
        { lng: -74.33049201965332, lat: 4.437039081837733 },
        { lng: -74.32868957519531, lat: 4.4374669489612195 },
        { lng: -74.3283462524414, lat: 4.4358410525730765 },
        { lng: -74.33032035827637, lat: 4.434643021365126 },
        { lng: -74.32989120483397, lat: 4.433616135926312 },
        { lng: -74.32791709899901, lat: 4.43318826657229 },
        { lng: -74.32740211486816, lat: 4.431904657023975 },
        { lng: -74.32628631591795, lat: 4.431990231063211 },
        { lng: -74.3254280090332, lat: 4.434557447633067 },
        { lng: -74.32499885559082, lat: 4.436696787960456 },
        { lng: -74.3254280090332, lat: 4.438664975587747 },
        { lng: -74.32499885559082, lat: 4.44029086575629 },
        { lng: -74.32225227355957, lat: 4.440889877020583 },
        { lng: -74.32044982910156, lat: 4.44183117945321 },
        { lng: -74.31984901428223, lat: 4.443628208034037 },
        { lng: -74.3181324005127, lat: 4.445596377168348 },
        { lng: -74.31512832641602, lat: 4.446280956504825 },
        { lng: -74.3147850036621, lat: 4.448249118554005 },
        { lng: -74.31392669677734, lat: 4.450901850385201 },
        { lng: -74.31521415710449, lat: 4.453811287207226 },
        { lng: -74.31684494018555, lat: 4.456720712521813 },
        { lng: -74.31976318359375, lat: 4.458774417576171 },
        { lng: -74.32302474975586, lat: 4.4611703995511744 },
        { lng: -74.32199478149413, lat: 4.463651944070038 },
        { lng: -74.31976318359375, lat: 4.464849928076534 },
        { lng: -74.31890487670898, lat: 4.466989180365914 },
        { lng: -74.32345390319824, lat: 4.467331460153245 },
        { lng: -74.32671546936035, lat: 4.467417030075113 },
        { lng: -74.33014869689941, lat: 4.46681804041236 },
        { lng: -74.33375358581543, lat: 4.466047910127167 },
        { lng: -74.33744430541992, lat: 4.464849928076534 },
        { lng: -74.34027671813965, lat: 4.464165366026574 },
        { lng: -74.34267997741699, lat: 4.464079795725431 },
        { lng: -74.34233665466309, lat: 4.461255970191441 },
        { lng: -74.34250831604004, lat: 4.458859988495563 },
        { lng: -74.34319496154785, lat: 4.456549570174929 },
        { lng: -74.3440532684326, lat: 4.454581430322458 },
        { lng: -74.34379577636719, lat: 4.452014283469585 },
        { lng: -74.34259414672852, lat: 4.45021727534377 },
        { lng: -74.34027671813965, lat: 4.449960559539092 },
        { lng: -74.33847427368164, lat: 4.450987422220619 },
        { lng: -74.33572769165039, lat: 4.451757568291668 },
        { lng: -74.33486938476562, lat: 4.45021727534377 },
        { lng: -74.33598518371582, lat: 4.44850583495533 },
        { lng: -74.33744430541992, lat: 4.447735685482919 },
      ];
      const dataPolygon = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#fd5050",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#f6d0d0",
        fillOpacity: 0.35,
      });
      dataPolygon.setMap(this.map);
      this.polygonFields.push({
        id:'mainMap',
        polygon:dataPolygon
      });
      this.infoWindow = new google.maps.InfoWindow();
    },
    drawField:function(data) {
      if(!data.active){
        const bermudaTriangle = new google.maps.Polygon({
          paths: data.coords,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        });
        bermudaTriangle.setMap(this.map);
        
        bermudaTriangle.addListener(
          "click",
          (event, dataInfo = data) => {
            console.log('asd',dataInfo.title)
            const contentString = `
            Finca: <h1>${dataInfo.title}</h1>
            <br>
            Tamaño: <h3>${dataInfo.action}</h3>
            <br>
            Jefe familiar: <h3>${dataInfo.headline}</h3>
            <br>
            Informacion adicional: <h4>${dataInfo.subtitle}</h4>
            <br>
            <h5>Informacion de vacunacion:</h5>
            Grupo 1: <strong>0/0</strong> Personas vacunadas
            <br>
            Grupo 2: <strong>2/2</strong> Personas vacunadas
            <br>
            Grupo 3: <strong>0/3</strong> Personas vacunadas
            <br>
            <br>
            Mas informacion en seccion de asociados
            `;
            this.infoWindow.setContent(contentString);
            this.infoWindow.setPosition(event.latLng);
            this.infoWindow.open(this.map);
          }
        );
        this.polygonFields.push({
          id:data.id,
          polygon:bermudaTriangle
        });
        data.active=true;
      }else{
        const indexPolygon = this.polygonFields.findIndex(polygon=>polygon.id === data.id);
        if(indexPolygon != -1){
          this.polygonFields[indexPolygon].polygon.setMap(null);
        this.polygonFields.splice(indexPolygon,1);
        }
        data.active=false;
      }
    },
  },
  watch: {
    selected: function (val) {
    },
  },
  async mounted() {
    await this.loader
      .load()
      .then(() => {
        this.initializeMap();
      })
      .catch((e) => {
        console.log("error", e);
      });
    /**
     *
     */
  },
};
</script>
<style scoped>
.google-map {
  height: 70vh;
}
</style>