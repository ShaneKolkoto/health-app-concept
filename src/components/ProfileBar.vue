<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.img" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.full_name }}</v-list-item-title>
              <v-list-item-subtitle class="teal--text"
                >{{ getAge }} years, {{ user.country }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-icon color="teal">mdi-menu</v-icon>
          </v-list-item>
        </v-list>
        <v-col cols="12" class="">
          <v-row align="center">
            <v-tooltip
              bottom
              v-for="icon in social"
              :key="icon.id"
              color="black"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-1 white--text social-btn"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  icon
                >
                <a v-bind:href="icon.url" target="_blank">

                  <v-icon
                    class="social_icons"
                    size="24px"
                    icon
                    color="teal darken-1"
                  >
                    {{ icon.icon }}
                  </v-icon>
                </a>
                </v-btn>
              </template>
              <span>{{ icon.title }}</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-col>

      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" md="2">
            <v-card height="50px" width="10px" color="green"></v-card>
          </v-col>
          <v-col cols="12" md="10">
            <v-list two-line subheader class="ml-n8">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>Blood</v-list-item-subtitle>
                  <v-list-item-title>{{
                    medical.blood_type
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" md="2">
            <v-card height="50px" width="10px" color="red"></v-card>
          </v-col>
          <v-col cols="12" md="10">
            <v-list two-line subheader class="ml-n8">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>Height</v-list-item-subtitle>
                  <v-list-item-title>{{ medical.height }} cm</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" md="2">
            <v-card height="50px" width="10px" color="grey"></v-card>
          </v-col>
          <v-col cols="12" md="10">
            <v-list two-line subheader class="ml-n8">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>Weight</v-list-item-subtitle>
                  <v-list-item-title>{{ medical.weight }} kg</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn text
          >November
          <v-icon right> mdi-chevron-down </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12">
        <v-list>
          <v-list-item>
            <v-item-content>
              <v-btn class="mr-1" outlined color="teal darken-1">Mo</v-btn>
            </v-item-content>
            <v-item-content>
              <v-btn class="mr-1" outlined color="teal darken-1">Tu</v-btn>
            </v-item-content>
            <v-item-content>
              <v-btn class="mr-1" outlined color="teal darken-1">We</v-btn>
            </v-item-content>
            <v-item-content>
              <v-btn class="mr-1" color="teal darken-1" dark>Th</v-btn>
            </v-item-content>
            <v-item-content>
              <v-btn class="mr-1" outlined color="teal darken-1">Fr</v-btn>
            </v-item-content>
            <v-item-content>
              <v-btn class="mr-1" outlined color="teal darken-1">Sat</v-btn>
            </v-item-content>
            <v-item-content>
              <v-btn class="mr-1" outlined color="teal darken-1">Sun</v-btn>
            </v-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4 py-4"
          color="teal"
          dark
          flat
        >
          <v-list-item three-line>
            <v-list-item-avatar tile size="30">
              <v-icon size="30">mdi-tooth</v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="pa-2">
              <v-list-item-title class="headline mb-1">
                Dentist <br />
                <h6>8:00 - 9:30</h6>
                <h6>Dr. John Doe(cab 39)</h6>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4 py-4"
          color="teal lighten-5"
          flat
        >
          <v-list-item three-line>
            <v-list-item-avatar tile size="30">
              <v-icon size="30">fas fa-heartbeat</v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="pa-2">
              <v-list-item-title class="headline mb-1">
                Cardiologist <br />
                <h6>9:45 - 11:50</h6>
                <h6>Dr. Marry Jane(cab 61)</h6>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn text
          >Your Traitment
          <v-icon right> mdi-chevron-down </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12">
        <v-card
          class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n4"
          color="teal lighten-5"
          flat
        >
          <v-list-item three-line>
            <v-list-item-avatar tile size="30">
              <v-icon size="30" color="teal">mdi-pill</v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="pa-2">
              <v-list-item-title class="headline mb-1">
                Gentle Iron <br />
                <h6>
                  <span class="teal--text">2 capsules</span> with meals every
                  day
                </h6>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          id: 1,
          title: "Linkedin",
          url: "https://www.linkedin.com/in/shane-morne-kolkoto/",
          icon: "fab fa-linkedin",
        },
        {
          id: 2,
          title: "Github",
          url: "https://github.com/ShaneKolkoto",
          icon: "fab fa-github",
        },
        {
          id: 3,
          title: "Codepen",
          url: "https://codepen.io/shanekolkoto",
          icon: "fab fa-codepen",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    medical() {
      return this.$store.state.medical;
    },
    getAge() {
      var today = new Date();
      var birthDate = new Date(this.user.dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
};
</script>
