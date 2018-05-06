<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-space-around>
      <v-flex xs10 sm10>
        <v-card class="my-5" v-for="(session, index) in courseContent" :key="index">
          <v-card-media :src=session.image height="400px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{session.title}}</div>
              <span class="grey--text">{{session.summary}}</span>
              <v-btn icon @click.native="visible.includes(index)? visible.splice(visible.indexOf(index), 1): visible.push(index)">
                <v-icon>{{ visible.includes(index) ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-slide-y-transition>
            <v-card-text v-show="visible.includes(index)">
              {{session.details}}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
      <v-flex xs10 sm10>
        <h2 class="headline blue--text pl-3 pb-2">Pricing</h2>
        <blockquote class="pl-3 pb-3">The course will be broken down into 11 sessions of 4 hours each. Hands on coding practice is ensured which is why machines are required. The entire course will cost you either 5000/- or 6500/- based on the availibility of a machine. Apart from coding, we will focus on developing soft skills. Every session will have a dedicated 10-15 mins slot for soft skills discussions. Also, we will have a separate session - 12th session to understand a few database concepts required for many dream company interviews</blockquote>
        <v-list three-line subheader>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <div class="subheading blue--text">INR 5000</div>
              </v-list-tile-title>
              <v-list-tile-sub-title>If you can get a laptop for each session</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title>
                <div class="subheading blue--text">INR 6500</div>
              </v-list-tile-title>
              <v-list-tile-sub-title>We provide you with machine for each session</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as courseContent from '../data/courseContent';

export default {
  name: 'CourseContent',
  data() {
    return {
      courseContent: [],
      visible: []
    };
  },
  created() {
    this.courseContent = courseContent;
  }
};
</script>