<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax :src="require('../assets/hero.jpg')" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-4 text-xs-center">Campus to Corporate</h1>
            <v-btn class="blue lighten-2 mt-5" dark large to="/AboutUs">
              About Us
            </v-btn>
          </v-layout>`
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to learn coding</h2>
              <span class="subheading">
                Learn from people who have been in your shoes
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">laptop</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Embark</div>
                    </v-card-title>
                    <v-card-text>
                      {{embark}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Train</div>
                    </v-card-title>
                    <v-card-text>
                      {{train}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">attach_money</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Achieve</div>
                    </v-card-title>
                    <v-card-text>
                      {{ achieve }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('../assets/section.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Learning to code has never been easier</div>
            <em>Make the most of your weekends</em>
            <v-btn class="blue lighten-2 mt-5" dark large to="/HallOfFame">
              Hall of Fame
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  {{ companyInfo }}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  {{ contact }}
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+91-8655446473</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Mumbai, Maharashtra</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>hmavani7@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      embark: `Make a commitment. Live it, breathe it. Allow us to be an integral part of this extraordinary journey you are about to embark upon.
        This will undoubtedly be the most memorable adventure of your lifetime. Let us gear you with all necessities to ensure maximum throughput
        and least frustration.`,

      train: `Blood, sweat and respect. The first two you give (well, kinda!) and third you earn. Say good bye to binge watching your favorite series. 
        Bid farewell to slacking on weekends. Say hello to a rigorous training regime. Our curriculum is battle tested. After that hall of fame 
        is not made up.`,

      achieve: `Once it is all over, we want you to carve out a place in the hall of fame. We ensure you this programme will give you the best returns on 
        investment. After all, Education is the only investment that is not subjected to diminishing returns. Let's recover that engineering fees 
        as soon as possible now, shall we?`,

      companyInfo: `Company? naah! Just two good professors. After graduating in 2015, we witnessed a disconnect between what is needed to get into a dream 
        company and what is available at our disposal. We are just two software developers (and professors too! duh!) who wish to teach and preach 
        programming. `,

      contact: `Well, we don't really have an office! But if you really want to, get touch with Harshil. Havan is probably snoring in the US when we are up.
        Oh, don't worry! He will definitely be a part of it.`
    };
  }
};
</script>
