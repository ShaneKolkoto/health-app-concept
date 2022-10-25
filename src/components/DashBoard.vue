<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-app-bar color="rgba(0,0,0,0)" flat class="mx-8 mb-8 mt-3">
          <v-text-field
            prepend-icon="mdi-magnify"
            color="teal"
            placeholder="Search your symptoms"
            flat
            success
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-chip class="ma-2" color="white">
            <v-icon left color="teal"> mdi-clock-time-nine </v-icon>
            {{ getTime() }} Today {{ getDate() }}
          </v-chip>
        </v-app-bar>
      </v-col>
      <v-col cols="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n15"
        >
          <v-list-item three-line>
            <v-list-item-content class="pa-10">
              <v-list-item-title class="headline mb-1">
                Today <span class="teal--text">-10%</span> discount<br />
                on lung examinations
              </v-list-item-title>
              <v-list-item-subtitle>
                The package price includes: consultation<br />
                of a pulmonologist, spirography, cardiogram
                <span class="teal--text">></span>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="150" class="pr-10">
              <img src="lungs.png" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n10"
        >
          <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
            <h5>Statistics of your health</h5>
            <v-spacer></v-spacer>
            <v-btn color="teal" text
              >2019
              <v-icon right> mdi-chevron-down </v-icon>
            </v-btn>
            <v-btn color="teal" rounded dark depressed>Year</v-btn>
            <v-btn text>Mounth</v-btn>
          </v-app-bar>
          <template>
            <v-sparkline
              :value="value"
              color="teal"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4"
          color="teal"
          dark
        >
          <v-list-item three-line>
            <v-list-item-content class="pa-2">
              <v-list-item-title class="headline mb-1">
                Heart rate <br />
                <h2>112 bpm</h2>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="150" class="pr-10">
              <v-icon size="100">fas fa-heartbeat</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n12"
        >
          <v-app-bar color="rgba(0,0,0,0)" flat class="ma-8">
            <h5>Your activity</h5>
            <v-spacer></v-spacer>
            <v-btn color="teal" rounded dark depressed>Week</v-btn>
            <v-btn text>Month</v-btn>
          </v-app-bar>
          <v-progress-circular
            rotate="360"
            size="100"
            width="15"
            value="75"
            color="teal"
            class="mt-n5 ml-5 mb-2"
          >
            Work
          </v-progress-circular>
          <v-progress-circular
            rotate="360"
            size="100"
            width="15"
            value="70"
            color="red"
            class="mt-n5 ml-2 mb-2"
          >
            Activities
          </v-progress-circular>
          <v-progress-circular
            rotate="360"
            size="100"
            width="15"
            value="80"
            color="blue"
            class="mt-n5 ml-2 mb-2"
          >
            Self Care
          </v-progress-circular>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    fill: false,
    type: "trend",
    autoLineWidth: false,
    timestamp: "",
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    getTime() {
      const date = new Date();
      const localtime = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      return localtime;
    },
    getDate() {
      const date = new Date();
      const localdate = date.toLocaleString("default", {
        month: "short",
        day: "numeric",
      });
      return localdate;
    },
  },
};
</script>
<style scoped></style>
